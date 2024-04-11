import * as versioncontrolService from "../../services/versioncontrol.services.js";
import path from "path";
import dotenv from "dotenv";
import { pool } from "../../core/database/db.js";
const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const createDocumentVersion = async (req, res) => {
  try {
    // middleware apply user
    const { version_number, doc_id, delta } = req.body;
    await versioncontrolService.fileuploadService(
      version_number,
      doc_id,
      delta,
      res
    );
  } catch (error) {
    return res
      .status(500)
      .json({ error: error, success: false, message: "Internal Server Error" });
  }
};

export const getVersions = async (req, res) => {
  try {
    const docId = parseInt(req.query.docId);
    console.log(docId);
    const documents = await pool.query(
      "SELECT * FROM document_version WHERE doc_id=$1",
      [docId]
    );
    console.log(documents);
    const result = documents.rows;

    if (documents.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No version Found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: result,
      message: "User Info",
    });
  } catch (error) {
    return res.status(500).json({
      success: error.message,
      message: "Internal Server Error",
    });
  }
};
