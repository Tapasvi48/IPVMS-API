import express from "express";
import {
  createNewCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
} from "../controllers/catogery/catogery.controller.js";
import { checkCategoryName } from "../middleware/categoryMiddleware.js";
import { checkIdMiddleware } from "../middleware/fileHandlingMiddleware.js";

const categoryRouter = express.Router();

categoryRouter.post("/createNewCategory", checkCategoryName, createNewCategory);
categoryRouter.get("/getAllCategories", getAllCategories);
categoryRouter.patch("/editCategory", checkIdMiddleware, checkCategoryName, editCategory);
categoryRouter.patch("/deleteCategory", checkIdMiddleware, deleteCategory);
// categoryRouter.get('/getDocumentCategories',);


export default categoryRouter;
