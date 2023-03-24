import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";

//Создаем страницу продукта 
export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return {
            id: 1,
            src: "https://images.squarespace-cdn.com/content/v1/59f9f933914e6b4f6e5fba1f/1521559098360-YTC45ORL6AQM6DB8FMQ5/COMPRA-02.jpg",
            title: `Продукт ${this.id}`,
            text: "Заказ оформлен. Ожидайте курьера."
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}