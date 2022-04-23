class ImageMedia {
    constructor(datas) {
            this.id = datas.id;
            this.photographerId = datas.photographerId;
            this.title = datas.title;
            this.image = datas.image;
            this.likes = datas.likes;
            this.date = datas.date;
            this.price = datas.price;
            // this.test = document.getElementById("divlike");
            this.heart = "fa-regular";
            // this.heart = this.test.innerHTML = ` <i class="fa-regular fa-heart"></i>`;
        }
        // <img class="container-photo__photo" src="assets/photographers/${this.photographerId}/${this.image}" />

    //Fonction qui gère l'affichage du template de la gallerie:
    display() {
        // const check = verif();
        // console.log("verification", check);
        // console.log("les likes", this.likes);

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
                        <p id="noteLike" >${this.likes}</p>                        
                        <i class="${this.heart} fa-heart"></i>                                         
                    </div>
                </div>
            </div>`
    }
    path() {
            return `assets/photographers/${this.photographerId}/${this.image}`;
        }
        // verif() {
        //     if (this.likes === this.likes) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

    inc() {
        // this.test.innerHTML = `Hello!!!!!!!!`;
        this.likes++;
        console.log("C'est cliquééééééé", this.likes);
        this.heart = "fa-solid";
        // const check = this.verif();
        // console.log("veriiif", check);
        // this.test.remove();
        // this.test.classList.remove('fa-regular');
        // this.test.classList.add('fa-solid');
        // this.test.classList.remove('fa-regular');
        // this.test.classList.add('fa-solid');
        console.log("Test Test Test", this.test)
            // console.log("Test Test Test", e.target.classname)

    }
} { /* <i class="fas fa-heart clic" aria-label="likes"></i> */ }
// onclick="javascript:btnClick()"

// elem.classList.remove('fa-heart-o');
// elem.classList.add('fa-heart');