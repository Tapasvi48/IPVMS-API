import { pool } from "../../core/database/db.js";
// import puppeteer from "puppeteer";
import path from "path";
import { minioClient } from "../../utils/minioSetup.js";
import { DatabaseError } from "../../Error/customError.js";

const __dirname = path.resolve();
export const uploadLetter = async (req, res, next) => {
  console.log("hit upload");
  try {
    const filename = req.file.originalname.split(".")[0] + Date.now() + ".pdf";

    await minioClient.putObject(
      "ipvms-dev",
      filename,
      req.file.buffer,
      async function (error, etag) {
        if (error) {
          console.log(error, "some error");
          throw new DatabaseError("something wrong with file upload service");
        }
        try {
          await saveUrlToDatabase(filename, req.userId, req.templateId);
          return res.status(200).json({ message: "file uploaded success" });
        } catch (err) {
          console.log(err.message);
          await deleteFileFromMinIO(filename);
          throw new DatabaseError("failed to save url to database");
        }
      }
    );
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
    const { userId, templateId, html_data } = req.body;
    console.log(html_data);
    const htmlData1 = Buffer.from(html_data, "utf8");
    const result = pool.query(
      "INSERT INTO letters (template_id,userid,html_data) VALUES($1,$2,$3)",
      [templateId, userId, htmlData1]
    );
    return res
      .status(201)
      .json({ message: "Letter added successfully", success: true });
  } catch (error) {
    next(error);
  }
};
