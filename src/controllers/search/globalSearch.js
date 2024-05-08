import { pool } from "../../core/database/db.js";

export const globalSearch = async (req, res) => {

  try {

    const { searchString, category } = req.body;

    console.log(searchString, category);

    let query;
    if (category != undefined || null) {
      query = {
        text: "SELECT * FROM global_search($1) WHERE category=$2",
        values: [searchString, category],
      };
    } else {
      query = {
        text: "SELECT * FROM global_search($1)",
        values: [searchString],
      };
    }

    console.log(query);
    const data = await pool.query(query);

    if ((data.rowCount != 0) | null) {
      return res.status(200).json({
        success: true,
        message: "Search results",
        count: data.rowCount,
        data: data.rows,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "No data found." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
