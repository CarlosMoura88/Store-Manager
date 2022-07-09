const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);

router.get('/:id', productsControllers.getProductById);

router.post('/', productsControllers.insertProduct);

router.put('/:id', productsControllers.updateProduct);

router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;