const { query } = require("../db/index.js");

async function getAllPosts() {
  const res = await query(`SELECT * FROM community`);
  return res.rows;
}

async function createPost() {
  const res = await query(`INSERT INTO community 
    `);
}

module.exports = {
  getAllPosts
};
