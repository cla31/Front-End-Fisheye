class VideoMedia {
    constructor(datas) {
        this.id = datas.id;
        this.photographerId = datas.photographerId;
        this.title = datas.title;
        this.video = datas.video;
        this.likes = datas.likes;
        this.date = datas.date;
        this.price = datas.price;
    }

    //Fonction qui gère l'affichage du template de la gallerie:
    display() {
        return `
        <div class="card-media">
            <div class="container-video">
                <a href="assets/photographers/${this.photographerId}/${this.video}"class="lien-media">
                    <video class="container-video__video" controls>
                    <source src="assets/photographers/${this.photographerId}/${this.video}" type=video/ogg> <source  type=video/mp4>
                </a>
            </div>
            <div class="items-media">
                <div class="items-media__title">
                    <p>${this.title}</p>
                </div>
                <div class="items-media__note">
                    <p>${this.likes}</p>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </div>`
    }
    path() {
        return `assets/photographers/${this.photographerId}/${this.video}`;
    }
}