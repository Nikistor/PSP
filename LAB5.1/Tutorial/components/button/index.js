//Создаем наш компонент 
export class ButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("click-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="click-button" class="btn btn-primary" type="button">Посмотреть</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}