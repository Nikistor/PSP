//import {ButtonComponent} from "../../components/button/index.js";
import {ProductCardComponent} from "../../components/product-card/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    getData() {
        return {}
    }
    
    render() {
        const data = this.getData()
        const productCard = new ProductCardComponent(this.parent)
        productCard.render(data)
    }
}