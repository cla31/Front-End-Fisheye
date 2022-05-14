class ImageMedia {
    constructor(datas) {
        this.id = datas.id;
        this.photographerId = datas.photographerId;
        this.title = datas.title;
        this.image = datas.image;
        this.likes = datas.likes;
        this.date = datas.date;
        this.price = datas.price;
        this.heart = "fa-regular";
        this.value = false;
    }

    //Fonction qui gère l'affichage du template de la gallerie:
    display() {

        return `
            <article class="card-media">
                <div class="container-photo" aria-label="photo et lien diaporama">
                    <a href="assets/photographers/${this.photographerId}/${this.image}" class="lien-media">
                        <img class="container-photo__photo" src="assets/photographers/${this.photographerId}/${this.image}"alt="${this.title}" />
                    </a>
                </div>
                <div class="items-media" aria-label="description du média">
                    <div class="items-media__title" aria-label="titre du média">
                        <p>${this.title}</p>
                    </div>
                    <div class="items-media__note" aria-label="notes et likes">
                        <p id="noteLike" >${this.likes}</p>                        
                        <i class="${this.heart} fa-heart" aria-label="likes"></i>                                         
                    </div>
                </div>
            </article>`
    }
    path() {
        return `assets/photographers/${this.photographerId}/${this.image}`;
    }

    inc() {
        if (this.value == false) {
            this.likes++;
            this.heart = "fa-solid";
            this.value = true;
        }
    }
}