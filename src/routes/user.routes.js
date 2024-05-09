import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUsers,
  forgotPassword,
  resetPassword,
  resetPasswordAuth,
  getUserInfo,
  sendInvite,
  setupAccount,
  getUserInfoById,
} from "../controllers/user/auth.controller.js";

import {
  authorizationMiddeleware,
  loginMiddleware,
  registerMiddleware,
  tokenMiddleware,
  resetPasswordMiddleware,
} from "../middleware/authMiddleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/registerUser", registerMiddleware, registerUser);
userRouter.post("/loginUser", loginMiddleware, loginUser);
userRouter.get("/getAllUsers", getAllUsers);
userRouter.get("/getUsers", getUsers);

userRouter.post("/forgotPassword", forgotPassword);
userRouter.post(
  "/resetPassword/:token",
  tokenMiddleware,
  resetPasswordMiddleware,
  resetPassword
);
userRouter.post(
  "/resetPassword",
  authorizationMiddeleware,
  resetPasswordMiddleware,
  resetPasswordAuth
);
userRouter.get("/getUserInfo", authorizationMiddeleware, getUserInfo);
userRouter.get("/getUserInfo/:id", getUserInfoById);

userRouter.post("/sendInvite", sendInvite);
userRouter.post("/accountsetup", authorizationMiddeleware, setupAccount);
export default userRouter;
