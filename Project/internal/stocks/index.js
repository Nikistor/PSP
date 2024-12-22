const express = require('express');
const {StocksController} = require('./StocksController');

const router = express.Router();

router.get('/', StocksController.findStocks);
router.get('/:id', StocksController.findStockById);
router.post('/', StocksController.addStock);
router.delete('/:id', StocksController.deleteStock);

// Здесь мы создаем роутер, и назначаем каждый метод нашего контроллера на определенный http-метод и url.
module.exports = router;
