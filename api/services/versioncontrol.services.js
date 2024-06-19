import { pool } from "../core/database/db.js";
import { DatabaseError, ValidationError } from "../Error/customError.js";
export const VersionfileuploadService = async (
  doc_id,
  delta,
  created_by
) => {
  const query = `
      INSERT INTO document_version(doc_id, delta, created_by)
      VALUES($1, $2, $3)
      RETURNING *;
    `;
  const values = [parseInt(doc_id), delta, created_by];
  try {
    const result = await pool.query(query, values);
    console.log(result);
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set version ");
  }
  //   const document = await pool.query(
  //     "UPDATE document SET htmldata=$1 WHERE id=$2 RETURNING *",
  //     [htmlText, docId]
  //   );
};

export const TemplateVersionfileuploadService = async (
  doc_id,
  delta,
  created_by
) => {
  // console.log("in serviuce", doc_id);
  const query = `
      INSERT INTO template_version(doc_id, delta, created_by)
      VALUES($1, $2, $3)
      RETURNING *;
    `;
  const values = [
    parseInt(doc_id),
    delta,
    created_by,
  ];
  try {
    const result = await pool.query(query, values);
    console.log(result);
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set version ");
  }
  //   const document = await pool.query(
  //     "UPDATE document SET htmldata=$1 WHERE id=$2 RETURNING *",
  //     [htmlText, docId]
  //   );
};
