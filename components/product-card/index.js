//Создаем компонент карточки
export class ProductCardComponent {
  constructor(parent) {
    this.parent = parent;
    console.log(parent)
  }

  //Карточки
  /*getHTML(data) {
      return (
          `
              <div class="card" style="width: 300px;">
                  <img class="card-img-top" src="${data.src}" alt="картинка">
                  <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">${data.text}</p>
                      <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Заказать</button>
                  </div>
              </div>
          `
      )
  }*/

  //Карусель
  getHTML(data) {
    return (
      `
      <div class="${data.id_carusel}">
          <img src="${data.src}"/>
          <div class="carousel-caption d-none d-md-block">
              <h5>${data.title}</h5>
              <p>${data.text}</p>
              <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">
                  Заказать
              </button>
          </div>
      </div>
      `
    )
  }


  addListeners(data, listener) {
    document
      .getElementById(`click-card-${data.id}`)
      .addEventListener("click", listener)
  }

  render(data, listener) {
    debugger;
    const html = this.getHTML(data)
    console.log(html)
    console.log(data)
    // console.log(this.parent.data)
    // console.log(test)
    this.parent.insertAdjacentHTML('beforeend', html)
    this.addListeners(data, listener)
  }
}