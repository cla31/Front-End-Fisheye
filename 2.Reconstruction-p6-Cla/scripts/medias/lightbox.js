//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  LIGHTBOX
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const showMod = document.getElementById("modBox");

function lightbox() {
    const displays = fullMedias.map(elements => { return elements.display() });
    // console.log("Tableau d'images", displays);
    const linksCards = document.getElementsByClassName("lien-media");
    // console.log("Tableau de links", linksCards);
    //selection de l'attribut video
    var media = document.querySelector('video');
    // console.log("voir media", media);
    const cards = Array.from(linksCards);
    // suppression de l'attribut qui empêche le clic
    for (let item of cards) {
        media.removeAttribute('controls');
    }
    // let showMod = document.getElementById("modBox");
    cards.forEach((link, index) => link.addEventListener('click', e => {
        e.preventDefault();
        // console.log("Clic sur la carte!!!");
        // console.log(index);
        // console.log("Index", index);
        // console.log("Index objjjjjj", objectsMedias[index]);
        displayImgLightbox(fullMedias[index], index);
    }))
}

function urlExtension(url) {
    const urlToSplit = url;
    const urlSplitSlash = url.split('/').pop();
    // console.log("url", urlSplitSlash);
    const urlSplitPoint = urlSplitSlash.split('.').pop();
    // console.log("url", urlSplitPoint);
    return urlSplitPoint;
}

function displayImgLightbox(element, index) {
    // console.log("INDEX DS LE DISPLAY", index)
    // console.log("Le chemin de l'objet", element.path())
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
    playLightbox(index);
    close("close-wind");
    showMod.style.display = "block";
}

function close(selector1) {
    document.getElementById(selector1).addEventListener("click", function() {
        showMod.style.display = "none";
    });

}


function playLightbox(index) {
    // displayImgLightbox(objectsMedias[index], selector);
    // displaySlides(index);
    document.getElementById("next").addEventListener("click", function() {
        // displaySlides((objectsMedias[(index += 1)])); // clic sur précédent : on incrémente (image suivante)
        // console.log("Index ds le Next!!!!", index);
        // console.log("objet média avt increm!!!!", objectsMedias[index]);
        index++;
        // console.log("Index après le clic Next!!!!", index);
        // console.log("objet média après increm!!!!", objectsMedias[index]);
        // SI le numéro d'images dans le tableau est supérieur au nombre d'images
        if (index === fullMedias.length) {
            index = 0;

        }
        displayImgLightbox(fullMedias[index], index);

    });
    // Ecoute du "click" sur les Contrôles "média suivant" et ""media précédent"
    document.getElementById("previous").addEventListener("click", function() {
        // displaySlides((objectsMedias[(index + -1)])); // clic sur précédent : on décrémente (image précédente)
        console.log("Index ds le Previous!!!!", index);
        // displayImgLightbox(objectsMedias[(index - 1)], showMod);
        index--;
        console.log("taille du tableau", fullMedias.length)
        if (index === -1) {
            index = fullMedias.length - 1;
        }
        displayImgLightbox(fullMedias[index], index);
    });

}