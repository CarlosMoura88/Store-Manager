const connection = require('../db/connection');

const salesModel = {

  getAllSales: async () => { 
    const sql = `SELECT sp.sale_id AS saleId, sp.product_id as productId, sp.quantity, s.date
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s
      ON s.id = sp.sale_id      
      ORDER BY sp.sale_id, sp.product_id;`;
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
    const sql = `SELECT s.date, sp.product_id as productId, sp.quantity
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s
      ON s.id = sp.sale_id
      WHERE sale_id = ?
      ORDER BY sp.sale_id, sp.product_id;`;
    const [item] = await connection.execute(sql, [id]);
    return item;
  },
};
  
module.exports = salesModel;