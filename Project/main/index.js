import {ProductCardComponent} from "../components/product-card/index.js";
import {ProductPage} from "./page/CardPage.js";
import {ajax} from "../modules/ajax.js";

import {UpdateButtonComponent} from "../components/button/update.js"
import {AddButtonComponent} from "../components/button/add.js"
import {DeleteButtonComponent} from "../components/button/delete.js"
import {DogsPage} from "./page/TovarsPage.js"
import {AddPage} from "./page/AddPage.js"
import {DeletePage} from "./page/DeletePage.js"
 
// Подключение CSS

export class MainPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }
    
    getDataInfoAll() {
        // debugger;
        ajax.get('http://localhost:8000/stocks/', (data) => {
            this.data = data
            console.log('data', data)
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
        // debugger
        const cardId = e.target.dataset.id
        console.log('project/main/index.js; clickCard, this.parent:', this.parent)
        console.log('project/main/index.js; clickCard, cardId:', cardId)

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    clickBackUpdate() {
        const dogspage = new DogsPage(this.parent, this.data)
        dogspage.render()
    }

    clickBackAdd() {
        // debugger;
        const addpage = new AddPage(this.parent, this.data, Object.keys(this.data).length)
        addpage.render()
    }

    clickBackDelete() {
        // debugger;
        const addpage = new DeletePage(this.parent, this.data, Object.keys(this.data).length)
        addpage.render()
    }

    render() {
        // debugger;
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const UpdateButton = new UpdateButtonComponent(this.pageRoot)
        UpdateButton.render(this.clickBackUpdate.bind(this))

        const AddButton = new AddButtonComponent(this.pageRoot)
        AddButton.render(this.clickBackAdd.bind(this))
        
        const DeleteButton = new DeleteButtonComponent(this.pageRoot)
        DeleteButton.render(this.clickBackDelete.bind(this))       
        
        const data = this.getDataInfoAll()
        console.log(data)
    
    }
}