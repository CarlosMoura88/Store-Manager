const saleValidate = require('../middlewares/saleValidate');
const salesServices = require('../services/salesServices');
const productsServices = require('../services/productsServices');

const salesController = {
  async getAllSales(_req, res) {
    const result = await salesServices.getAllSales();
    return res.status(200).json(result);
  },

  async insertSale(req, res) {
    await Promise.all(
      req.body.map((item) => saleValidate.body(item)),
    );

    await Promise.all(
      req.body.map(({ productId }) => productsServices.getProductById(productId)),
    );
    const id = await salesServices.insertSale();
    req.body.map((item) => salesServices.insertSaleProduct(id, item));
    const object = {
      id,
      itemsSold: req.body,
    };
    res.status(201).json(object);
  },
  async getSaleById(req, res) { 
    const { id } = req.params;
    const sale = await salesServices.getSaleById(id);
    res.status(200).json(sale);
  },

};

module.exports = salesController;