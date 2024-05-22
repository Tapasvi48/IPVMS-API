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
  getAllTemplatesByStatus,
  getLetterById,
  uploadSignSwiftLetter,
  uploadLetterMinio,
} from "../controllers/file/File.controller.js";

import {
  fileuploadMiddleware,
  uploadTemplateMiddleware,
} from "../middleware/fileHandlingMiddleware.js";

import { getPaginatedDocumentDetailsWithSearch } from "../controllers/document/document.controller.js";
import { authorizationMiddeleware } from "../middleware/authMiddleware/authMiddleware.js";
import { upload } from "../middleware/miniobucketMiddleware.js";
import { minioClient } from "../utils/minioSetup.js";
import {
  getUrl,
  saveLetter,
  uploadLetter,
  updateLetterStatus,
  getAllLetters,
} from "../controllers/file/letter.controller.js";

const fileRouter = express.Router();

fileRouter.post("/uploadFile", fileuploadMiddleware, uploadFile);
fileRouter.post("/createPolicy", authorizationMiddeleware, createPolicy);
fileRouter.post("/setPolicyDetail", setPolicyDetail);
fileRouter.get("/getFile/:docId", getFile);
fileRouter.get("/getLetters", getLetters);
fileRouter.get("/getLetter/:id", getLetterById);
fileRouter.post("/saveLetter", saveLetter);
fileRouter.post(
  "/uploadTemplate",
  authorizationMiddeleware,
  uploadTemplateMiddleware,
  uploadTemplate
);
fileRouter.get("/getTemplateById/:id", getTemplateById);
fileRouter.post("/updateDocument/:id", editDocument);
// fileRouter.post("/saveAsPdf", saveAsPdf);
fileRouter.get("/getTemplate", gettemplates);
fileRouter.get("/getAllTemplate", getAllTemplates);
fileRouter.get("/getTemplateByStatus/:status", getAllTemplatesByStatus);
// fileRouter.delete("/deleteTemplate", deleteTemplate);
fileRouter.get("/getpaginateddocuments", getpaginateddocuments);
fileRouter.get("/getRecentPolicies", getRecentPolicies);

// Document routes
fileRouter.get("/document", getPaginatedDocumentDetailsWithSearch);
//bucket test endpoint
fileRouter.post("/uploadLetter", upload.single("file"), uploadLetter);
fileRouter.get("/getLetterUrl/:filename", getUrl);
fileRouter.post("/upload/signswift", uploadSignSwiftLetter);
fileRouter.post("/upload/letterpdf", upload.single("file"), uploadLetterMinio);
fileRouter.post("/upload/updateLetterStatus", updateLetterStatus);
fileRouter.get("/letter/:id", getAllLetters);

export default fileRouter;
