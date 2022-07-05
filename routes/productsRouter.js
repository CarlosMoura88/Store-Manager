const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', productsControllers.getAllProducts);

router.get('/:id', productsControllers.getProductById);

module.exports = router;