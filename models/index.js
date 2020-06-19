const { query } = require("../db/index.js");

async function getAllPosts() {
  const res = await query(`SELECT * FROM community`);
  return res.rows;
}

async function getById(id) {
  const res = await query(`select * FROM community WHERE id = $1`, [id]);
  return res.rows[0];
}

async function patchPost(body, id) {
  const { name, title, content, location, contact, type, comments } = body;
  const res = await query(
    `UPDATE community 
  SET
  name = COALESCE($1, name),
  title = COALESCE($2, title),
  content  = COALESCE($3, content),
  location  = COALESCE($4, location),
  contact = COALESCE($5, contact),
  type = COALESCE($6, type),
  comments  = COALESCE($7, comments)
  WHERE id = $8
  `,
    [name, title, content, location, contact, type, comments, id]
  );
  return res.rows[0];
}

async function createPost({
  name,
  title,
  content,
  location,
  contact,
  type,
  comments
}) {
  const res = await query(
    `INSERT INTO community 
  ( name,
    title,
    content,
    location,
    contact,
    type,
    comments
    ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING title
  
    `,
    [name, title, content, location, contact, type, comments]
  );
  return res.rows[0];
}

module.exports = {
  getAllPosts,
  createPost,
  getById,
  patchPost
};
