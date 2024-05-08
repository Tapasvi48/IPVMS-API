import pg from "pg";
const { Pool } = pg;
export const pool = new Pool({
  user: "root",
  password: "xsRLlDQJnsniVeJTF1MUDbUCZxyXSQQl",
  host: "dpg-co2h7bgl6cac73bnjcpg-a.singapore-postgres.render.com",
  port: 5432,
  database: "ipvms",
  ssl: true,
  log_directory: "pg_log",
  log_filename: "postgresql-dateformat.log",
  log_statement: "all",
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      console.error("Error executing query", err.stack);
      throw err;
    }
    console.log("Connected to Database !");
  });
});

pool.on("error", function (err, client) {
  if (err) {
    console.log("error from client", err);
    process.exit(-1);
  }
});
