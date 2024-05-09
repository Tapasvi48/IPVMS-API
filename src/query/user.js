import { pool } from "../core/database/db.js";
import { DatabaseError } from "../Error/customError.js";
export const getUser = async (data) => {
  const { email } = data;

  try {
    const user = await pool.query("SELECT * FROM user_table WHERE email=$1", [
      email,
    ]);

    return user;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (userData) => {
  const { firstName, lastName, email, hashedPassword, isActive } = userData;
  console.log(firstName, lastName, email, hashedPassword, isActive);

  try {
    const query = {
      text: "INSERT INTO user_table(first_name,last_name,email,password,is_active) VALUES($1,$2,$3,$4,$5) RETURNING *",
      values: [firstName, lastName, email, hashedPassword, true],
    };
    const user = await pool.query(query);

    return user;
  } catch (error) {
    throw new DatabaseError("Error in creating User");
  }
};

export const updatedUser = async (userData) => {
  const { firstName, lastName, email, hashedPassword, isActive } = userData;
  console.log(firstName, lastName, email, hashedPassword, isActive);

  try {
    const query = {
      text: "UPDATE user_table SET first_name=$1,last_name=$2,email=$3,password=$4,password_reset=$5 WHERE email=$3 RETURNING *",
      values: [firstName, lastName, email, hashedPassword, true],
    };

    const user = await pool.query(query);
    console.log(user.rows[0]);

    return user;
  } catch (error) {
    throw new DatabaseError("Error in updating User");
  }
};

export const getAllUser = async () => {
  try {
    const user = await pool.query(
      "SELECT first_name,last_name,created_at,updated_at,email,id FROM user_table"
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
      "UPDATE user_table SET password=$1 WHERE id=$2 RETURNING *",
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
export const getUsers = async (data) => {
  const name = data;

  const firstName = name?.split(" ")[0] || "";
  let lastName = name?.split(" ")[1] || "";
  console.log(firstName, lastName);
  //first name  space last name

  try {
    const user = await pool.query(
      " SELECT first_name,last_name,created_at,updated_at,email,id FROM user_table WHERE first_name ILIKE '%'||$1||'%' or last_name ILIKE '%'||$1||'%' and last_name ILIKE '%'||$2||'%'  ",
      [firstName, lastName]
    );
    return user;
  } catch (error) {
    throw new DatabaseError("Error in getting User");
  }
};
