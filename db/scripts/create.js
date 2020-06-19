const { query } = require("../index.js");

async function createTable() {
  const res = await query(`CREATE TABLE IF NOT EXISTS community
    (id SERIAL PRIMARY KEY,
        name TEXT,
        title TEXT,
        content TEXT,
        location TEXT,
        contact TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )

    `);
  console.log(res);
}

createTable();
