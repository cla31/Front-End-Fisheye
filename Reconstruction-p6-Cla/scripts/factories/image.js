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
            <article class="card-media" >
                <a href="assets/photographers/${this.photographerId}/${this.image}" class="lien-media" aria-label="ouvrir la visionneuse" tabindex="0">
                    <div class="container-media" aria-label="photo et lien visionneuse">
                        <img class="container-media__photo" src="assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}" aria-label="${this.title}"/>                  
                    </div>
                </a>
                <div class="items-media" aria-label="description du média">
                    <div class="items-media__title" aria-label="titre du média">
                        <p tabindex="0">${this.title}</p>
                    </div>
                    <div class="items-media__note" aria-label="Nombre total des likes obtenus par le photographe">
                        <p class="noteLike" aria-label="${this.likes} personnes aiment ce média" tabindex="0">${this.likes}</p>                        
                        <em class="${this.heart} fa-heart" aria-label="likes" tabindex="0" role="button"></em>                                         
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