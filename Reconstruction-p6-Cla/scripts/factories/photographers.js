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
            <a href="./photographer.html?${this.id}"  tabindex="0" role="link" aria-label="lien vers galerie photographe" aria-label="Portrait de ${this.name}">
                <div class="card" aria-label="Bloc image et description">
                    <div class="container-img" aria-label="Bloc image">
                        <img class="container-img__img" tabindex="0" src="assets/photographers/Photographers ID Photos/${this.portrait}" alt="Portrait de ${this.name}" />
                    </div>
                    <h2 class="card__photographer-name" tabindex="0" aria-label="${this.name}">${this.name}</h2>
                </div>
            </a>
            <div class="infos" aria-label="infos photos" tabindex="0">
                <p class="city" tabindex="0" aria-label="${this.city}">${this.city}</p>
                <p class="slogan" tabindex="0" aria-label="${this.tagline}">${this.tagline}</p>
                <p class="price" tabindex="0" aria-label="${this.price}euros par jour">${this.price}€/jour</p>
            </div>
        </article>`
    }

    //Fonction qui gère l'affichage du header dans la page photographer.html
    displayHeader() {
        return `        
            <div class="photograph-header__title" aria-label="Entête du photographe">
                <h1 tabindex="0" aria-label="${this.name}">${this.name}</h1>
                <div class="legend" aria-label="description et localisation">
                    <h2 class="localisation" aria-label="${this.city}, ${this.country}" tabindex="0">${this.city}, ${this.country}</h2>
                    <p class="description" aria-label="${this.tagline}" tabindex="0">${this.tagline}</p>
                </div>
            </div>
            <div class="photograph-header__button">
                <button class="contact_button" id="contact" aria-label="Contactez-moi, ouvrir le formulaire" tabindex="0">Contactez-moi</button>
            </div>
            <aside id="contact_modal">
            </aside>
            <div class="photograph-header__container-img" aria-label="portrait du photographe">
                <img class="photograph-header__container-img__img" tabindex="0" src="assets/photographers/Photographers ID Photos/${this.portrait}" alt="portrait de${this.name}" />
            </div>`
    }
    displayPrice() {
        return `${this.price}`
    }
}

// onclick="displayModal()
{ /* <aside id="contact_modal" aria-hidden="false" aria-labelledby="contactPhotographerH1" arial-modal="true" */ }