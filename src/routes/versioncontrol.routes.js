import express from "express";
import {
  createDocumentVersion,
  getDocumentVersionsById,
  getDocumentVersionsDatewise,
  getVersions
} from "../controllers/document/document.controller.js";
import {
  createTemplateVersion,
  getTemplateVersionsById,
  getTemplateVersionsDatewise
} from "../controllers/template/template.controller.js";

const versionControlRouter = express.Router();

versionControlRouter.post("/createDocumentVersion", createDocumentVersion);
versionControlRouter.get("/getDocumentVersionsDatewise", getDocumentVersionsDatewise);
versionControlRouter.get("/getDocumentVersionsById", getDocumentVersionsById);


versionControlRouter.post("/createTemplateVersion", createTemplateVersion);
versionControlRouter.get("/getTemplateVersionsDatewise", getTemplateVersionsDatewise);
versionControlRouter.get("/getTemplateVersionsById", getTemplateVersionsById);


versionControlRouter.get("/getVersions", getVersions);
export default versionControlRouter;
