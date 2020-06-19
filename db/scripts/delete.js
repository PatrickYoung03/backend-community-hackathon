const { query } = require("../index.js");

async function deleteTable() {
  const res = await query(`DROP TABLE community`);
  console.log(res);
}

deleteTable();
