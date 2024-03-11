import { createPool } from "mysql";

export const db = createPool({
  connectionLimit: 5,
  host: "bpwiakdssydotvplmyn6-mysql.services.clever-cloud.com",
  user: "une0fhjaxyxwjuu8",
  password: "cwbt3fv36pawCCTcspw9",
  database: "bpwiakdssydotvplmyn6",
});

// Handle pool errors
db.on("error", (err) => {
  console.log("Database error:", err);
});

// You can also listen for the connection event to know when a new connection is made
db.on("connection", (connection) => {
  console.log("New database connection established");
});
