import { pool } from "../../core/database/db.js";
import dotenv from "dotenv";
import path from "path";
import * as userService from "../../services/user.Services.js";
import {
  AuthorizationError,
  ConflictError,
  NotFoundError,
} from "../../Error/customError.js";

const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const registerUser = async (req, res, next) => {
  try {
    const createdUser = await userService.registerUserService(req.body);
    return res.status(201).json({
      success: true,
      message: "User Registered",
      data: createdUser,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { users, token } = await userService.loginUserService(req.body);
    return res.status(200).json({
      success: true,
      message: "Login Success",
      token: token,
      user: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUserService();
    return res
      .status(200)
      .json({ success: true, message: "all users are", data: users });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  //email validation above
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }
  try {
    const secretToken = await userService.forgotPasswordService(email);
    if (secretToken) {
      await userService.sendEmailService(email, secretToken);
      return res.status(200).json({
        success: true,
        message: "Email sent",
        secretToken: secretToken,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  // const { token }=req.params;
  const { password, confirmPassword } = req.body;
  const userId = req.user.id;
  if (userId === undefined) {
    throw new NotFoundError("user not found");
  }
  try {
    const { users, token2 } = await userService.resetPasswordService(
      password,
      userId
    );
    return res.status(200).json({
      success: true,
      message: "Password reset Success",
      user: users,
      token: token2,
    });
  } catch (error) {
    next(error);
  }
};

export const resetPasswordAuth = async (req, res, next) => {
  const userId = req.user.id;
  const { password, confirmPassword } = req.body;
  try {
    if (userId === undefined) {
      throw new NotFoundError("user not found");
    }
    const { user, token } = await userService.resetPasswordAuth(
      password,
      userId
    );
    return res.status(200).json({
      success: true,
      message: "Password reset Success",
      user: user,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserInfo = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId, "user Id");
    const user = await pool.query(
      `SELECT * FROM user_table as u WHERE u.id=$1`,
      [userId]
    );

    const users = user.rows[0];
    console.log(users);

    if (user.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: users,
      message: "User Info",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getUserInfoById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    console.log(userId, "user Id");
    const user = await pool.query(
      `SELECT u.first_name,u.last_name,u.email,u.created_at,u.updated_at,u.updated_by,u.is_active,u.employee_code,u.mobile_number,b.business_unit,b.department,b.department,b.subdepartment,b.designation FROM user_table AS u 
      JOIN user_position AS b ON u.id=b.user_id WHERE u.id=$1`,
      [userId]
    );

    const users = user.rows[0];
    console.log(users);

    if (user.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: users,
      message: "User Info",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const sendInvite = async (req, res, next) => {
  //send invite to user who are not on platform yet

  try {
    const email = await userService.sendInvite(req.body);
    return res.status(200).json({
      success: true,
      message: "Invitation send successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const setupAccount = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new AuthorizationError(
        "User is not logged in,log in first to setup your account"
      );
    }
    const userId = req.user.id;
    const user = await pool.query("SELECT * FROM user_table WHERE id=$1", [
      userId,
    ]);
    if (user.password_reset) {
      throw new AccountSetupError("Account is already setup for user");
    } else {
      const createdUser = await userService.updateUserService(req.body);
      console.log(createdUser);
      return res.status(201).json({
        success: true,
        message: "User Registered Success",
      });
    }
  } catch (error) {
    next(error);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const { name } = req.query;
    console.log(name);
    if (name === "") {
      return res
        .status(200)
        .json({ success: true, message: "all users are", data: null });
    }
    // console.log("name is", name);
    const users = await userService.getUsersService(name);
    return res
      .status(200)
      .json({ success: true, message: "all users are", data: users });
  } catch (error) {
    next(error);
  }
};
