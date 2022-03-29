class Images {
    constructor(id, photographerId, title, image, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.likes = likes;
        this.date = date;
        this.price = price;

    }

    //Fonction qui gère l'affichage du template de la gallerie:
    displayImage() {
        return `
            <div class="card-media">
                <div class="container-photo">
                    <img class="container-photo__photo" src="assets/photographers/${boxDatasMedias.photographerId}/${boxDatasMedias.image}" />
                </div>
                <div class="items-media">
                    <div class="items-media__title">
                        <p>${boxDatasMedias.title}</p>
                    </div>
                    <div class="items-media__note">
                        <p>${boxDatasMedias.likes}</p>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>`
    }
}