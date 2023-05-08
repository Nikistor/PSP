//import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
//import {ProductComponent} from "../../components/product/index.js";
import {ProductPage} from "../product/index.js";
//import {BackButtonComponent} from "../../components/back-button/index.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";

// Создаем нашу страницу
export class MainPage {
    constructor(parent, data_info) {
        this.parent = parent;
        this.data_info = data_info
    }

    getData() {
        debugger
        ajax.post(urls.getGroupMembers(groupId), (data) => {
            this.renderData(data.response.items)
            this.data_info = data.response.items
            console.log(this.data_info)
        })
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickCard(e) {
        debugger;
        const cardId = e.target.dataset.id
        const press = undefined;

        Object.entries(this.data_info).forEach(([key, value]) => {
            console.log(key, value.id);
            if(value.id == cardId){
                // press = this.data_info.id;
                this.data_info = value;
                // console.log('press:', press)
            }
        });

        console.log('this.data_info:', this.data_info)

        const productPage = new ProductPage(this.parent, cardId, this.data_info)
        productPage.render()

        console.log('cardId:', cardId)
        console.log('this.data_info.id:', this.data_info)
    }

    render() {
        debugger
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        this.getData()
    }
}