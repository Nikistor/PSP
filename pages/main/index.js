//import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

// Создаем нашу страницу
export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getData() {
        return [
            {
                id: 1,
                id_carusel: "carousel-item active",
                src: "/milk2.jpg",
                title: "Молоко",
                text: "Состав на 100 г продукта Энергетическая ценность: 60 ккал  Вода: 88 г Белки: 3,2 г  Жиры: 3,25 г Углеводы: 5,2 г",
            },
            {   
                id: 2,
                id_carusel: "carousel-item",
                src: "/myaso2.jpg",
                title: "Мясо",
                text: "Состав на 100 г продукта Энергетическая ценность: 218 ккал  Вода: 60,1 г Белки: 18,6 г  Жиры: 16,0 г Углеводы: 0 г",
            },
            {
                id: 3,
                id_carusel: "carousel-item",
                src: "/ryby2.jpg",
                title: "Рыбы",
                text: "Состав на 100 г продукта Энергетическая ценность: 148 ккал  Вода: 71,42 г Белки: 20,77 г  Жиры: 6,61 г Углеводы: 0 г",
            },
        ]
    }
    
    get pageRoot() {
        return document.getElementById('id-carousel-inner')
    }
        
    getHTML() {
        return (
            `
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner" id="id-carousel-inner"></div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>
            `
        )
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}