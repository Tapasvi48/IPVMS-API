import express from "express";
import { updateLetterStatushook } from "../controllers/file/letter.controller.js";

const hookRouter = express.Router();
hookRouter.post("/updateLetterStatus/:id", updateLetterStatushook);

export default hookRouter;
