// Класс StocksService также является статическим. Он работает напрямую с данными и абсорбирует бизнес-логику более высокого уровня. 
// Для данной сущности нет хорошего примера, но это могли бы быть какие-то вычисления, разграничения прав и различная логика обработки данных.

const {StockDAO} = require('./StocksDAO');

class StocksService {
    static findStocks(id) {
        if (id !== undefined) {
            return StockDAO.findById(id).toJSON();
        }

        return StockDAO.find().map((stock) => stock.toJSON());
    }

    static addStock(stock) {
        return StockDAO.insert(stock).toJSON();
    }

    static deleteStock(id) {
        return StockDAO.delete(id).map((stock) => stock.toJSON());
    }
}

module.exports = {
    StocksService,
}

// Теперь наконец перейдем к сетевому слою, и рассмотрим файл StocksController.js