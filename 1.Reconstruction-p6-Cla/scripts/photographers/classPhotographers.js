class Photographer {
    constructor(id, portrait, name, city, tagline, price) {
        this.id = id;
        this.portrait = portrait;
        this.name = name;
        this.city = city;
        this.tagline = tagline;
        this.price = price;
    }

    template() {
        return `
        <div class="photographer">
        <a href="./photographer.html?${this.id}">
            <div class="card">
                <div class="container-img">
                    <img class="container-img__img" src="assets/photographers/Photographers ID Photos/${this.portrait}" />
                </div>
                <h2 class="card__photographer-name">${this.name}</h2>
            </div>
        </a>
        <p>${this.city}</p>
        <p>${this.tagline}</p>
        <p>${this.price}</p>
    </div>`
    }
}