import express from "express";
import { globalSearch } from "../controllers/search/globalSearch.js";

const searchRouter = express.Router();

searchRouter.post("/search", globalSearch);

export default searchRouter;



