import { pool } from "../../core/database/db.js";
import * as fileService from "../../services/file.services.js";
// import puppeteer from "puppeteer";
import path from "path";
import { sendLetterEmail } from "../../core/Email/sendEmail.js";
import { getPagination } from "../../utils/getPagination.js";
import { NotFoundError, ValidationError } from "../../Error/customError.js";
// import { pool2 } from "../../core/database/db2.js";
import { DatabaseError } from "../../Error/customError.js";
import { minioClient } from "../../utils/minioSetup.js";

const __dirname = path.resolve();
export const uploadFile = async (req, res) => {
  let { htmlText, docId, htmljson } = req.body;

  docId = parseInt(docId);

  const textBytesSize = Buffer.byteLength(htmlText, "utf8");

  if (textBytesSize > 10 * 1024 * 1024) {
    return res.status(400).json({
      success: false,
      message: "File size should be less than 10MB",
    });
  }
  if (htmlText === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "File not uploaded,Invalid input" });
  }

  try {
    const document = await pool.query(
      "UPDATE document SET htmldata=$1, htmljson=$2  WHERE id=$3 RETURNING *",
      [htmlText, htmljson, docId]
    );

    if (document.rowCount === 0) {
      return res
        .status(400)
        .json({ success: false, message: "File not uploaded" });
    }

    return res.status(201).json({
      success: true,
      message: "File uploaded",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const getFile = async (req, res) => {
  let { docId } = req.params;
  console.log(docId);
  docId = parseInt(docId);
  //400->bad request
  if (!docId) {
    return res.status(400).json({
      success: false,
      message: "Document Id is required",
    });
  }

  try {
    const document = await pool.query(
      `SELECT 
      d.title,  
      d.htmljson, 
      convert_from(d.htmldata, 'utf8') AS data,
      d.category_id,
      c.category,
      d.is_active 
  FROM 
      document d
  JOIN 
      category c ON d.category_id = c.id
  WHERE 
      d.id = $1;`,
      [docId]
    );
    if (document.rows.length === 0) {
      //400->bad request invalid doc id
      return res.status(400).json({
        success: false,
        message: "File not found ,invalid document id",
      });
    }
    return res.status(200).json({
      success: true,
      message: "File fetched",
      data: document.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal Server Error",
    });
  }
};
//pagination and sorting

export const getdocument = async (req, res) => {
  const query = req.query;
  const title = req.query.title;
  const category = req.query.category;
  console.log(title);
  //  /document?page=1&size=2
  const page = parseInt(query.page);
  const size = parseInt(query.size);
  const { limit, offset } = getPagination(page, size);
  console.log("page", limit, offset);
  console.log(category.toString(), title.toString());
  //order by
  const orderByColumn = query?.orderByColumn || "created_at";
  const orderByDirection = query?.orderByDirection?.toUpperCase() || "ASC";
  try {
    const query = `
WITH paginated_data AS (
  SELECT 
    id, 
    category_id as cid,
    htmljson, 
    convert_from(htmldata, 'utf8') as data,  
    created_at, 
    created_by, 
    title
  FROM document d
  WHERE 
  title ILIKE '%'||$3||'%'
  ORDER BY ${orderByColumn} ${orderByDirection}
  
),
total_count AS (
  SELECT COUNT(*) as total_count FROM document
)
SELECT 
  pd.*, 
  (SELECT total_count FROM total_count) as total_count,
  c.category as category_name
FROM 
paginated_data pd
JOIN  category c 
ON c.id=pd.cid
WHERE 
  c.category ILIKE '%'||$4||'%'
  LIMIT $1 OFFSET $2  
`;

    const data = await pool.query(query, [limit, offset, title, category]);

    if (data.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no document dound" });
    }
    console.log(data.rows.length);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error, success: false });
  }
};

export const uploadTemplate = async (req, res) => {
  const userid = req.user.id;
  let { name, description, categoryId, htmlText, mode, htmljson } = req.body;

  try {
    const htmlData = Buffer.from(htmlText, "utf8");

    await fileService.uploadTemplateService(
      res,
      name,
      description,
      categoryId,
      htmlData,
      mode,
      htmljson,
      userid
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getTemplateById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Invalid params",
    });
  }

  try {
    await fileService.getTemplateByIdService(res, id);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const editDocument = async (req, res) => {
  const { title } = req.body;
  let id = req.params.id;
  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "title is missing" });
  }

  const docId = parseInt(id);
  console.log(docId, title);
  try {
    const query = `
UPDATE document
SET title=$1
WHERE id=$2
RETURNING *
`;
    const result = await pool.query(query, [title, docId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "no document found" });
    }
    return res
      .status(200)
      .json({ message: "updated title success", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
  }
};

// export const saveAsPdf = async (req, res) => {
//   const { htmlData } = req.body;

//   if (!htmlData) {
//     return res
//       .status(400)
//       .json({ message: "Invalid syntax error", success: false });
//   }
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   await page.setContent(htmlData, {
//     waitUntil: "domcontentloaded",
//   });

//   const pdfBuffer = await page.pdf({
//     margin: {
//       top: 20.15 * 1.33,
//       right: 59.15 * 1.33,
//       bottom: 72 * 1.33,
//       left: 72 * 1.33,
//     },
//     format: "A4",
//     height: 2500,
//   });

//   await page.pdf({
//     path: `${__dirname}/my-fance-invoice.pdf`,
//     displayHeaderFooter: true,
//     format: "A4",
//     footerTemplate:
//       "<div><div class='pageNumber'></div>1 of 2<div>/</div><div class='totalPages'></div></div>",
//   });
//   await browser.close();
//   sendLetterEmail(pdfBuffer, "tapasviarora2002@gmail.com");

//   return res.status(200).json({
//     message: "pdf file saved success email sent success",
//     success: true,
//   });
// };
export const getFileById = async (req, res) => {
  let { docId } = req.params;
  console.log(docId);
  docId = parseInt(docId);
  //400->bad request
  if (!docId) {
    return res.status(400).json({
      success: false,
      message: "Document Id is required",
    });
  }

  try {
    const document = await pool.query(
      "SELECT  htmljson , convert_from(htmldata,'utf8') as data  FROM document WHERE id=$1",
      [docId]
    );
    if (document.rows.length === 0) {
      //400->bad request invalid doc id
      return res.status(400).json({
        success: false,
        message: "File not found ,invalid document id",
      });
    }
    return res.status(200).json({
      success: true,
      message: "File fetched",
      data: document.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const gettemplates = async (req, res) => {
  const query = req.query;
  const title = req.query.title || "";

  console.log(query, "query is");
  //  /document?page=1&size=2
  const page = parseInt(query.page);
  const size = parseInt(query.size);
  const { limit, offset } = getPagination(page, size);
  // console.log(limit, offset);
  //order by
  const orderByColumn = query?.orderByColumn || "created_at";
  const orderByDirection = query?.orderByDirection?.toUpperCase() || "ASC";
  try {
    const query = `
WITH paginated_data AS (
  SELECT 
    id, 
    convert_from(htmldata, 'utf8') as data, 
    category_id, 
    created_at, 
    created_by, 
    title
  FROM template
  WHERE 
  title ILIKE '%'||$3||'%'
  ORDER BY ${orderByColumn} ${orderByDirection}
  LIMIT $1 OFFSET $2
),
total_count AS (
  SELECT COUNT(*) as total_count FROM document
)
SELECT 
  pd.*
  , 
  (SELECT total_count FROM total_count) as total_count
FROM 
  paginated_data pd;
`;

    const data = await pool.query(query, [limit, offset, title]);

    // console.log(data);
    if (data.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no templates found" });
    }
    console.log(data.rowCount);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error, success: false });
  }
};
export const getAllTemplates = async (req, res) => {
  try {
    const query = `SELECT id,  
    mode, 
    created_at, 
    created_by, 
    title
    FROM template ORDER by created_at DESC `;

    const data = await pool.query(query);

    // console.log(data);
    if (data.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no templates found" });
    }
    console.log(data.rowCount);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error, success: false });
  }
};
export const getAllTemplatesByStatus = async (req, res) => {
  try {
    let { status } = req.params;
    console.log(status);
    const data = await pool.query(
      `SELECT id,  
      mode, 
      created_at, 
      created_by, 
      title
      FROM template WHERE mode = $1 ORDER by created_at DESC  `,
      [status]
    );

    // console.log(data);
    if (data.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no templates found" });
    }
    console.log(data.rowCount);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error, success: false });
  }
};

export const getRecentPolicies = async (req, res) => {
  try {
    const query = `
    SELECT 
    d.id, 
	d.title,
    d.category_id as cid,
    d.created_at,
	u.first_name
  FROM document d

  JOIN user_table u ON d.created_by =u.id
  where d.is_active = TRUE
  ORDER BY d.created_at DESC
  LIMIT 5;
`;

    // console.log(query);
    const data = await pool.query(query);

    // console.log(data);
    if (data.rowCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no document dound" });
    }
    // console.log(data.rowCount);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error, success: false });
  }
};

export const getpaginateddocuments = async (req, res) => {
  const query = req.query;
  // const title = req.query.title;
  // const category = req.query.category;
  // console.log(title);
  //  /document?page=1&size=2
  const page = parseInt(query.page);
  const size = parseInt(query.size);
  const { limit, offset } = getPagination(page, size);
  console.log(limit, offset);
  //order by
  const orderByColumn = query?.orderByColumn || "created_at";
  const orderByDirection = query?.orderByDirection?.toUpperCase() || "DESC";

  try {
    const query = `
WITH paginated_data AS (
  SELECT 
    id, 
    category_id as cid,
    htmljson, 
    convert_from(htmldata, 'utf8') as data,  
    created_at, 
    created_by, 
    title
  FROM document d
  ORDER BY ${orderByColumn} ${orderByDirection}
  LIMIT $1 OFFSET $2
),
total_count AS (
  SELECT COUNT(*) as total_count FROM document
)
SELECT 
  pd.*, 
  (SELECT total_count FROM total_count) as total_count
FROM 
paginated_data pd;
`;

    // console.log(query);
    const data = await pool.query(query, [limit, offset]);

    // console.log(data);
    if (data.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "no document dound" });
    }
    console.log(data.rows.length);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error, success: false });
  }
};

export const createPolicy = async (req, res, next) => {
  const userid = req.user.id;
  console.log(req.user);
  let { htmlText, htmlJson, categoryId, title } = req.body;
  console.log(htmlText);
  const textBytesSize = Buffer.byteLength(htmlText, "utf8");
  // middleware
  if (textBytesSize > 10 * 1024 * 1024) {
    return res.status(400).json({
      success: false,
      message: "File size should be less than 10MB",
    });
  }
  if (htmlText === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "File not uploaded,Invalid input" });
  }

  try {
    const doc = await fileService.createPolicy(req.body, userid);
    return res.status(201).json({
      success: true,
      message: "File uploaded",
      document: doc,
    });
  } catch (error) {
    next(error);
  }
};

export const setPolicyDetail = async (req, res, next) => {
  const { docDetail } = req.body;
  console.log(docDetail, "doc Deatil is");
  // docDetail->title,category,
  try {
    const values = docDetail.map((doc) => {
      return `(${parseInt(doc.categoryId)},'${doc.title.toString()}',${parseInt(
        doc.docId
      )})`;
    });

    console.log(values.join(","));
    const query = {
      text: `UPDATE document AS d
    SET 
    category_id=c.category_id,
    title=c.title
  FROM (
    VALUES 
    ${values.join(",")}
  ) AS c(category_id,title,doc_id)
  WHERE d.id = c.doc_id
`,
    };
    const result = await pool.query(query);
    return res.status(200).json({ message: "document upload success" });
  } catch (error) {
    next(error);
  }
};

export const getLetters = async (req, res, next) => {
  const query = req.query;
  const name = req.query.name || "";
  const template = req.query.template || "";
  const status = req.query.status ? req.query.status.split(",") : [];

  console.log(status);

  //  /document?page=1&size=2
  const page = parseInt(query.page) || 0;
  const size = parseInt(query.size) || 5;
  const { limit, offset } = getPagination(page, size);
  console.log("page", limit, offset);
  console.log(name.toString(), template.toString(), "SADA");
  //order by

  try {
    const query = `
    WITH paginated_data AS (
      SELECT 
        l.id, 
        l.template_id AS tid,
        l.filepath,   
        l.created_at, 
        l.created_by,
        l.status,
        l.recipient_name AS rname,
        l.recipient_email AS remail,
        CONCAT(us.first_name, ' ', us.last_name) AS employee_name,
        COUNT(*) OVER() AS total_count
      FROM letters l
      JOIN user_table us 
        ON us.id = l.userid
      WHERE l.status = ANY($1)
    )
    SELECT 
      pd.*, 
      t.title AS template_name, CONCAT(ut.first_name, ' ', ut.last_name) as created_by_name
    FROM 
      paginated_data pd
	JOIN user_table ut
	on pd.created_by= ut.id
    JOIN template t
      ON pd.tid = t.id
    ORDER BY created_at DESC
    LIMIT $2 OFFSET $3;
    
`;

    const data = await pool.query(query, [status, limit, offset]);
    console.log(data.rows, "letters are");
    if (data.rows.length === 0) {
      throw new NotFoundError("no document found");
    }
    console.log(data.rows.length);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows });
  } catch (error) {
    next(error);
  }
};
export const getLetterById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await pool.query(
      "SELECT convert_from(html_data,'utf8') as html_data,recipient_name,recipient_email,userid as recipientId,template_id,id as letter_id FROM letters where id=$1",
      [id]
    );
    console.log(data.rows[0]);

    if (data.rows.length === 0) {
      throw new NotFoundError("no document found");
    }
    console.log(data.rows.length);
    return res
      .status(200)
      .json({ message: "documents are", success: true, data: data.rows[0] });
  } catch (error) {
    next(error);
  }
};
export const uploadSignSwiftLetter = async (req, res, next) => {
  const { ShareLink, userId } = req.body;
  try {
    try {
      const res = await pool2.query(
        `INSERT INTO "Document" ("userId","ShareLink") VALUES ('${userId}','${ShareLink}')`
      );
    } catch (error) {
      throw new DatabaseError("something wrong with db");
    }

    return res.status(200).json({ message: "documents are", success: true });
  } catch (error) {
    next(error);
  }
};

export const uploadLetterMinio = async (req, res, next) => {
  console.log(req.file);
  const fileName = req.file.originalname;
  console.log("file upload minio hit");

  try {
    var url;
    await minioClient.putObject(
      "ipvms-dev",
      fileName,
      req.file.buffer,
      async function (err, etag) {
        if (err) {
          console.log(err);
          throw new DatabaseError("error in uplaoding to minio");
        } else {
          await minioClient.presignedGetObject(
            "ipvms-dev",
            fileName,
            7 * 24 * 60 * 60,
            function (err, presignedUrl) {
              if (err) {
                console.log(err.message);
                throw new DatabaseError("error in getting file");
              }
              url = presignedUrl;
            }
          );
        }
      }
    );

    return res
      .status(200)
      .json({ message: "documents are", success: true, url: url });
  } catch (error) {
    next(error);
  }
};
export const getLetterByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  if (!userId) {
    return new ValidationError("user id is null");
  }
  try {
    const result = await fileService.getLetterByIdService(userId);
    return res
      .status(200)
      .json({ message: "All Letter send to user are", letter: result.rows });
  } catch (error) {
    next(error);
  }
};
