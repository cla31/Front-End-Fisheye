class Medias {
    constructor(id, photographerId, title, media, likes, date, price) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.media = media;
        this.likes = likes;
        this.date = date;
        this.price = price;

    }

    //Fonction qui gère l'affichage du template de la gallerie:
    displayGallery(media) {
        try {
            // `<h1>${boxDatasMedias.title} </h1>`
            // document.getElementById(id).innerHTML =
            if (media == this.image) {
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
            } else {
                return `
            <div class="card-media">
                <div class="container-video">
                <video width="290" height="290" controls>
                <source type=video/ogg> <source src="assets/photographers/${boxDatasMedias.photographerId}/${boxDatasMedias.video}" type=video/mp4>
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

        } catch (erreur) {
            console.log(erreur);
        }
    }

}