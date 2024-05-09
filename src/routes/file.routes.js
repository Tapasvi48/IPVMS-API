import express from "express";

import {
  getTemplateById,
  getFile,
  uploadFile,
  uploadTemplate,
  editDocument,
  gettemplates,
  getRecentPolicies,
  getpaginateddocuments,
  createPolicy,
  setPolicyDetail,
  getAllTemplates,
  getLetters,
} from "../controllers/file/File.controller.js";

import {
  fileuploadMiddleware,
  uploadTemplateMiddleware,
} from "../middleware/fileHandlingMiddleware.js";

import { getPaginatedDocumentDetailsWithSearch } from "../controllers/document/document.controller.js";
import { authorizationMiddeleware } from "../middleware/authMiddleware/authMiddleware.js";

const fileRouter = express.Router();

fileRouter.post("/uploadFile", fileuploadMiddleware, uploadFile);
fileRouter.post("/createPolicy", authorizationMiddeleware, createPolicy);
fileRouter.post("/setPolicyDetail", setPolicyDetail);
fileRouter.get("/getFile/:docId", getFile);
fileRouter.get("/getLetters", getLetters);
fileRouter.post("/uploadTemplate", uploadTemplateMiddleware, uploadTemplate);
fileRouter.get("/getTemplateById/:id", getTemplateById);
fileRouter.post("/updateDocument/:id", editDocument);
// fileRouter.post("/saveAsPdf", saveAsPdf);
fileRouter.get("/getTemplate", gettemplates);
fileRouter.get("/getAllTemplate", getAllTemplates);

fileRouter.get("/getpaginateddocuments", getpaginateddocuments);
fileRouter.get("/getRecentPolicies", getRecentPolicies);

// Document routes
fileRouter.get("/document", getPaginatedDocumentDetailsWithSearch);

export default fileRouter;
