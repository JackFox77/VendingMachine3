


export class Snack{
    constructor(name, price, location,img) {
        this.name = name
        this.price = price
        this.location = location
        this.img=img
    }


    get Template() {
        return`
        <div id="${this.name}" class="img-fluid col-4"></div>`
    }
}
