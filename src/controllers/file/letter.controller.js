import { pool } from "../../core/database/db.js";
// import puppeteer from "puppeteer";
import path from "path";
import { minioClient } from "../../utils/minioSetup.js";
import { DatabaseError } from "../../Error/customError.js";
import { sendEmail, sendLetterEmail } from "../../core/Email/sendEmail.js";
import { error } from "console";

const __dirname = path.resolve();
export const uploadLetter = async (req, res, next) => {
  console.log("hit upload");
  try {
    const filename = req.file.originalname.split(".")[0] + Date.now() + ".pdf";
    const templateId = req.body.templateId;
    const userId = req.body.userId;
    const email = req.body.email;
    console.log(email);
    var result;
    try {
      const html_data = req.body.html_data;
      const letter_id = req.body.letter_id;
      const htmlData1 = Buffer.from(html_data, "utf8");
      if (typeof letter_id !== "undefined") {
        result = await pool.query(
          "INSERT INTO letters (template_id,userid,html_data) VALUES($1,$2,$3)",
          [templateId, userId, htmlData1]
        );
      } else {
        result = await pool.query(
          "UPDATE TABLE letters SET html_data=$1 WHERE id=$2",
          [htmlData1, letter_id]
        );
      }
    } catch (error) {
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
  const filename = req.filename;
  try {
    await minioClient.removeObject("ipvms-dev", filename);
  } catch (error) {
    next(new DatabaseError("deleting file from minio error"));
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
    const { recepientId, templateId, html_data, letter_id, createdby } =
      req.body;

    const htmlData1 = Buffer.from(html_data, "utf8");
    if (!letter_id) {
      const result = pool.query(
        "INSERT INTO letters (template_id,userid,html_data,created_by) VALUES($1,$2,$3,$4)",
        [templateId, recepientId, htmlData1, createdby]
      );
    } else {
      const result = pool.query(
        "UPDATE TABLE letters SET html_data=$1 WHERE id=$2",
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
    return res.status(200).json({ message: "succes" });
  } catch (error) {
    next(error);
  }
};

export const getAllLetters = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const letters = await pool.query(
      "SELECT l.status ,u.first_name as firstname ,u.last_name  as lastname from letters l JOIN user_table u ON u.id=l.userid  where created_by=$1",
      [userId]
    );
    return res
      .status(200)
      .json({ message: "All queue letters are", data: letters.rows });
  } catch (error) {
    next(error);
  }
};
