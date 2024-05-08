import * as versioncontrol from "../../services/versioncontrol.services.js";
import path from "path";
import dotenv from "dotenv";
import { pool } from "../../core/database/db.js";
const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });



export const createDocumentVersion = async (req, res, next) => {
  try {
    // middleware apply user
    // const { version_number, doc_id, delta } 
    const body = req.body;
    const result = await versioncontrol.documentVersionUploadService(body);

    return res.status(200).json({
      success: true,
      message: "Document version created:",
      length: result.length,
      data: result.rows
    });
  } catch (error) {
    next(error);
  };
};

export const getDocumentVersionsDatewise = async (req, res, next) => {
  try {
    console.log(req.query);
    const docId = parseInt(req.query.docId);
    console.log(docId);

    const result = await versioncontrol.getDocumentVersionsDatewiseService({ docId });
    return res.status(200).json({
      status: "success",
      message: "Document version:",
      length: result.length,
      data: result.rows
    });

  } catch (error) {
    next(error);
  }
};

export const getDocumentVersionsById = async (req, res, next) => {
  try {
    const docId = parseInt(req.query.id);
    console.log(docId);

    const result = await versioncontrol.getDocumentVersionsByIdService({ docId });
    return res.status(200).json({
      status: "success",
      message: "Document version:",
      length: result.length,
      data: result.rows
    });

  } catch (error) {
    next(error);
  }
};

