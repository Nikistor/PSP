//Создаем компонент карточки
export class ProductCardComponent {
    constructor(parent, id_num, length) {
        this.parent = parent;
        this.id_num = id_num;
        this.length = length;
    }
    
    get pageRoot() {
        return document.getElementById('data-info-user')
    }

    /*getHTML(data) {
        return (
            `
                <div class="card-${data.id}" style="width: 300px;">
                    <img class="card-img-top" src="${data.photo_400_orig}" alt="картинка">
                    <div class="card-body">
                        <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
                    </div>
                </div>
            `
        )
    }*/

    getHTML(data) {
        return (

            `
            <li class="slide">
                <div class="show_user">
                    <img class="card-img-top" src="${data.photo_400_orig}" alt="картинка" style="width: 300px;">
                    <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                    <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
                </div>
            </li>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }
    
    addEvenClick(){
        // debugger;
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");
        
        console.log(slidesContainer)
        console.log(slide)
        console.log(prevButton)
        console.log(nextButton)

        nextButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        });

        prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
        });
    }

    render(data, listener) {
        // debugger;
        // console.log('ProductCardComponent:', data)
        const html = this.getHTML(data)
        console.log('html:', html)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
        this.addEvenClick()
        
        // const ButtonLeft = new ButtonComponentLeft(this.pageRoot)
        // ButtonLeft.render(this.clickBack.bind(this))
    }
}