class Photographer {
    constructor(datas) {
        this.id = datas.id;
        this.portrait = datas.portrait;
        this.name = datas.name;
        this.city = datas.city;
        this.tagline = datas.tagline;
        this.price = datas.price;
        this.country = datas.country;
    }

    templateIndexHTML() {
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

    //Fonction qui gère l'affichage du template du header
    templateHeaderPhotographers() {
        return `        
        <div class="photograph-header__title">
                <h1>${this.name}</h1>
                <p>${this.city}, ${this.country}</p>
                <p>${this.tagline}</p>
            </div>
            <div class="photograph-header__button">
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div class="photograph-header__container-img">
                <img class="photograph-header__container-img__img" src="assets/photographers/Photographers ID Photos/${this.portrait}" />
            </div>`
    }
}