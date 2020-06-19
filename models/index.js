const { query } = require("../db/index.js");

async function getAllPosts() {
  const res = await query(`SELECT * FROM community`);
  return res.rows;
}

async function createPost({ title, content, location, contact }) {
  const res = await query(
    `INSERT INTO community 
  (title,
    content,
    location,
    contact
    ) VALUES ($1, $2, $3, $4) RETURNING title
  
    `,
    [title, content, location, contact]
  );
  return res.rows[0];
}

module.exports = {
  getAllPosts,
  createPost
};
