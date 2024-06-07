import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path, { parse } from "path";
import userRouter from "./src/routes/user.routes.js";
import compression from "compression";
import fileRouter from "./src/routes/file.routes.js";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import { apiDocumentation } from "./docs/apidoc.js";

import categoryRouter from "./src/routes/catogery.routes.js";

import searchRouter from "./src/routes/globalsearch.routes.js";
import versionControlRouter from "./src/routes/versioncontrol.routes.js";
import { exceptionHandler } from "./src/middleware/errorHandlingMiddleware.js";
import { pool } from "./src/core/database/db.js";
import { DatabaseError } from "./src/Error/customError.js";
import hookRouter from "./src/routes/webhook.routes.js";
import { add_notification } from "./src/services/notification.services.js";
import {
  Entity_Group,
  RoleGroupIdMapping,
} from "./src/constants/notificationsConstants.js";
import { entityTypeIdMapping } from "./src/utils/notification.config.js";
import notificationRouter from "./src/routes/notifications.routes.js";

const __dirname = path.resolve();

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
app.use(compression());

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.use("/api/user", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/file", fileRouter);
app.use("/api/globalsearch", searchRouter);
app.use("/api/versioncontrol", versionControlRouter);
app.use("/api/notification", notificationRouter);
app.use("/webhook", hookRouter);
app.get("/documents/count/category", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT c.id, c.category, c.color, c.svg, COUNT(d.id) AS total_documents
      FROM category c
      LEFT JOIN document d ON c.id = d.category_id
      where d.is_active = TRUE
      GROUP BY c.id, c.category,c.color,c.svg UNION

SELECT 
    NULL,'Total',NULL,NULL,
    COUNT(*) AS total_documents
FROM 
    document where document.is_active =TRUE
    
    Order BY total_documents DESC;`
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/getversions/datewise", async (req, res) => {
  const docId = parseInt(req.query.docId);
  try {
    const result = await pool.query(
      `SELECT 
      datew,
      STRING_AGG(grouped_value, ', ') AS grouped_values
  FROM (
      SELECT 
          dv.created_at,
          DATE(dv.created_at) as datew,
          '[' || dv.id::text || ',' || dv.version_number || ',' || dv.doc_id ||  ',' || dv.created_at || ',' || u.first_name || ']' AS grouped_value
      FROM 
          document_version dv
      JOIN 
          user_table u ON dv.created_by = u.id
      WHERE 
          dv.doc_id = $1
      ORDER BY 
          dv.created_at DESC
  ) subquery
  GROUP BY 
      datew
  ORDER BY 
      datew DESC;
  
  `,
      [docId]
    );
    const count = result.rows;
    console.log(count);
    return res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/letters/getversions/datewise", async (req, res) => {
  const docId = parseInt(req.query.docId);
  try {
    const result = await pool.query(
      `SELECT 
      datew,
      STRING_AGG(grouped_value, ', ') AS grouped_values
  FROM (
      SELECT 
          dv.created_at,
          DATE(dv.created_at) as datew,
          '[' || dv.id::text || ',' || dv.version_number || ',' || dv.doc_id ||  ',' || dv.created_at || ',' || u.first_name || ']' AS grouped_value
      FROM 
          template_version dv
      JOIN 
          user_table u ON dv.created_by = u.id
      WHERE 
          dv.doc_id = $1
      ORDER BY 
          dv.created_at DESC
  ) subquery
  GROUP BY 
      datew
  ORDER BY 
      datew DESC;
  
  `,
      [docId]
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getVersionbyID", async (req, res) => {
  const docId = parseInt(req.query.id);
  try {
    const result = await pool.query(
      `SELECT * from document_version where id=$1;`,
      [docId]
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/getVersionbyIDTemplate", async (req, res) => {
  const docId = parseInt(req.query.id);
  try {
    const result = await pool.query(
      `SELECT * from template_version where id=$1;`,
      [docId]
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getLatestVersionbyDocIdandUserId", async (req, res) => {
  const docId = parseInt(req.query.id);
  const userId = parseInt(req.query.user);
  try {
    const result = await pool.query(
      `SELECT * from document_version where doc_id=$1 and created_by=$2 ORDER BY created_at DESC LIMIT 1`,
      [docId, userId]
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getPolicyApprovalsByUserId", async (req, res) => {
  const docId = parseInt(req.query.id);
  try {
    const result = await pool.query(
      `SELECT 
      d.id, 
      ar.id,
      d.title, 
      ar.status,
      ar.doc_id,
      ar.reason,
      ar.request_to,
      ar.request_by,
     
      u2.first_name AS sent_by_first_name, 
      u2.last_name AS sent_by_last_name
  FROM 
      approval_request ar
  
  JOIN 
      user_table u2 ON ar.request_by = u2.id
   JOIN document d ON ar.doc_id  = d.id
  WHERE 
      ar.request_to = $1 and ar.status = 'VIEW'; `,
      [docId]
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/deleteTemplate", async (req, res) => {
  const docId = parseInt(req.query.id);
  try {
    const result = await pool.query(`DELETE FROM template WHERE id = $1`, [
      docId,
    ]);
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getPolicyApprovalsUserSent", async (req, res) => {
  const docId = parseInt(req.query.id);
  try {
    const result = await pool.query(
      `SELECT 
      d.id, 
      ar.id,
      d.title, 
      ar.status,
      ar.doc_id,
      ar.reason,
      ar.request_to,
      ar.request_by,
     
      u2.first_name AS sent_by_first_name, 
      u2.last_name AS sent_by_last_name
  FROM 
      approval_request ar
  
  JOIN 
      user_table u2 ON ar.request_to = u2.id
   JOIN document d ON ar.doc_id  = d.id
  WHERE 
      ar.request_by = $1 and ar.status != 'APPROVED';`,
      [docId]
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/api/setDocumentToApprove", async (req, res) => {
  console.log(req.body);
  const { admin_id, doc_id, user_id } = req.body;
  const query = `
  INSERT INTO approval_request(request_to, request_by,doc_id) VALUES($1,$2,$3) RETURNING *
`;
  const values = [parseInt(admin_id), parseInt(user_id), parseInt(doc_id)];
  try {
    const result = await pool.query(query, values);

    await add_notification(
      entityTypeIdMapping.SEND_APPROVAL,
      doc_id,
      Entity_Group.POLICY,
      admin_id,
      user_id
    );
    console.log(result);

    return res.status(201).json({
      success: true,
      message: "Document TO APPROVED SET",
    });
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set to_approve field");
  }
});

app.post("/api/rejectPolicyApproval", async (req, res) => {
  const { id, reason } = req.body;
  console.log(id, reason);
  const query = `
  UPDATE approval_request SET status = 'REJECTED' , reason=$2 where id =$1 RETURNING *
`;

  const values = [parseInt(id), reason];
  try {
    const result = await pool.query(query, values);
    console.log(result);
    const docId = result.rows[0].doc_id;
    const actor_id = result.rows[0].request_to;
    const user_id = result?.rows[0]?.request_by;
    await add_notification(
      entityTypeIdMapping.REJECTED,
      docId,
      Entity_Group.POLICY,
      user_id,
      actor_id
    );
    return res.status(201).json({
      success: true,
      message: "Document TO APPROVED SET",
    });
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set to_approve field");
  }
});
app.get("/api/approvePolicyApproval", async (req, res) => {
  const id = parseInt(req.query.id);

  const query = `UPDATE approval_request SET status = 'APPROVED' where id =$1 RETURNING *`;

  const values = [parseInt(id)];
  try {
    const result = await pool.query(query, values);
    // console.log(result);
    const docId = result?.rows[0]?.doc_id;
    const actor_id = result?.rows[0]?.request_to;
    console.log(docId, "Dco id is");

    const entity_group = "EMPLOYEE";
    await add_notification(
      entityTypeIdMapping.APPROVED,
      docId,
      Entity_Group.POLICY,
      0,
      actor_id,
      RoleGroupIdMapping.EMPLOYEE
    );
    return res.status(201).json({
      success: true,
      message: "Policy Request Approved",
    });
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set to_approve field");
  }
});
app.get("/api/activepolicy", async (req, res) => {
  const id = parseInt(req.query.id);
  const actor_id = parseInt(req.query.actor_id);

  const query = `UPDATE document SET is_active = TRUE where id =$1 RETURNING *`;

  const values = [parseInt(id)];
  try {
    const result = await pool.query(query, values);
    // console.log(result);
    const docId = result?.rows[0]?.id;

    console.log(docId, "Dco id is");

    const entity_group = "EMPLOYEE";
    await add_notification(
      entityTypeIdMapping.POLICY_ACTIVE,
      docId,
      Entity_Group.POLICY,
      0,
      actor_id,
      RoleGroupIdMapping.EMPLOYEE
    );
    return res.status(201).json({
      success: true,
      message: "Policy gets activated",
    });
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set to_approve field");
  }
});
app.get("/api/deactivatepolicy", async (req, res) => {
  const id = parseInt(req.query.id);
  const actor_id = parseInt(req.query.actor_id);

  const query = `UPDATE document SET is_active = FALSE where id =$1 RETURNING *`;

  const values = [parseInt(id)];
  try {
    const result = await pool.query(query, values);
    // console.log(result);

    return res.status(201).json({
      success: true,
      message: "Policy gets deactivated",
    });
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set to_approve field");
  }
});
app.post("/api/updatePolicyHtmlData", async (req, res) => {
  const { id, htmldata, htmlJson } = req.body;
  console.log(id);
  const query = `
  UPDATE document SET htmldata=$1, htmljson=$2  WHERE id=$3 RETURNING *
`;
  const values = [htmldata, htmlJson, parseInt(id)];
  const query2 = `
  DELETE FROM document_version WHERE doc_id=$1;
`;
  const values2 = [parseInt(id)];
  try {
    const result = await pool.query(query, values);
    const result2 = await pool.query(query2, values2);
    console.log(result);
    return res.status(201).json({
      success: true,
      message: "Policy Request Approved",
    });
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set to_approve field");
  }
});
app.post("/api/updateTemplateHtmlData", async (req, res) => {
  const { id, htmldata, htmlJson } = req.body;
  console.log(id);
  const query = `
  UPDATE template SET htmldata=$1, htmljson=$2  WHERE id=$3 RETURNING *
`;
  const values = [htmldata, htmlJson, parseInt(id)];
  const query2 = `
  DELETE FROM template_version WHERE doc_id=$1;
`;
  const values2 = [parseInt(id)];
  try {
    const result = await pool.query(query, values);
    const result2 = await pool.query(query2, values2);
    console.log(result);
    return res.status(201).json({
      success: true,
      message: "Template Request Approved",
    });
  } catch (error) {
    console.log(error.message, "rg");
    throw new DatabaseError("cant set to_approve field");
  }
});
app.get("/getAdminList", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * from user_table where group_id = 2;`
    );
    const count = result.rows;
    res.json(count);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use(exceptionHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server statrted at " + PORT);
});
