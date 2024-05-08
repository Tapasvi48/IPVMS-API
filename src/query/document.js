import { pool } from "../core/database/db.js";

export const updateDocument = async (data) => {
  try {
    const { htmlText, docId } = data;
    const query = {
      text: "UPDATE document SET htmldata=$1 WHERE id=$2 RETURNING *",
      values: [htmlText, docId],
    };
    const doc = await pool.query(query);
    return doc;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};
export const getDocumentById = async (data) => {
  const { docId } = data;
  try {
    const query = {
      text: "SELECT convert_from(htmldata,'utf8') as data FROM document WHERE id=$1",
      values: [docId],
    };
    const document = await pool.query(query);
    return document;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};

export const uploadTemplate = async (data) => {
  const { name, description, categoryId, htmlData } = data;
  try {
    const result = await pool.query(
      "INSERT INTO template (title,description,category_id,htmldata) VALUES($1,$2,$3,$4) RETURNING *",
      [name, description, categoryId, htmlData]
    );
    return result;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};

export const getTemplate = async (data) => {
  const { id } = data;
  try {
    const result = await pool.query(
      "SELECT convert_from(htmldata,'utf8') as htmldata,title,category_id,description FROM template WHERE id=$1",
      [id]
    );
    return result;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};
