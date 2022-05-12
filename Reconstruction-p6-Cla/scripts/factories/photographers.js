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

    displayPhotographer() {
        return `
        <article class="photographer">
            <a href="./photographer.html?${this.id}">
                <div class="card">
                    <div class="container-img">
                        <img class="container-img__img" src="assets/photographers/Photographers ID Photos/${this.portrait}" alt="Portrait de ${this.name}" />
                    </div>
                    <h2 class="card__photographer-name">${this.name}</h2>
                </div>
            </a>
            <p>${this.city}</p>
            <p>${this.tagline}</p>
            <p>${this.price}</p>
        </article>`
    }

    //Fonction qui gère l'affichage du header dans la page photographer.html
    displayHeader() {
        return `        
            <div class="photograph-header__title">
                <h1>${this.name}</h1>
                <p>${this.city}, ${this.country}</p>
                <p>${this.tagline}</p>
            </div>
            <div class="photograph-header__button">
                <button class="contact_button" id="contact">Contactez-moi</button>
            </div>
            <aside id="contact_modal" aria-hidden="false" aria-labelledby="contactPhotographerH1" arial-modal="true">
            </aside>
            <div class="photograph-header__container-img">
                <img class="photograph-header__container-img__img" src="assets/photographers/Photographers ID Photos/${this.portrait}" alt="portrait de${this.name} " />
            </div>`
    }
    displayPrice() {
        return `${this.price}`
    }
}

// onclick="displayModal()