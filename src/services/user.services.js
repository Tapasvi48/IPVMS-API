import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail, sendInvitationEmail } from "../core/Email/sendEmail.js";
import {
  AccountSetupError,
  BadGatewayError,
  ConflictError,
  DatabaseError,
  InvalidTokenError,
  NotFoundError,
  ValidationError,
} from "../Error/customError.js";
import { generatePassword } from "../utils/randomPasswordGenerator.js";
import {
  createUser,
  getAllUser,
  getUser,
  updatePassword,
  updatedUser,
} from "../query/user.js";
import { generateHashPassword } from "../utils/generateHashPassword.js";

export const registerUserService = async (body) => {
  // admin register user with false reset_password
  const { firstName, lastName, email, password, updatedBy } = body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await getUser({ email });

    if (user.rows.length > 0) {
      throw new ConflictError("User email already Exist");
    }
  } catch (error) {
    throw error;
  }
  try {
    console.log(firstName, lastName, email, password);
    const isActive = true;
    const createdUserResult = await createUser({
      firstName,
      lastName,
      email,
      hashedPassword,
      isActive,
    });
    const createdUser = createdUserResult.rows[0];
    delete createdUser["password"];
    return createdUser;
  } catch (error) {
    throw error;
  }
};
export const updateUserService = async (body) => {
  // admin register user with false reset_password

  const { firstName, lastName, email, password, updatedBy } = body;
  console.log(body);
  console.log(firstName, lastName, email, password);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    console.log(firstName, lastName, email, hashedPassword);
    const isActive = true;
    const createdUserResult = await updatedUser({
      firstName,
      lastName,
      email,
      hashedPassword,
      isActive,
    });

    return createdUserResult.rows[0];
  } catch (error) {
    throw error;
  }
};

export const loginUserService = async (body) => {
  const { email, password } = body;
  try {
    const user = await getUser({ email });
    console.log("email", user.rows[0]);
    if (user.rows.length === 0) {
      throw new NotFoundError("User not found");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      throw new ValidationError("invalid credentials");
    }

    console.log(process.env.JWT_SECRET);
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY_TIME,
    });
    const users = user.rows[0];
    delete users["password"];
    return { users, token };
  } catch (error) {
    throw error;
  }
};
export const getAllUserService = async () => {
  try {
    const data = await getAllUser();
    if (data.rows.length === 0) {
      throw new NotFoundError("User not found");
    }
    return data.rows;
  } catch (error) {
    throw error;
  }
};

export const forgotPasswordService = async (email) => {
  try {
    const user = await getUser({ email });
    if (user.rows.length === 0) {
      throw new NotFoundError("User not found");
    }
    //send email with token
    try {
      const secretToken = jwt.sign(
        { id: user.rows[0].id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      return secretToken;
    } catch (error) {
      throw new DatabaseError("error in generating token");
    }
  } catch (error) {
    throw error;
  }
};

export const sendEmailService = async (email, secretToken) => {
  try {
    await sendEmail(email, secretToken);
  } catch (error) {
    throw error;
  }
};

export const resetPasswordService = async (password, userId) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updatedUser = await updatePassword({ hashedPassword, userId });
    const users = updatedUser.rows[0];
    const token2 = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY_TIME,
    });
    delete users["password"];
    console.log(users, token2);
    return { users, token2 };
  } catch (error) {
    throw error;
  }
};

export const resetPasswordAuth = async (password, userId) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updatedUser = await updatePassword({ hashedPassword, userId });
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY_TIME,
    });
    const user = updatedUser.rows[0];
    delete user["password"];
    return { user, token };
  } catch (error) {
    throw new ValidationError("error in reseting password");
  }
};

export const sendInvite = async (body) => {
  try {
    const { name, email } = body;
    //middleware check name and email null?
    console.log(email, name);
    if (!email || !name) {
      throw new ValidationError("missing fields");
    }
    const user = await getUser({ email });
    // if email already exist then conflict error
    if (user.rows.length > 0) {
      throw new ConflictError("User email already Exist");
    } else {
      const firstName = name.split(" ")[0];
      const lastName = name.split(" ")[1] || "";
      const password = generatePassword();
      console.log("");
      const hashedPassword = await generateHashPassword(password);
      const isActive = true;
      if (hashedPassword) {
        const newUser = await createUser({
          firstName,
          lastName,
          email,
          hashedPassword,
          isActive,
        });
        if (newUser) {
          const mailsuccess = await sendInvitationEmail(email, password);
          console.log("mail success");
        }
      }
    }
  } catch (error) {
    throw error;
  }
};
