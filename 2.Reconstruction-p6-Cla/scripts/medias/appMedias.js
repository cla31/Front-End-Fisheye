const queryString_url_id = window.location.search;
// console.log("query string", queryString_url_id);
const id_number = queryString_url_id.slice(1);
// console.log("Mon id", id_number);
let fullMedias = [];



//Initialise la page
const init = async() => {
    try {
        const jsonDatas = await getDatas(pathJsonProject);
        // console.log("jsonDatas", jsonDatas);
        const photogapher = jsonDatas.photographers.find(element => element.id == id_number);
        const medias = jsonDatas.media.filter(element => element.photographerId == id_number);
        // console.log([photogapher, medias]);
        //Affichage du photographe dans le header
        header("photograph-header", photogapher);
        //Les médias
        // console.log("Les médias", medias);
        // const test = medias.map(element => { return console.log("Les éléments", element.image) });
        fullMedias = medias.map((element) => {
            if (element.image) {
                // return console.log("Les éléments", element.image);
                return new MediasFactory(element, "image");

            } else {
                // return console.log("Les éléments", element.video);
                return new MediasFactory(element, "video");
            }
        });
        console.log("Test test test", fullMedias);
        displayMedias();
        sorting();

    } catch (erreur) {
        console.log(erreur);
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Pour l'affichage du header
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function header(id, datas) {
    try {
        photograph = new Photographer(datas);
        // console.log("Les photographes", photograph)
        document.getElementById(id).innerHTML = ` ${photograph.displayHeader()}`;
    } catch (erreur) {
        console.log(erreur);
    }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Pour l'affichage du main
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function displayCards() {
    try {
        templates = fullMedias.map(element => { return element.display() });
        return templates;
    } catch (erreur) {
        console.log(erreur);
    }
}

function allLikesJson() {
    try {
        let compt = 0;
        for (let i in fullMedias) {
            compt = compt + fullMedias[i].likes;
        }
        return compt;
    } catch (erreur) {
        console.log(erreur);
    }
}

function displayMedias() {
    try { // console.log("Test ds display Medias", fullMedias);
        //Le tableau des templates des médias
        const cards = displayCards();
        //Affichage du tableau de templates
        document.getElementById("medias").innerHTML = `${cards.join('')}`;
        //Pour gérer les likes*************************
        var elementsI = document.querySelectorAll('i');
        const elements = Array.from(elementsI);
        let totalLikesJson = allLikesJson();
        lightbox();
        document.getElementById("likes").innerHTML = `${totalLikesJson}`;
        elements.forEach((link, index) => link.addEventListener('click', e => {
            // console.log("full media index", fullMedias[index]);
            fullMedias[index].inc();
            displayMedias();
            // console.log("les likes du json", totalLikesJson);
            // document.getElementById("likes").innerHTML = `${totalLikesJson}`;
        }));
    } catch (erreur) {
        console.log(erreur);
    }

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Tableau de tri
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Par popularité
function sortByLikes() {
    try {
        const result = fullMedias.sort((a, b) => {
            if (a.likes > b.likes) {
                return -1;
            } else if (a.likes < b.likes) {
                return 1;
            } else {
                return 0;
            };
        });
        // console.log("Result au clic", result);
        return displayMedias(result);

    } catch (erreur) {
        console.log(erreur);
    }
}
//Par titre   ********************************************
function SortByTitles() {
    try {
        const SortByName = fullMedias.sort((a, b) =>
            a.title.localeCompare(b.title));
        return displayMedias(SortByName);
    } catch (erreur) {
        console.log(erreur);
    }
}
//Par date   ********************************************
function SortByDates() {
    try {
        const SortByDates = fullMedias.sort(function(a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });
        return displayMedias(SortByDates);

    } catch (erreur) {
        console.log(erreur);
    }
}

//Gestion du tri
function sorting() {
    try {
        const sort = document.getElementById('toSort');
        sort.addEventListener('click', function() {
            // console.log("C'est cliqué!");
            var text = sort.options[sort.selectedIndex].text;
            console.log(text);
            switch (text) {
                case 'Popularité':
                    // console.log("T'as cliqué sur Popularité!!");
                    sortByLikes();
                    break;
                case 'Date':
                    // console.log("T'as cliqué sur Date!!");
                    SortByDates();
                    break;
                case 'Titre':
                    // console.log("T'as cliqué sur Titre!!");
                    SortByTitles();
                    break;
                default:
                    null;
            }
        });

    } catch (erreur) {
        console.log(erreur);
    }

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  LIGHTBOX
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const showMod = document.getElementById("modBox");


function urlExtension(url) {
    const urlToSplit = url;
    const urlSplitSlash = url.split('/').pop();
    // console.log("url", urlSplitSlash);
    const urlSplitPoint = urlSplitSlash.split('.').pop();
    // console.log("url", urlSplitPoint);
    return urlSplitPoint;
}

function displayImgLightbox(element, selector, index) {
    // console.log("INDEX DS LE DISPLAY", index)
    // console.log("Le chemin de l'objet", element.path())
    elmt = urlExtension(element.path());
    if (elmt == "jpg") {
        selector.innerHTML = ` 
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
        selector.innerHTML = ` 
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
    close("close-wind", showMod);
    showMod.style.display = "block";
}

function close(selector1, selector2) {
    document.getElementById(selector1).addEventListener("click", function() {
        selector2.style.display = "none";
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
        displayImgLightbox(fullMedias[index], showMod, index);

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
        displayImgLightbox(fullMedias[index], showMod, index);
    });

}

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
        displayImgLightbox(fullMedias[index], showMod, index);
    }))
}


init();