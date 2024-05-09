//register, login
//register ->Email valid,password valid,first Name,last Name,
//updated By ->id or null  later->imp in rbac who is updating

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import {
  emailValidation,
  passwordValidation,
} from "../../utils/inputValidation.js";
import {
  AuthorizationError,
  DatabaseError,
  InvalidTokenError,
  ValidationError,
} from "../../Error/customError.js";
const __dirname = path.resolve();
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  if (
    !email ||
    !password ||
    !passwordValidation(password).success ||
    !emailValidation(email).success
  ) {
    next(new ValidationError("validation error"));
  }
  next();
};

//401->unauthorized wrong pass
//400->Bad request

export const registerMiddleware = async (req, res, next) => {
  console.log("in middleware");
  const { firstName, lastName, email, password, updatedBy } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !passwordValidation(password).success ||
    !emailValidation(email).success
  ) {
    next(new ValidationError("validation error"));
  }
  next();
};

export const authorizationMiddeleware = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization");
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
    next(new AuthorizationError("Invalid authorization header"));
  }
  const token = authorizationHeader?.replace("Bearer ", "");
  if (!token) {
    next(new AuthorizationError("Authorization token not found"));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    next(new AuthorizationError("Invalid token"));
  }
};

export const resetPasswordMiddleware = async (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    next(new ValidationError("Password and confirm pasword are required"));
  }

  if (!passwordValidation(password).success) {
    next(new ValidationError("password invalid"));
  }

  if (password !== confirmPassword) {
    next(new ValidationError("Password and Confirm Password does not match"));
  }

  next();
};
export const tokenMiddleware = async (req, res, next) => {
  const { token } = req.params;
  console.log(token, "in token middleware");

  if (!token) {
    next(new InvalidTokenError("Invalid token"));
  }
  try {
    try {
      const verification = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verification;
    } catch (error) {
      next(new InvalidTokenError("Token either expired or invalid"));
    }

    next();
  } catch (error) {
    next(new DatabaseError("Internal Server Error"));
  }
};
