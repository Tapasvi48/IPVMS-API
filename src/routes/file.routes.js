import express from "express";
import {
  getTemplateById,
  getFile,
  uploadFile,
  uploadTemplate,
  getdocument,
  editDocument,

  gettemplates,
  getRecentPolicies,
  getpaginateddocuments,
} from "../controllers/file/file.Controller.js";

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
fileRouter.post("/updateDocument/:id", editDocument);
// fileRouter.post("/saveAsPdf", saveAsPdf);
fileRouter.get("/getTemplate", gettemplates);
fileRouter.get("/getpaginateddocuments", getpaginateddocuments);
fileRouter.get("/getRecentPolicies", getRecentPolicies);

export default fileRouter;
