import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "./CardPage.js";
import {ajax} from "../../modules/ajax.js";

export class DogsPage {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    get pageRoot() {
        return document.getElementById('tovars-page')
    }
        
    getHTML() {
        return (
            `
                <div id="tovars-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
        console.log('project/main/index.js; clickCard, this.parent:', this.parent)
        console.log('project/main/index.js; clickCard, cardId:', cardId)

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        this.data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
            console.log('main/index.js; render, productCard:', productCard)
            console.log('main/index.js; render, item:', item)
        })

        
    }
}