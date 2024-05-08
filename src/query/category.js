import { pool } from "../core/database/db.js";
import {
    BadGatewayError,
    ConflictError,
    NotFoundError,
    ValidationError,
    DatabaseError
} from "../Error/customError.js";


export const createCategory = async (data) => {
    const { category, isActive } = data;
    const query = {
        text: "INSERT INTO category(category,is_active) VALUES($1,$2) RETURNING *",
        values: [category, isActive],
    };

    try {

        const dbResponse = await pool.query(query);
        return dbResponse;

    } catch (error) {

        if (error.code === '23505') {
            throw new ConflictError("Category already Exists");
        } else {

            throw new DatabaseError("Error in creating Category ");
        }

    }

};


export const getAllCategory = async () => {

    try {
        const dbResponse = await pool.query(
            "SELECT * FROM category WHERE is_active=true;"
        );

        return dbResponse;

    } catch (error) {
        throw new DatabaseError('Error in getting Categories');
    }
};


export const updateCategory = async (data) => {

    const { category, id, type } = data;

    try {

        let query = {};
        if (type === "edit") {

            query = {
                text: "UPDATE category SET  category=($2) WHERE id=($1) RETURNING *",
                values: [id, category]
            };
        } else if (type === "delete") {
            query = {
                text: "UPDATE category SET is_active=FALSE  WHERE id=($1)",
                values: [id],
            };
        }

        const dbResponse = await pool.query(query);
        return dbResponse;

    } catch (error) {
        throw new DatabaseError();
    }
};


export const getDocumentCategories = async ()=>{
    try {
        const dbResponse = await pool.query(
            `
            SELECT c.category, c.color, c.svg, COUNT(d.id) AS total_documents
            FROM category c
            LEFT JOIN document d ON c.id = d.category_id
            GROUP BY c.category,c.color,c.svg UNION

            SELECT 
                'Total',NULL,NULL,
                COUNT(*) AS total_documents
            FROM 
                document;
            `
            );
    
        return dbResponse;
        
    } catch (error) {
        throw new DatabaseError()
    }
}