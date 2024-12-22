export class ButtonComponentLeft {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("left-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="left-button" class="btn btn-primary" type="button" href="#carousel__slide1">Go to last slide</button>
            `
            // <a href="#carousel__slide${this.length}" class="carousel__prev">Go to last slide</a>
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}
