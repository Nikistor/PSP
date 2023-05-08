//Создаем компонент продукта
export class ProductComponent {
    constructor(parent) {
        this.parent = parent
        console.log('pr', parent)
    }
    //Изменяем функцию получения данных
    getData() {
        ajax.post(urls.getUserInfo(this.id), (data) => {
            this.renderData(data.response)
        })
    }
    //Добавляем функцию отрисовки карточек по данным
    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item[0])
    }
    //Нам нужно поменять структуру компонента ProductComponent, так же как мы сделали с компонентом ProductCardComponent
    getHTML(data) {
        return (
            `
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                                <h5 class="card-title">${data.country}</h5>
                                <h5 class="card-title">${data.status}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }
    //Модифицируем функцию отрисовки страницы
    render(data) {
        debugger;
        console.log('this.data_info.id:', data)
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)

        //const backButton = new BackButtonComponent(this.pageRoot)
        //backButton.render(this.clickBack.bind(this))
        
        //this.getData()
    }
}