const salesModel = require('../models/salesModels');
const throwNotFoundError = require('./utils');

const salesServices = {
  getAllSales: async () => { 
    const sales = await salesModel.getAllSales();
    return sales;
  },

  getSaleById: async (id) => {
    const sale = await salesModel.getSaleById(id);
    if (sale.length < 1) return throwNotFoundError('Sale not found');
    return sale;
  },

  insertSale: async () => {   
    const id = await salesModel.insertSale();
    return id;
  },
  insertSaleProduct: async (id, products) => {
    const result = await salesModel.insertSaleAndProduct(id, products);
    return result;
  },
};

module.exports = salesServices;