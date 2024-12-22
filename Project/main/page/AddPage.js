import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "./CardPage.js";
import {ajax} from "../../modules/ajax.js";

export class AddPage {
    constructor(parent, data, max_length) {
        this.parent = parent;
        this.data = data;
        this.max_length = max_length;

        console.log(this.data)
        console.log(this.length)
    }

    get pageRoot() {
        return document.getElementById('tovars-page')
    }
        
    getHTML() {
        return (
            `
                <div id="tovars-page" class="d-flex flex-wrap">
                    <input id="input-component1" class="btn btn-primary" type="text" placeholder="ссылка на изображение" value="">
                    <input id="input-component2" class="btn btn-primary" type="text" placeholder="название продукта" value="">
                    <input id="input-component3" class="btn btn-primary" type="text" placeholder="описание" value="">
                    <button id="simply_button" class="btn btn-primary">Сохранить</button>
                <div/>
                
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

    render() {
        // debugger;

        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        document.getElementById('simply_button').onclick = function() {
    
            console.log('work');
            let src = document.getElementById('input-component1').value;
            let title = document.getElementById('input-component2').value;
            let text = document.getElementById('input-component3').value;
    
            let obj = new Object();
    
            obj = {
                id: Date.now(),
                src: src,
                title: title,
                text: text
            };
    
            console.log('obj: ', obj)

            // debugger;
            ajax.post('http://localhost:8000/stocks/', obj)
            
        };       
    }
}