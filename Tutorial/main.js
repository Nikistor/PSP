//Создаем файл main.js, для доступа к HTML будем использовать getElementById
//const root = document.getElementById('root');
//Добавляем кнопку
//root.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-primary">Hello world 2!</button>')

//Добавляем вызов файла
import {MainPage} from "./pages/main/index.js";

const root = document.getElementById('root');

const mainPage = new MainPage(root);
mainPage.render();