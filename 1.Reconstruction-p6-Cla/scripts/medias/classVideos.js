class Video {
    constructor(id, photographerId, title, video, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.video = video;
        this.likes = likes;
        this.date = date;
        this.price = price;

    }

    //Fonction qui gère l'affichage du template de la gallerie:
    displayVideo() {
        return `
        <div class="card-media">
            <div class="container-video">
                <video class="container-video__video" controls>
                <source  type=video/ogg> <source src="assets/photographers/${this.photographerId}/${this.video}" type=video/mp4>
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
}