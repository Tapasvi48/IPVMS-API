import { pool } from "../core/database/db.js";
import { DatabaseError } from "../Error/customError.js";

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
  let { htmlData, htmljson, name, userid, mode } = data;

  console.log(name, "sss");
  console.log("hit");

  try {
    const result = await pool.query(
      "INSERT INTO  template   (htmldata,title,htmljson,created_by,mode) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [htmlData, name, htmljson, userid, mode]
    );
    return result.rows;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};

export const getTemplate = async (data) => {
  const { id } = data;
  try {
    const result = await pool.query(
      "SELECT convert_from(htmldata,'utf8') as htmldata,title,mode,description,htmljson,created_at FROM template WHERE id=$1",
      [id]
    );
    return result;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};

export const getPaginatedDocumentDetailsWithSearch = async (
  data,
  orderByColumn,
  orderByDirection
) => {
  const query = {
    text: `
    WITH paginated_data AS (
      SELECT 
          id, 
          category_id as cid,
          created_at, 
          created_by, 
          title,
          is_active
      FROM document d
      WHERE 
      d.is_active = TRUE and
      title ILIKE '%'||$3||'%'
      ORDER BY ${orderByColumn} ${orderByDirection}
  ),
  filtered_data AS (
      SELECT 
          pd.*, 
          c.category as category_name, 
          ut.first_name
      FROM 
          paginated_data pd
      JOIN 
          user_table ut ON pd.created_by = ut.id
      JOIN  
          category c ON c.id=pd.cid
      WHERE 
          c.category ILIKE '%'||$4||'%'
  ),
  total_count AS (
      SELECT 
          COUNT(*) as total_count 
      FROM 
          filtered_data
  )
  SELECT 
      fd.*, 
      (SELECT total_count FROM total_count) as total_count
  FROM 
      filtered_data fd
  LIMIT $1 OFFSET $2;
    `,
    values: data,
  };

  try {
    // console.log(query);
    const dbResponse = await pool.query(query);
    // console.log(dbResponse);
    return dbResponse;
  } catch (error) {
    throw new DatabaseError("Error while getting documents details.");
  }
};

export const getPaginatedDocumentDetailsWithSearchForDraft = async (
  data,
  orderByColumn,
  orderByDirection
) => {
  const query = {
    text: `
    WITH paginated_data AS (
      SELECT 
          id, 
          category_id as cid,
          created_at, 
          created_by, 
          title
      FROM document d
      WHERE 
      title ILIKE '%'||$3||'%' and  d.is_active = FALSE
      ORDER BY ${orderByColumn} ${orderByDirection}
  ),
  filtered_data AS (
      SELECT 
          pd.*, 
          c.category as category_name, 
          ut.first_name
      FROM 
          paginated_data pd
      JOIN 
          user_table ut ON pd.created_by = ut.id
      JOIN  
          category c ON c.id=pd.cid
      WHERE 
          c.category ILIKE '%'||$4||'%'
  ),
  total_count AS (
      SELECT 
          COUNT(*) as total_count 
      FROM 
          filtered_data
  )
  SELECT 
      fd.*, 
      (SELECT total_count FROM total_count) as total_count
  FROM 
      filtered_data fd
  LIMIT $1 OFFSET $2;
    `,
    values: data,
  };

  try {
    // console.log(query);
    const dbResponse = await pool.query(query);
    // console.log(dbResponse);
    return dbResponse;
  } catch (error) {
    throw new DatabaseError("Error while getting documents details.");
  }
};
export const getLetterByUserIdQuery = async (userId) => {
  try {
    const result = await pool.query(
      `SELECT  l.id,t.title,TO_CHAR(l.created_at, 'FMMonth FMDD, YYYY')  AS created_at FROM letters l  INNER JOIN template t on t.id=l.template_id WHERE l.status='PENDING' or l.status='SIGNED' AND userid=$1`,
      [userId]
    );
    return result;
  } catch (error) {
    console.log(error.message);
    throw new DatabaseError("Error in fetching letter");
  }
};
