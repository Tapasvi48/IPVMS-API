import { pool } from "../../core/database/db.js";
// import puppeteer from "puppeteer";
import path from "path";
import { minioClient } from "../../utils/minioSetup.js";
import { DatabaseError, ValidationError } from "../../Error/customError.js";
import { sendEmail, sendLetterEmail } from "../../core/Email/sendEmail.js";
import { error } from "console";
import { entityTypeIdMapping } from "../../utils/notification.config.js";
import { Entity_Group } from "../../constants/notificationsConstants.js";
import { add_notification } from "../../services/notification.services.js";

const __dirname = path.resolve();
export const uploadLetter = async (req, res, next) => {
  console.log("hit upload");
  try {
    const filename = req.file.originalname;
    const templateId = req.body.templateId;
    const userId = req.body.userId;
    console.log("userrrr id is", userId);
    const email = req.body.email;
    const actor_id = req.body.ipvms_userId;
    const recipient_name = req.body.recipient_name;
    const recipient_email = req.body.recipient_email;
    console.log(email);
    var result;

    try {
      await minioClient.putObject(
        "ipvms-dev",
        filename,
        req.file.buffer,
        async function (err, etag) {
          if (err) {
            console.log(err);
            throw new DatabaseError("error in uplaoding to minio");
          }
        }
      );
    } catch (error) {
      throw new DatabaseError();
    }

    try {
      const html_data = req.body.html_data;
      const letter_id = req.body.letter_id;
      const htmlData1 = Buffer.from(html_data, "utf8");
      if (typeof letter_id !== "undefined") {
        result = await pool.query(
          "INSERT INTO letters (template_id,userid,html_data,status,filepath,recipient_email,recipient_name) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
          [
            templateId,
            userId,
            htmlData1,
            "PENDING",
            filename,
            recipient_email,
            recipient_name,
          ]
        );
      } else {
        result = await pool.query(
          "UPDATE TABLE letters SET status=$1,filepath=$2  WHERE id=$3 RETURNING *",
          ["PENDING", filename, letter_id]
        );
      }
      await add_notification(
        entityTypeIdMapping.LETTER_SENT,
        result?.rows[0]?.id,
        Entity_Group.LETTER,
        userId,
        actor_id
      );
    } catch (error) {
      console.log(error);
      throw new DatabaseError("some error in saving letter in db");
    }
    try {
      if (result) {
        await sendLetterEmail(req.file, email);
      }
    } catch (error) {
      throw error;
    }
    return res.status(200).json({ message: "pdf send success", success: true });
  } catch (error) {
    next(error);
  }
};

export const saveUrlToDatabase = async (url, userid, template_id) => {
  console.log("hit");
  try {
    const queryText =
      "INSERT INTO letters (filepath,template_id,userid) VALUES ($1,$2,$3)";
    const res = await pool.query(queryText, [url, template_id, userid]);
    console.log(res);
  } catch (error) {
    throw new DatabaseError("some error in creating letter");
  }
};
export const deleteFileFromMinIO = async (filename) => {
  await minioClient.removeObject("ipvms-dev", filename);
};
export const deleteLetter = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (typeof id === "undefined") {
      throw new ValidationError("id is not defined");
    }
    try {
      const result = await pool.query("DELETE FROM letters where id=$1", [id]);
      return res.status(200).json({ success: true, message: "successfull" });
    } catch (error) {
      console.log(error.message, "error");
      throw new DatabaseError("some error in db query");
    }
  } catch (error) {
    next(error);
  }
};

export const getUrl = async (req, res, next) => {
  const { filename } = req.params;
  var url = "";

  try {
    await minioClient.presignedGetObject(
      "ipvms-dev",
      filename,
      1 * 60 * 60,
      function (err, presignedUrl) {
        if (err) {
          console.log(err.message);
          throw new DatabaseError("error in getting file");
        }
        url = presignedUrl;
      }
    );

    return res.status(200).json({ message: "get url success", url: url });
  } catch (error) {
    next(error);
  }
};

export const saveLetter = async (req, res, next) => {
  console.log("hit upload");
  try {
    const {
      recipientId,
      templateId,
      html_data,
      letter_id,
      createdby,
      email,
      name,
    } = req.body;

    const htmlData1 = Buffer.from(html_data, "utf8");
    if (!letter_id) {
      const result = pool.query(
        "INSERT INTO letters (template_id,userid,html_data,created_by,recipient_name,recipient_email) VALUES($1,$2,$3,$4,$5,$6)",
        [templateId, recipientId, htmlData1, createdby, name, email]
      );
    } else {
      const result = pool.query(
        "UPDATE  letters SET html_data=$1 WHERE id=$2",
        [htmlData1, letter_id]
      );
    }
    return res
      .status(201)
      .json({ message: "Letter added successfully", success: true });
  } catch (error) {
    next(error);
  }
};
export const updateLetterStatus = async (req, res, next) => {
  try {
    const html_data = req.body.htmlData;
    const htmlData1 = Buffer.from(html_data, "utf8");
    const letter_id = req.body.letterId;
    const created_by = req.body.createdBy;
    const userId = req.body.recipientId;
    const template_id = req.body.templateId;
    const name = req.body.name;
    const email = req.body.email;
    const fileName = req.body.fileName;
    const swift_id = req.body.swift_id;
    if (typeof letter_id !== "undefined") {
      const result = pool.query(
        "UPDATE TABLE letters SET html_data=$1,status=$3,swift_id=$4 WHERE id=$2",
        [htmlData1, letter_id, "PENDING", swift_id]
      );
    } else {
      const result = pool.query(
        "INSERT INTO  letters (html_data,status,created_by,userid,template_id,recipient_name,recipient_email,swift_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
        [
          htmlData1,
          "PENDING",
          created_by,
          userId,
          template_id,
          name,
          email,
          swift_id,
        ]
      );
    }
    return res.status(200).json({ message: "success", success: true });
  } catch (error) {
    next(error);
  }
};

export const getAllLetters = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId, "user iddd is");
    const letters = await pool.query(
      "SELECT l.status ,u.first_name as firstname ,l.recipient_name as name,l.recipient_email as email,u.last_name as lastname from letters l JOIN user_table u ON u.id=l.userid  where created_by=$1",
      [userId]
    );

    console.log("wered user id", letters.rows);
    return res
      .status(200)
      .json({ message: "All queue letters are", data: letters.rows });
  } catch (error) {
    next(error);
  }
};
export const updateLetterStatushook = async (req, res, next) => {
  const swift_id = req.params.id;
  console.log(swift_id, "Swift id is");
  try {
    await pool.query("UPDATE letters SET status=$1 where swift_id=$2", [
      "SIGNED",
      swift_id,
    ]);
    // await add_notification(
    //   entityTypeIdMapping.LETTER_SIGNED,
    //   doc_id,
    //   Entity_Group.LETTER,
    //   notifier_id,
    //   actor_id
    // );
    return res
      .status(200)
      .json({ success: true, message: "succesully updated status" });
  } catch (error) {
    next(error);
  }
};
