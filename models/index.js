const { query } = require("../db/index.js");

async function getAllPosts() {
  const res = await query(`SELECT * FROM community`);
  return res.rows;
}

async function getById(id) {
  const res = await query(`select * FROM community WHERE id = $1`, [id]);
  return res.rows[0];
}

async function createPost({ name, title, content, location, contact, type }) {
  const res = await query(
    `INSERT INTO community 
  ( name,
    title,
    content,
    location,
    contact
    ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING title
  
    `,
    [name, title, content, location, contact, type]
  );
  return res.rows[0];
}

module.exports = {
  getAllPosts,
  createPost,
  getById
};
