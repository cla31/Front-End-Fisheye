//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  LIGHTBOX
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// const showMod = document.getElementById("modBox");
const showMod = document.getElementById("lightboxModal");
let index = 0;

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
    }))
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
        <div class="lightboxContainer">
        <div class="angleContainer">
            <em class="fas fa-angle-left prev" id="previous" tabindex="0" aria-label="image précédente"></em>
        </div>
        <div class="lightboxMediaContainer">
            <div class="viewContainer"><img class="media" src="assets/photographers/${element.photographerId}/${element.image}" id="${element.photographerId}" alt="${element.title}" aria-label="${element.title}" tabindex="0"></div>
            <div class="legendContainer">
                <h1 class="legend" tabindex="0">${element.title}</h1>
            </div>
        </div>
        <div class="angleContainer">
            <em class="fas fa-angle-right next"  id="next" tabindex="0" aria-label="image suivante"></em>
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
        <div class="lightboxContainer">
        <div class="angleContainer">
            <em class="fas fa-angle-left prev" id="previous" tabindex="0" aria-label="image précédente"></em>
        </div>
        <div class="lightboxMediaContainer">
            <div class="viewContainer"><video class="media movie" src="assets/photographers/${element.photographerId}/${element.video}" id="${element.photographerId}" poster="" alt="${element.title}" aria-label="${element.title}" tabindex="0" controls=""></video></div>
            <div class="legendContainer">
                <h1 class="legend" tabindex="0">${element.title}</h1>
            </div>
        </div>
        <div class="angleContainer">
            <em class="fas fa-angle-right next"  id="next" tabindex="0" aria-label="image suivante"></em>
        </div>
    </div>
    <div class="crossCloseLightbox" id="close-wind" tabindex="0" aria-label="fermeture de la lightbox">
        <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
        <path class="svgCross" d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#901C1C"></path>
      </svg>
    </div>         
       `;
    }
    playLightbox();
    close("close-wind");
    showMod.style.display = "block";
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

}