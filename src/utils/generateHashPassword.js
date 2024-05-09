import bcrypt from "bcryptjs";
import { ValidationError } from "../Error/customError.js";

export const generateHashPassword = async (password) => {
  try {
    if (!password) {
      throw new ValidationError("password is null");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (!hashedPassword) {
      throw new ValidationError("not able to genertae hash password");
    }
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};
