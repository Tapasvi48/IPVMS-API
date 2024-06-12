// import pg from "pg";
// const { Pool } = pg;
// export const pool2 = new Pool({
//   user: "signswift",
//   password: "xrItqvtyZLShAo6gu1Sc40fChzOovdaZ",
//   host: "dpg-col36hed3nmc739otg3g-a.oregon-postgres.render.com",
//   port: 5432,
//   database: "signswift",
//   ssl: true,
// });

// pool2.connect((err, client, release) => {
//   if (err) {
//     return console.error("Error acquiring client", err.stack);
//   }
//   client.query("SELECT NOW()", (err, result) => {
//     release();
//     if (err) {
//       console.error("Error executing query", err.stack);
//       throw err;
//     }
//     console.log("Connected to Database !");
//   });
// });

// pool2.on("error", function (err, client) {
//   if (err) {
//     console.log("error from client", err);
//     process.exit(-1);
//   }
// });
