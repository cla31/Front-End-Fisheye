class VideoMedia {
    constructor(datas) {
        this.id = datas.id;
        this.photographerId = datas.photographerId;
        this.title = datas.title;
        this.video = datas.video;
        this.likes = datas.likes;
        this.date = datas.date;
        this.price = datas.price;
        this.heart = "fa-regular";
    }

    //Fonction qui gère l'affichage du template de la gallerie:
    display() {
        return `
        <article class="card-media">
            <div class="container-video" aria-label="vidéo et lien diaporama">
                <a href="assets/photographers/${this.photographerId}/${this.video}" class="lien-media">
                    <video class="container-video__video" controls>
                    <source src="assets/photographers/${this.photographerId}/${this.video}" alt="${this.title}" type=video/ogg> <source  type=video/mp4>
                </a>
            </div>
            <div class="items-media" aria-label="description du média">
                <div class="items-media__title" aria-label="titre du média">
                    <p>${this.title}</p>
                </div>
                <div class="items-media__note" aria-label="notes et likes">
                    <p id="noteLike">${this.likes}</p>
                    <i class="${this.heart}  fa-heart" data-id="${this.id}" aria-label="likes"></i>
                </div>
            </div>
        </article>`
    }
    inc() {
        this.likes++;
        this.heart = "fa-solid";
    }
    path() {
        return `assets/photographers/${this.photographerId}/${this.video}`;
    }
}