const connection = require('../db/connection');

const salesModel = {

  getAllSales: async () => { 
    const sql = `SELECT * FROM StoreManager.sales
      ORDER BY id`;
    const [item] = await connection.execute(sql);
    return item;
  },

  insertSale: async () => {     
    const sql = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
      const [{ insertId }] = await connection.execute(sql);
      return insertId;
  },

  insertSaleAndProduct: async (id, { productId, quantity }) => { 
    const sql = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;
    const [item] = await connection.execute(sql, [id, productId, quantity]);
    return item;
  },
  
  getSaleById: async (id) => { 
    const sql = `SELECT * FROM StoreManager.sales
      WHERE id = ?`;
    const [[item]] = await connection.execute(sql, [id]);
    return item;
  },
};
  
module.exports = salesModel;