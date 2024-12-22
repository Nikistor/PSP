import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
//import {ProductComponent} from "../../components/product/index.js";
import {ProductPage} from "../product/index.js";
//import {BackButtonComponent} from "../../components/back-button/index.js";

// Создаем нашу страницу
export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    //Добавляем функцию рендера (Кнопка - Hello world 3!)
    /*render() {
        //Добавляем логику рендера кнопки на странице
        this.parent.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-primary">Hello world 3!</button>');
    }*/

    //1.(ButtonComponent) (кнопка - Hello world 4!)
    /*render() {
        const button = new ButtonComponent(this.parent)
        button.render()
    }*/

    //2.(ProductCardComponent) (GetHTML())
    /*render() {
        const productCard = new ProductCardComponent(this.parent)
        productCard.render()
    }*/

    //3.(GetHTML(data))
    /*getData() {
        return {
            id: 1,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "У меня есть крутая акция"
        }
    }
    
    render() {
        const data = this.getData()
        const productCard = new ProductCardComponent(this.parent)
        productCard.render(data)
    }*/

    //4.
    /*getData() {
        return {
            id: 1,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "У меня есть крутая акция"
        }
    }
    //Отрисовка больше чем один компонент
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
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const data = this.getData()
        const productCard = new ProductCardComponent(this.pageRoot)
        productCard.render(data)
    }*/

    //5.
    /*getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 1"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 2"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            },
        ]
    }
    //Отрисовка больше чем один компонент
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
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item)
        })
    }*/

    //6.(Обработчик)
    /*getData() {
        return [
            {
                id: 1,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 1"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 2"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
                title: "Акция",
                text: "Такой акции вы еще не видели 3"
            }
        ]
    }
    //Отрисовка больше чем один компонент
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
    //Обработчик
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
    }*/

    //7. По варианту
    getData() {
        return [
            {
                id: 1,
                src: "milk1.jpg",
                title: "Молоко",
                text: "Состав на 100 г продукта Энергетическая ценность: 60 ккал  Вода: 88 г Белки: 3,2 г  Жиры: 3,25 г Углеводы: 5,2 г"
            },
            {
                id: 2,
                src: "myaso1.jpg",
                title: "Мясо",
                text: "Состав на 100 г продукта Энергетическая ценность: 218 ккал  Вода: 60,1 г Белки: 18,6 г  Жиры: 16,0 г Углеводы: 0 г"
            },
            {
                id: 3,
                src: "ryby1.jpg",
                title: "Рыба",
                text: "Состав на 100 г продукта Энергетическая ценность: 148 ккал  Вода: 71,42 г Белки: 20,77 г  Жиры: 6,61 г Углеводы: 0 г"
            }
        ]
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
            console.log('render, item:', item)
        })
    }
}