import { pool } from "../core/database/db.js";
import {
    BadGatewayError,
    ConflictError,
    NotFoundError,
    ValidationError,
    DatabaseError
} from "../Error/customError.js";



export const documentVersionUpload = async (data) => {
    const { version_number, doc_id, delta, created_by } = data;

    try {
        const query = {
            text: `
            INSERT INTO document_version(version_number, doc_id, delta, created_by)
            VALUES($1, $2, $3, $4)
            RETURNING *;
            `,
            values: [version_number, doc_id, delta, created_by]
        };
        const dbResponse = await pool.query(query);
        return dbResponse;

    } catch (error) {
        throw new DatabaseError();
    }


};

export const getDocumentVersionsDatewise = async (data) => {
    const { docId } = data;

    try {

        const query = {
            text: `
            SELECT DATE(dv.created_at) AS date,
            STRING_AGG('[' || dv.id::text || ',' || dv.version_number || ',' || dv.doc_id ||  ','|| dv.created_at || ','|| u.first_name || ']', ', ') AS grouped_values
            FROM document_version dv
            JOIN user_table u ON dv.created_by = u.id
            WHERE dv.doc_id = ($1)
            GROUP BY DATE(dv.created_at)
            ORDER BY date DESC
            `,
            values: [docId]
        };
        // console.log(query);
        const dbResponse = await pool.query(query);

        // console.log(dbResponse);
        return dbResponse;

    } catch (error) {
        throw new DatabaseError();
    }

};

export const getDocumentVersionsById = async (data) => {
    const { docId } = data;

    try {

        const query = {
            text: `
            SELECT * from document_version where id=($1);
            `,
            values: [docId]
        };
        // console.log(query);
        const dbResponse = await pool.query(query);

        // console.log(dbResponse);
        return dbResponse;

    } catch (error) {
        throw new DatabaseError();
    }

};



export const templateVersionUpload = async (data) => {
    const { version_number, doc_id, delta, created_by } = data;

    try {
        const query = {
            text: `
            INSERT INTO template_version(version_number, doc_id, delta, created_by)
            VALUES($1, $2, $3, $4)
            RETURNING *;
            `,
            values: [version_number, doc_id, delta, created_by]
        };
        const dbResponse = await pool.query(query);
        return dbResponse;

    } catch (error) {
        throw new DatabaseError();
    }


};

export const getTemplateVersionsDatewise = async (data) => {
    const { docId } = data;

    try {

        const query = {
            text: `
            SELECT DATE(tv.created_at) AS date,
            STRING_AGG('[' || tv.id::text || ',' || tv.version_number || ',' || tv.doc_id ||  ','|| tv.created_at || ','|| u.first_name || ']', ', ') AS grouped_values
            FROM template_version tv
            JOIN user_table u ON tv.created_by = u.id
            WHERE tv.doc_id = ($1)
            GROUP BY DATE(tv.created_at)
            ORDER BY date DESC
            `,
            values: [docId]
        };
        // console.log(query);
        const dbResponse = await pool.query(query);

        // console.log(dbResponse);
        return dbResponse;

    } catch (error) {
        throw new DatabaseError();
    }

};

export const getTemplateVersionsById = async (data) => {
    const { docId } = data;

    try {
        const query = {
            text: `
            SELECT * from template_version where id=($1);
            `,
            values: [docId]
        };
        // console.log(query);
        const dbResponse = await pool.query(query);

        // console.log(dbResponse);
        return dbResponse;

    } catch (error) {
        throw new DatabaseError();
    }

};


