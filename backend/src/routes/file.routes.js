import express from "express";
import {
  uploadFile,
  getFile,
  uploadTemplate,
  getTemplateById,
} from "../controllers/file/File.controller.js";
import {
  fileuploadMiddleware,
  uploadTemplateMiddleware,
} from "../middleware/authMiddleware/fileMiddleware.js";
const fileRouter = express.Router();

fileRouter.post("/uploadFile", fileuploadMiddleware, uploadFile);
fileRouter.get("/getFile/:docId", getFile);
fileRouter.post("/uploadTemplate", uploadTemplateMiddleware, uploadTemplate);
fileRouter.get("/getTemplateById/:id", getTemplateById);

export default fileRouter;