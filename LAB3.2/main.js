//const root = document.getElementById('root');
//root.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-primary">Hello world 2!</button>')

import {MainPage} from "./pages/main/index.js";

const root = document.getElementById('root');

const mainPage = new MainPage(root);
mainPage.render();