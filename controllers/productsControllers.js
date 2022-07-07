const productValidate = require('../middlewares/productValidate');
const productsModels = require('../models/productsModels');
const productsServices = require('../services/productsServices');
const throwNotFoundError = require('../services/utils');

const productsControllers = {
  getAllProducts: async (_req, res) => {
    const result = await productsServices.getAllProducts();
    
    return res.status(200).json(result);
  },
  
  getProductById: async (req, res) => {
    const { id } = req.params;
    const product = await productsServices.getProductById(id);    
    return res.status(200).json(product);
  },

  insertProduct: async (req, res) => {    
    await productValidate.body(req.body);
    const id = await productsServices.insertProduct(req.body);
    const product = await productsModels.getProductById(id);
    return res.status(201).json(product);
  },
};

module.exports = productsControllers;