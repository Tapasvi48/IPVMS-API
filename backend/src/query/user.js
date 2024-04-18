import { pool } from "../core/database/db.js";
import { DatabaseError } from "../Error/customError.js";
export const getUser = async (data) => {
  const { email } = data;
  const query = {
    text: "SELECT * FROM puser WHERE email=$1",
    values: [email],
  };
  try {
    const user = await pool.query(query);
    return user;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  const { firstName, lastName, email, hashedPassword, isActive } = userData;

  try {
    const query = {
      text: "INSERT INTO puser(first_name,last_name,email,password,is_active) VALUES($1,$2,$3,$4,$5) RETURNING *",
      values: [firstName, lastName, email, hashedPassword, true],
    };
    const user = await pool.query(query);
    return user;
  } catch (error) {
    throw new DatabaseError("Error in creating User");
  }
};

export const getAllUser = async () => {
  try {
    const user = await pool.query(
      "SELECT first_name,last_name,created_at,updated_at,email,id FROM puser"
    );
    return user;
  } catch (error) {
    throw new DatabaseError("Error in getting User");
  }
};

export const updatePassword = async (data) => {
  const { hashedPassword, userId } = data;
  try {
    const user = await pool.query(
      "UPDATE puser SET password=$1 WHERE id=$2 RETURNING *",
      [hashedPassword, userId]
    );
    return user;
  } catch (error) {
    throw new DatabaseError("Error in Update password");
  }
};

export const resetPassword = async ({ data }) => {
  const { userId } = data;

  try {
    return user;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};
