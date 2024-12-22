// StocksRepository - это можно считать статический класс (или singleton). 
// Доступ к его методам и полям есть только у самого класс, а не у его инстансов. 
// Здесь мы создаем 1 коннект к нашему файлу stocks.json и объявляем методы, которые умеют читать из базы и писать в нее в формате json.


// Это у нас довольно низкоуровневый слой работы с базой. 
// Он умеет только читать и писать какие-то абстрактные данные в файл stocks.json. 
// Теперь рассмотрим, как этой сущностью управляют более высокоуровневые элементы архитектуры.

const {DBConnector} = require('../../modules/DBConnector');

class StocksRepository {
    static db = new DBConnector('stocks.json');

    static read() {
        const file = this.db.readFile();

        return JSON.parse(file);
    }

    static write(json) {
        this.db.writeFile(JSON.stringify(json));
    }
}

module.exports = {
    StocksRepository,
}