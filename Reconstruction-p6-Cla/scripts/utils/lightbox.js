//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  LIGHTBOX
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// const showMod = document.getElementById("modBox");
const showMod = document.getElementById("lightboxModal");
let index = 0;
// const linksCards = document.getElementsByClassName("lien-media");

function lightbox() {
    const linksCards = document.getElementsByClassName("lien-media");
    //selection de l'attribut video
    var media = document.querySelector('video');
    // console.log("voir media", media);
    const cards = Array.from(linksCards);
    // suppression de l'attribut qui empêche le clic
    for (let item of cards) {
        media.removeAttribute('controls');
    }
    cards.forEach((link, index) => link.addEventListener('click', e => {
        e.preventDefault();
        displayImgLightbox(fullMedias[index]);
    }));
    cards.forEach((link, index) => link.addEventListener('keydown', e => {
        if (e.key === "Enter") {
            e.preventDefault();
            displayImgLightbox(fullMedias[index]);
            console.log("Touche appuyée", e.key);
        }
        // console.log("Touche appuyée", e.key);
    }));

}

function urlExtension(url) {
    const urlSplitSlash = url.split('/').pop();
    const urlSplitPoint = urlSplitSlash.split('.').pop();
    return urlSplitPoint;
}

function displayImgLightbox(element) {
    elmt = urlExtension(element.path());
    if (elmt == "jpg") {
        showMod.innerHTML = ` 
        <div class="lightboxContainer" aria-label="emplacement photo">
            <div class="angleContainer" aria-label="bouton image précédente">
                <em class="fas fa-angle-left prev" id="previous" tabindex="0" aria-label="image précédente"></em>
            </div>
            <div class="lightboxMediaContainer" aria-label="box du média">
                <div class="viewContainer" aria-label="box image"><img class="media" src="assets/photographers/${element.photographerId}/${element.image}" id="${element.photographerId}" alt="${element.title}" aria-label="${element.title}" tabindex="0" ></div>
                <div class="legendContainer" aria-label="titre image">
                    <h1 class="legend" tabindex="0" >${element.title}</h1>
                </div>
            </div>
            <div class="angleContainer" aria-label="bouton image suivante">
                <em class="fas fa-angle-right next" tabindex="0"  id="next" aria-label="image suivante"></em>
            </div>
        </div>
        <div class="crossCloseLightbox" id="close-wind" tabindex="0" aria-label="fermeture de la lightbox">
            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <path class="svgCross" d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#901C1C"></path>
            </svg>
        </div>           
       `;
    } else {
        showMod.innerHTML = ` 
        <div class="lightboxContainer" aria-label="emplacement vidéo">
            <div class="angleContainer" aria-label="bouton image précédente">
                <em class="fas fa-angle-left prev" id="previous" tabindex="0" aria-label="image précédente"></em>
            </div>
            <div class="lightboxMediaContainer" aria-label="box du média">
                <div class="viewContainer" aria-label="box video"><video class="media movie" src="assets/photographers/${element.photographerId}/${element.video}" id="${element.photographerId}" poster="" alt="${element.title}" aria-label="${element.title}" tabindex="0" controls="" tabindex="0" ></video></div>
                <div class="legendContainer" aria-label="titre image">
                    <h1 class="legend" tabindex="0">${element.title}</h1>
                </div>
            </div>
            <div class="angleContainer" aria-label="bouton image suivante">
                <em class="fas fa-angle-right next"  tabindex="0" id="next" aria-label="image suivante"></em>
            </div>
        </div>
        <div class="crossCloseLightbox" id="close-wind" tabindex="0" aria-label="fermeture de la lightbox">
            <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <path class="svgCross" d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#901C1C"></path>
            </svg>
        </div>         
       `;
    }
    const hiddenMedias = document.getElementById("medias");
    console.log("hiddenMedias", hiddenMedias);
    hiddenMedias.setAttribute("aria-hidden", true);
    showMod.style.display = "block";
    //La lightbox a le focus
    showMod.focus();
    playLightbox();
    close("close-wind");

    // +++++++++++++++++++++++++

}

function close(selector1) {
    document.getElementById(selector1).addEventListener("click", function() {
        showMod.style.display = "none";
    });
}


function playLightbox() {
    document.getElementById("next").addEventListener("click", function() {
        index++;
        if (index === fullMedias.length) {
            index = 0;
        }
        displayImgLightbox(fullMedias[index]);
    });
    // Ecoute du "click" sur les Contrôles "média suivant" et ""media précédent"
    document.getElementById("previous").addEventListener("click", function() {
        index--;
        // console.log("taille du tableau", fullMedias.length)
        if (index === -1) {
            index = fullMedias.length - 1;
        }
        displayImgLightbox(fullMedias[index]);
    });

    // // Ecoute des flèches gauche et droite du clavier
    // document.addEventListener("keyup", function(e) {
    //     if (e.key === "ArrowRight") {
    //         console.log("Flèche droite");
    //         index++;
    //         if (index === fullMedias.length) {
    //             index = 0;
    //         }
    //         displayImgLightbox(fullMedias[index]);

    //     }

    //     if (e.key === "ArrowLeft") {
    //         console.log("Flèche gauche");
    //         index--;
    //         // console.log("taille du tableau", fullMedias.length)
    //         if (index === -1) {
    //             index = fullMedias.length - 1;
    //         }
    //         displayImgLightbox(fullMedias[index]);
    //     }
    // });

    // Ecoute du clavier sur les icônes "média suivant", "media précédent" et la croix de fermeture
    document.addEventListener("keyup", function(e) {
        // Touche Entrée détectée sur la flèche droite : incrémentation (image suivante)
        if (e.key === "Enter" && e.target.className.includes("prev")) {
            console.log("Selection précedent");

        }
        // Touche Entrée détectée sur la flèche gauche, décrémentation (image suivante)
        if (e.key === "Enter" && e.target.className.includes("next")) {
            console.log("Selection suivant");

        }
        // Touche Entrée détectée sur la croix : fermeture de la lightbox
        if (
            e.key === "Enter" &&
            e.target.className.includes("crossCloseLightbox")
        ) {
            console.log("Croix fermeture");
            //   tableauMedias[index].focus();
            //   closeLightbox();
        }
    });

}