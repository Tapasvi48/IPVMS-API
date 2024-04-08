import express from "express";
import {
  getTemplateById,
  getFile,
  uploadFile,
  uploadTemplate,
  getdocument,
} from "../controllers/fIle/File.controller.js";

import {
  fileuploadMiddleware,
  uploadTemplateMiddleware,
} from "../middleware/authMiddleware/fileMiddleware.js";
const fileRouter = express.Router();

fileRouter.post("/uploadFile", fileuploadMiddleware, uploadFile);
fileRouter.get("/getFile/:docId", getFile);
fileRouter.post("/uploadTemplate", uploadTemplateMiddleware, uploadTemplate);
fileRouter.get("/getTemplateById/:id", getTemplateById);
fileRouter.get("/document", getdocument);

export default fileRouter;
