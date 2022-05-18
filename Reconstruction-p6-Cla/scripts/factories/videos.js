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
        this.value = false;
    }

    //Fonction qui gère l'affichage du template de la gallerie:
    display() {
        return `
        <article class="card-media">
            <div class="container-video" aria-label="vidéo et lien visionneuse" role="link" >
                <a href="assets/photographers/${this.photographerId}/${this.video}" class="lien-media" aria-label="ouvrir la visionneuse">
                    <video class="container-video__video" aria-label="${this.title}" tabindex="0" controls>
                    <source src="assets/photographers/${this.photographerId}/${this.video}" alt="${this.title}" type=video/ogg> <source  type=video/mp4>
                </a>
            </div>
            <div class="items-media" aria-label="description du média">
                <div class="items-media__title" aria-label="titre du média">
                    <p tabindex="0">${this.title}</p>
                </div>
                <div class="items-media__note" aria-label="Nombre total des likes obtenus par le photographe">
                    <p class="noteLike" aria-label="${this.likes} personnes aiment ce média" tabindex="0">${this.likes}</p>
                    <em class="${this.heart}  fa-heart" data-id="${this.id}" aria-label="likes" tabindex="0" role="button"></em>
                </div>
            </div>
        </article>`
    }
    inc() {
        if (this.value == false) {
            this.likes++;
            this.heart = "fa-solid";
            this.value = true;
        }
    }
    path() {
        return `assets/photographers/${this.photographerId}/${this.video}`;
    }
}