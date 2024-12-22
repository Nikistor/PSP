// базовый класс, умеющий читать и писать в json-файл (нашу импровизированную БД).

const fs = require('fs');
const path = require('path');

class DBConnector {
    constructor(filename) {
        this.filename = filename;
    }

    readFile() {
        return fs.readFileSync(path.join(process.cwd(), 'db', this.filename), "utf8");
    }

    writeFile(data) {
        fs.writeFileSync(path.join(process.cwd(), 'db', this.filename), data, "utf8");
    }
}

module.exports = {
     DBConnector,
};

// При создании инстанса класса DBConnector пробрасывает путь до файла. Также доступны 2 метода для чтение содержимого из файла, и записи в него символов.