import { pool } from "../core/database/db.js";
import { DatabaseError, ValidationError } from "../Error/customError.js";
export const VersionfileuploadService = async (
  version_number,
  doc_id,
  delta,
  created_by
) => {
  // console.log("in serviuce", version_number, doc_id, delta);
  const query = `
      INSERT INTO document_version(version_number, doc_id, delta, created_by)
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `;
  const values = [version_number, parseInt(doc_id), delta, created_by];
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
