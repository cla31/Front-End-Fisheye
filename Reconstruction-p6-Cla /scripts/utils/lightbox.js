//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  LIGHTBOX
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const showMod = document.getElementById("modBox");
let index = 0;

function lightbox() {
    // const displays = fullMedias.map(elements => { return elements.display() });
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
        <div class="dialog">
            <div class="previous-button" id="previous"></div>
                <div class="container-media">
                    <img class="container-photo__photo" src="assets/photographers/${element.photographerId}/${element.image}" />
                    <div class="description">
                    ${element.title}
                  </div>
               </div>
            <div class="next-button" id="next"></div>
            <div class="close" id="close-wind"></div>
       </div>                
       `;
    } else {
        showMod.innerHTML = ` 
        <div class="dialog">
            <div class="previous-button" id="previous"></div>
                <div class="container-media">
                    <video controls width="250"><source src="assets/photographers/${element.photographerId}/${element.video}"type="video/mp4">Sorry, your browser doesn't support embedded videos.</video>
                    <div class="description">
                    ${element.title}
                  </div>
               </div>
            <div class="next-button" id="next"></div>
            <div class="close" id="close-wind"></div>
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
        console.log("taille du tableau", fullMedias.length)
        if (index === -1) {
            index = fullMedias.length - 1;
        }
        displayImgLightbox(fullMedias[index]);
    });

}