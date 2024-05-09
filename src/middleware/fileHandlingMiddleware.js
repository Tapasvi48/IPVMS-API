import { ValidationError } from "../Error/customError.js";

export const fileuploadMiddleware = async (req, res, next) => {
  let { htmlText, docId } = req.body;
  docId = parseInt(docId);
  if (!htmlText) {
    next(new ValidationError("html text required"));
  }
  if (!docId) {
    next(new ValidationError("doc id required"));
  }

  const textBytesSize = Buffer.byteLength(htmlText, "utf8");
  if (textBytesSize > 10 * 1024 * 1024) {
    next(new ValidationError("File size should be less than 10MB"));
  }

  next();
};

export const checkDocIdMiddleware = async (req, res, next) => {
  let { docId } = req.params;
  docId = parseInt(docId);
  if (!docId) {
    next(new ValidationError("doc id required"));
  }
  next();
};

export const checkIdMiddleware = async (req, res, next) => {
  let { id } = req.params;
  id = parseInt(id);
  if (!id) {
    next(new ValidationError("id required"));
  }
  next();
};

export const uploadTemplateMiddleware = async (req, res, next) => {
  const { name, description, categoryId, htmlText } = req.body;
  // if (!name || !description || !categoryId || !htmlText) {
  //   return res.status(400).json({
  //     success: false,
  //     message: "Invalid input",
  //   });
  // }
  //check htmlText size->
  const textBytesSize = Buffer.byteLength(htmlText, "utf8");
  if (textBytesSize > 10 * 1024 * 1024) {
    next(new ValidationError("File size should be less than 10MB"));
  }
  next();
};

export const createVersionMiddleware = async (req, res, next) => {
  const { version_number, doc_id, delta, created_by } = req.body;

  if (!version_number || version_number === '') {
    next(new ValidationError("version_number or doc_id or delta are missing"));
  }

  if (!doc_id || doc_id === '') {
    next(new ValidationError("version_number or doc_id or delta are missing"));
  }

  if (!delta || delta === '' || Object.keys(delta).length === 0) {
    next(new ValidationError("version_number or doc_id or delta are missing"));
  }

  next();
};
