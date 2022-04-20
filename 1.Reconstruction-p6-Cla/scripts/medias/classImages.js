class ImageMedia {
    constructor(datas) {
            this.id = datas.id;
            this.photographerId = datas.photographerId;
            this.title = datas.title;
            this.image = datas.image;
            this.likes = datas.likes;
            this.date = datas.date;
            this.price = datas.price;

        }
        // <img class="container-photo__photo" src="assets/photographers/${this.photographerId}/${this.image}" />

    //Fonction qui gère l'affichage du template de la gallerie:
    display() {
        return `
            <div class="card-media">
                <div class="container-photo">
                    <a href="assets/photographers/${this.photographerId}/${this.image}" class="lien-media">
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
    path() {
        return `assets/photographers/${this.photographerId}/${this.image}`;
    }
} { /* <i class="fas fa-heart clic" aria-label="likes"></i> */ }
// onclick="javascript:btnClick()"