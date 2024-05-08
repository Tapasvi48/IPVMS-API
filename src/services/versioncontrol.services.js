import { pool } from "../core/database/db.js";
import {
  documentVersionUpload,
  getDocumentVersionsById,
  getDocumentVersionsDatewise,
  templateVersionUpload,
  getTemplateVersionsById,
  getTemplateVersionsDatewise
} from "../query/versioncontrol.js";
import {
  BadGatewayError,
  ConflictError,
  NotFoundError,
  ValidationError,
} from "../Error/customError.js";



export const documentVersionUploadService = async (body) => {
  const { version_number, doc_id, delta, created_by } = body;
  try {

    const response = await documentVersionUpload({
      version_number,
      doc_id,
      delta,
      created_by
    });

    if (response.rowCount != 0 || response.rowCount != "0") {
      const data = {
        length: response.rowCount,
        rows: response.rows
      };
      // console.log(data);
      return data;
    } else {
      throw new ValidationError("Version not created.");
    }
  } catch (error) {
    throw error;
  }

};

export const getDocumentVersionsDatewiseService = async (docId) => {

  try {
    const response = await getDocumentVersionsDatewise(docId);

    if (response.rowCount != 0 || response.rowCount != "0") {
      const data = {
        length: response.rowCount,
        rows: response.rows
      };
      // console.log(data);
      return data;
    } else {
      throw new NotFoundError("No versions of document are found");
    }

  } catch (error) {
    throw error;
  }
};

export const getDocumentVersionsByIdService = async (docId) => {

  try {
    const response = await getDocumentVersionsById(docId);

    if (response.rowCount != 0 || response.rowCount != "0") {
      const data = {
        length: response.rowCount,
        rows: response.rows
      };
      // console.log(data);
      return data;
    } else {
      throw new NotFoundError("No versions of document are found");
    }

  } catch (error) {
    throw error;
  }
};

export const templateVersionUploadService = async (body) => {
  const { version_number, doc_id, delta, created_by } = body;
  try {

    const response = await templateVersionUpload({
      version_number,
      doc_id,
      delta,
      created_by
    });

    if (response.rowCount != 0 || response.rowCount != "0") {
      const data = {
        length: response.rowCount,
        rows: response.rows
      };
      // console.log(data);
      return data;
    } else {
      throw new ValidationError("Version not created.");
    }
  } catch (error) {
    throw error;
  }

};

export const getTemplateVersionsDatewiseService = async (docId) => {

  try {
    const response = await getTemplateVersionsDatewise(docId);

    if (response.rowCount != 0 || response.rowCount != "0") {
      const data = {
        length: response.rowCount,
        rows: response.rows
      };
      // console.log(data);
      return data;
    } else {
      throw new NotFoundError("No versions of document are found");
    }

  } catch (error) {
    throw error;
  }
};

export const getTemplateVersionsByIdService = async (docId) => {

  try {
    const response = await getTemplateVersionsById(docId);

    if (response.rowCount != 0 || response.rowCount != "0") {
      const data = {
        length: response.rowCount,
        rows: response.rows
      };
      // console.log(data);
      return data;
    } else {
      throw new NotFoundError("No versions of document are found");
    }

  } catch (error) {
    throw error;
  }
};