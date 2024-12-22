// В отличие от репозитория, тут уже у нас есть осмысленные методы, которые выполняют какие-то четкие действия связанные с сущностью акций. 
// Например, добавление новой записи, поиск ее по id, удаление записи по id и тд.
// 
// Наш класс организован таким образом, что его методы привязаны только к самому классу, а поля же привязаны только к его инстансу. 
// Что это значит? А то, что когда мы захотим вызвать какой-то метод, мы сможем это сделать вот так: const stock = StocksDAO.findById(id), и т.к. 
// findById возвращает самого себя return new this(stock.id, stock.src, stock.title, stock.text), то создается инстанс класса StocksDAO, 
// который имеет доступ ко всем полям (id, src, title, text), а также методу toJSON().
//
// Преимущества такого подхода в том, что наш класс умеет не только запрашивать данные, но также хранить их и менеджерить.
//

const {StocksRepository} = require('./StocksRespository');

class StockDAO {
    constructor(id, src, title, text) {
        this.id = id;
        this.src = src;
        this.title = title;
        this.text = text;
    }

    static _validateId(id) {
        const numberId = Number.parseInt(id);
        if (Number.isNaN(numberId)) {
            throw new Error('invalidate id');
        }
    }

    static _validate(stock) {
        if (
            stock.id === undefined ||
            stock.src === undefined ||
            stock.title === undefined ||
            stock.text === undefined
        ) {
            throw new Error('invalidate stock data');
        }

        this._validateId(stock.id);
    }

    static find() {
        const stocks = StocksRepository.read();

        return stocks.map(({id, src, title, text}) => {
            return new this(id, src, title, text);
        });
    }

    static findById(id) {
        this._validateId(id);

        const stocks = StocksRepository.read();
        const stock = stocks.find((s) => s.id === id);

        return new this(stock.id, stock.src, stock.title, stock.text);
    }

    static insert(stock) {
        this._validate(stock);

        const stocks = StocksRepository.read();
        StocksRepository.write([...stocks, stock]);

        return new this(stock.id, stock.src, stock.title, stock.text);
    }

    static delete(id) {
        this._validateId(id);

        const stocks = StocksRepository.read();
        const filteredStocks = stocks.filter((s) => s.id !== id);

        StocksRepository.write(filteredStocks);

        return filteredStocks.map(({id, src, title, text}) => {
            return new this(id, src, title, text);
        });
    }

    toJSON() {
        return {
            id: this.id,
            src: this.src,
            title: this.title,
            text: this.text,
        }
    }
}

module.exports = {
    StockDAO,
}

// посмотрим как DAO используется в StocksService.js