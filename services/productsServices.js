const productsModels = require('../models/productsModels');
const throwNotFoundError = require('./utils');

const productsServices = {
  getAllProducts: async () => {
    const products = await productsModels.getAllProducts();
    return products;
  },

  getProductById: async (id) => {
    const product = await productsModels.getProductById(id);
    if (!product) return throwNotFoundError('Product not found');
    return product;
  },

  insertProduct: async (data) => {        
    const id = await productsModels.insertProduct(data);
    return id;
  },
};

module.exports = productsServices;