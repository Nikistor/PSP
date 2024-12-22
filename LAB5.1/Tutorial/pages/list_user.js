import {ButtonComponent} from "../components/button/index.js";
// import {ButtonComponentLeft} from "../components/button/left.js";
import {ProductCardComponent} from "../components/product-card/index.js";
import {ProductComponent} from "../components/product/index.js";
import {BackButtonComponent} from "../components/back-button/index.js";

import {ProductPage} from "../pages/main/product/index.js";
import {MainPage} from "../pages/main/index.js";

import {ajax} from "../modules/ajax.js";
import {urls} from "../modules/urls.js";
import {groupId} from "../modules/consts.js";


export class ListUser {
    constructor(parent, data_info_user, length_data_info_user) {
        this.parent = parent
        this.data_info_user = data_info_user
        this.length_data_info_user = length_data_info_user

        console.log('getDataInfoUser', this.data_info_user)
    }

    getDataInfoUser() {
        ajax.post(urls.getUserGroupMembers(groupId), (data) => {
            this.renderData(data.response.items)
            this.data_info_user = data.response.items
            // console.log('data.response.items', data.response.items)
            // debugger;
            console.log('getDataInfoUser', this.data_info_user)
        })
    }

    renderData(items) {
        debugger
        // items.forEach((item) => {
        //     const productCard = new ProductCardComponent(this.pageRoot)
        //     productCard.render(item, this.clickCard.bind(this))
        // })
        // console.log('items length: ', Object.keys(items).length)
        this.length_data_info_user = Object.keys(items).length
        Object.entries(items).forEach(([key, value]) => {
            console.log('renderData, key: ', key, 'value:', value);
            console.log('renderData, pageRoot: ', this.pageRootCarusel);
            const productCard = new ProductCardComponent(this.pageRootCarusel, key, Object.keys(items).length)
            productCard.render(value, this.clickCard.bind(this))
        });
    }

    get pageRootCarusel() {
        return document.getElementById('slides-container')
    }

    // get pageRootBody() {
    //     return document.getElementById('list-user-page')
    // }
        
    getHTML() {
        return (
            `
            <body>
                <section class="slider-wrapper">
                    <button class="slide-arrow" id="slide-arrow-prev">
                        &#8249;
                    </button>
                    <button class="slide-arrow" id="slide-arrow-next">
                        &#8250;
                    </button>
                    <div id="main-body-div">
                        <ul class="slides-container" id="slides-container">

                        </ul>
                    </div>
                </section>
            </body>
            </ul>
            `
            // `
            // <body>
            //     <div id="main-body-div">
            //         <ol class="carousel__viewport" id="list-user-page">
                        
            //         </ol>
            //     </div>
            // </body>
            // `
        )
        // <section class="carousel" aria-label="Gallery" id="main-page"> </section>
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    clickCard(e) {
        // debugger;
        const cardId = e.target.dataset.id
        // const press = undefined;

        Object.entries(this.data_info_user).forEach(([key, value]) => {
            if(value.id == cardId){
                this.data_info_user = value;
            }
        });


        const productPage = new ProductPage(this.parent, cardId, this.data_info_user)
        productPage.render()

    }

    render() {
        debugger;   
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getDataInfoUser()
        // this.addEvenClick()

        debugger;

        console.log('TEST END LIST USER')
    }
}