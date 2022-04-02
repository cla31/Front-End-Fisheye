class Image {
    constructor(id, photographerId, title, image, likes, date, price) {
            this.id = id;
            this.photographerId = photographerId;
            this.title = title;
            this.image = image;
            this.likes = likes;
            this.date = date;
            this.price = price;

        }
        // <img class="container-photo__photo" src="assets/photographers/${this.photographerId}/${this.image}" />

    //Fonction qui gère l'affichage du template de la gallerie:
    displayImage() {
        return `
            <div class="card-media">
                <div class="container-photo">
                    <a href="assets/photographers/${this.photographerId}/${this.image}">
                        <img class="container-photo__photo" src="assets/photographers/${this.photographerId}/${this.image}" />
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
}