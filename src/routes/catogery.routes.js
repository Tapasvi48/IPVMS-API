import express from "express";
import {
  createNewCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
} from "../controllers/catogery/catogery.controller.js";

const categoryRouter = express.Router();

categoryRouter.post("/createNewCategory", createNewCategory);
categoryRouter.get("/getAllCategories", getAllCategories);
categoryRouter.patch("/editCategory", editCategory);
categoryRouter.patch("/deleteCategory", deleteCategory);

export default categoryRouter;
