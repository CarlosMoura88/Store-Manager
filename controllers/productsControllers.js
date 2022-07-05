const productsServices = require('../services/productsServices');

const productsControllers = {
  getAllProducts: async (_req, res) => {
    const result = await productsServices.getAllProducts();
    
    return res.status(200).json(result);
  },
  
  getProductById: async (req, res) => {
    const { id } = req.params;
    const product = await productsServices.getProductById(id);

    if (!product) return res.status(404).json({ message: 'Product not found' });   

    return res.status(200).json(product);
  },
};

module.exports = productsControllers;