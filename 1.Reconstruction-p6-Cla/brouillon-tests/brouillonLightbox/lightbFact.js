function detectClick() {
    gallery.addEventListener('click', function(e) {
        // console.log(e.target);
        if (e.target.classList.contains("media")) {
            console.log(e.target);
        }
    });
}

// detectClick();



function lightboxFactory(dataMedia) {
    const { id, photographerId, title, image, video } = dataMedia;
    // console.log("media", media);
    // console.log("id", e);
    async function initLightbox() {
        // Récupère l'ID dans l'URL
        let params = new URL(document.location).searchParams;
        let photographerId = params.get("id");

        const photographMedia = document.querySelector(".photographMedia");
        const imgElement = photographMedia.querySelector("img");
        const imgId = imgElement.getAttribute("id");
        // console.log("attribut imgId", imgId);
        // console.log("Id", dataMedia.id);

        // if (imgId == id) {
        //   console.log("ok");
        // console.log(id);



        // console.log(event.target.className); 
        //   let nbLikes = event.target.previousSibling;
        // //let plus = event.target.closest('.nbLikes');  
        //   if(nbLikes.classList.contains('unClick')){
        //     nbLikes.classList.replace('unClick', 'click');
        //     nbLikes.innerHTML++
        //     event.target.setAttribute("class", "fas fa-heart iconHeart");
        //   } else { 
        //     nbLikes.classList.replace('click', 'unClick');
        //     nbLikes.innerHTML--
        //     event.target.setAttribute("class", "far fa-heart iconHeart");
        //   }

    };



    // dataMedia.forEach((element) => {   
    //   // console.log(element);   
    // // Pour un photographe sélectionné, tri des "img" et "video"  
    //   if (photographerId == element.photographerId) {        
    //     console.log("element.id", element.id);
    //     // let type = "";
    //     // Détection du type de médias : image ou vidéo
    //     if (element.video) {
    //       // type = "video";
    //       // console.log("Video Element.id", element.id);
    //       // console.log(element.video);
    //       getLightboxVideoDOM();
    //     }
    //     if (element.image) {
    //       // console.log("Photo Element.id", element.id);
    //       // console.log(element.image);
    //       getLightboxPhotoDOM();
    //     }
    //     // type mis en paramètre dans la fonction
    //     // recoveryData(element, type);
    //   }
    // });
    // }

}
// initLightbox();
// const photographMedia = document.querySelector(".photographMedia");
// const imgId = photographMedia.querySelector("img"); 
// // const attributId = lightbox.getAttribute("id");
// // console.log("attributId", attributId);
// const attributId = imgId.getAttribute("id");
// console.log("imgId", attributId);

function getLightboxVideoDOM() {
    // const { id, title, video, date } = element;
    // Déclaration des variables pour la création d'éléments HTML
    // console.log("countVideo");
    const lightbox = document.querySelector("#lightbox");
    const boxMediaTextContainer = document.createElement("div");
    boxMediaTextContainer.classList.add("boxMediaTextContainer");
    const boxMediaContainer = document.createElement("div");
    boxMediaContainer.classList.add("boxMediaContainer");
    const videoElement = document.createElement("video");
    const boxTitleContainer = document.createElement("div");
    boxTitleContainer.classList.add("boxTitleContainer");
    const h2 = document.createElement("h2");

    // Création des attributs
    const movie = `assets/images/${video}`;
    videoElement.setAttribute("src", movie);
    videoElement.setAttribute("control", "");
    videoElement.setAttribute("poster", "");
    videoElement.setAttribute("alt", title);

    h2.textContent = title;
    h2.setAttribute("arialabel", "title");

    // Création des éléments HTML
    lightbox.appendChild(boxMediaTextContainer);
    boxMediaTextContainer.appendChild(boxMediaContainer);
    boxMediaContainer.appendChild(videoElement);
    boxMediaTextContainer.appendChild(boxTitleContainer);
    boxTitleContainer.appendChild(h2);
    // return (photographMedia);
}

function getLightboxPhotoDOM() {
    console.log("getLightboxPhotoDOM")
        // const { id, title, image, date } = element;
        // console.log("countPhoto");
        // Déclaration des variables pour la création d'éléments HTML
    const lightbox = document.querySelector("#lightbox");
    const boxMediaTextContainer = document.querySelector(".boxMediaTextContainer");
    // boxMediaTextContainer.classList.add("boxMediaTextContainer");
    const boxMediaContainer = document.createElement("div");
    boxMediaContainer.classList.add("boxMediaContainer");
    const imgElement = document.createElement("img");
    const boxTitleContainer = document.createElement("div");
    boxTitleContainer.classList.add("boxTitleContainer");
    const h2 = document.createElement("h2");

    // Création des attributs
    const picture = `assets/images/${image}`;
    imgElement.setAttribute("src", picture);
    imgElement.setAttribute("alt", title);

    h2.textContent = title;
    h2.setAttribute("arialabel", "title");

    // Création des éléments HTML
    lightbox.appendChild(boxMediaTextContainer);
    boxMediaTextContainer.appendChild(boxMediaContainer);
    boxMediaContainer.appendChild(imgElement);
    boxMediaTextContainer.appendChild(boxTitleContainer);
    boxTitleContainer.appendChild(h2);

    // return (photographMedia);
}

// return {
//   // id,
//   // photographerId,
//   // title,
//   // date,
//   getLightboxVideoDOM,
//   getLightboxPhotoDOM,
// };

// }