export class UpdateButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("update-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="update-button" class="btn btn-primary" type="button">Обновить</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}