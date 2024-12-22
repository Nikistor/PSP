import {ButtonComponent} from "../button/index.js";
import {MainPage} from "../../pages/main/index.js";
import {ListUser} from "../../pages/list_user.js";

export class ShowMainPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    get pageRoot() {
        return document.getElementById('button_group')
    }

    getHTML(data) {
        return (
            `
            <h5>Название сообщество: ${data.name}</h5>
            <div class="card-1" style="width: 300px;">
                <img class="card-img-top" src="${data.photo_200}" alt="картинка">
                <div class="card-body" id="button_group"></div>
            </div>
            `
        )
    }

    clickBack() {
        const list_user = new ListUser(this.parent)
        list_user.render()
    }

    render(data, listener) {
        // debugger;
        console.log(data)
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)

        const Button = new ButtonComponent(this.pageRoot)
        Button.render(this.clickBack.bind(this))
    }
}