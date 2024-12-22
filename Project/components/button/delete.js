export class DeleteButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("delete-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="delete-button" class="btn btn-primary" type="button">Удалить</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}