const connection = require('../db/connection');

const productsModels = {
  getAllProducts: async () => {
    const sql = `SELECT * FROM StoreManager.products
      ORDER BY id`;
    const [item] = await connection.execute(sql);
    return item;
  },  
  getProductById: async (id) => {
    const sql = `SELECT * FROM StoreManager.products
      WHERE id = ?`;
    const [[item]] = await connection.execute(sql, [id]);
    return item;
  },  
  insertProduct: async (data) => {
    const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
      const [{ insertId }] = await connection.execute(sql, [data.name]);
      return insertId;
    },
};

module.exports = productsModels;