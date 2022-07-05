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

  insertProduct: async (data) => { 
    const id = await productsModels.insertProduct(data);
    return id;
  },
};

module.exports = productsServices;