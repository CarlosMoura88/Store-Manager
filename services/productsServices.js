const productsModels = require('../models/productsModels');

const productsServices = {
  getAllProducts: async () => { 
    const products = productsModels.getAllProducts();
    return products;
  },
  getProductById: async (id) => {
    const product = await productsModels.getProductById(id);    
    return product;
  },
};

module.exports = productsServices;