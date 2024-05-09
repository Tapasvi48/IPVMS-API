import path from "path";
import dotenv from "dotenv";
import { pool } from "../../core/database/db.js";
import { VersionfileuploadService } from "../../services/versioncontrol.services.js";
import { getPaginatedDocumentDetailsWithSearchService } from "../../services/file.services.js";
const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const createDocumentVersion = async (req, res, next) => {
  try {
    // middleware apply user
    const { version_number, doc_id, delta, created_by } = req.body;
    const result = await VersionfileuploadService(
      version_number,
      doc_id,
      delta,
      created_by
    );

    return res.status(201).json({
      success: true,
      message: "Document version created:",
    });
  } catch (error) {
    next(error);
  }
};

export const getDocumentVersionsDatewise = async (req, res, next) => {
  try {
    console.log(req.query);
    const docId = parseInt(req.query.docId);
    console.log(docId);

    const result = await versioncontrol.getDocumentVersionsDatewiseService({
      docId,
    });
    return res.status(200).json({
      status: "success",
      message: "Document version:",
      length: result.length,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};

export const getDocumentVersionById = async (req, res, next) => {
  try {
    const docId = parseInt(req.query.id);
    // console.log(docId);

    const result = await versioncontrol.getDocumentVersionsByIdService({
      docId,
    });
    return res.status(200).json({
      status: "success",
      message: "Document version:",
      length: result.length,
      data: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
};

export const getPaginatedDocumentDetailsWithSearch = async (req, res, next) => {
  try {
    const result = await getPaginatedDocumentDetailsWithSearchService(req);

    return res.status(200).json({
      message: "documents are",
      success: true,
      length: result.length,
      data: result.rows,
    });
  } catch (error) {
    next(error);
  }
};
