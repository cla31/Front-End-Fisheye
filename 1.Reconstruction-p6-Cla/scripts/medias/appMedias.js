//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
console.log("query string", queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log("Mon id", id_number);

var objectsMedias = [];

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Pour l'affichage du header
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function displayPageheader(id, datas) {
    try {
        photograph = new Photographer(datas);
        console.log("Les photographes", photograph)
        document.getElementById(id).innerHTML = ` ${photograph.templateHeaderPhotographers()}`;
    } catch (erreur) {
        console.log(erreur);
    }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Pour l'affichage des médias dans le main
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function filterElements(datas, elements) {
    try {

        if (elements == "image") {
            values = datas.filter(function(img) {
                return img.image;
            });
        } else if (elements == "video") {
            values = datas.filter(function(film) {
                return film.video;
            });
        }
        return values;
    } catch (erreur) {
        console.log(erreur);
    }
}

function templatesObjects() {
    try {
        templates = objectsMedias.map(element => { return element.display() });
        return templates;
    } catch (erreur) {
        console.log(erreur);
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Les likes (fonctions à inclure des le display)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const addition = (previousValue, currentValue) => previousValue + currentValue;

function allLikesJson() {
    let allLikesJson = [];
    for (let i in objectsMedias) {
        // console.log("valeur des likes du json " + objectsMedias[i].likes);
        allLikesJson.push(objectsMedias[i].likes);
    }
    // console.log("tableau des likes json ", allLikesJson);
    let totalLikesJson = allLikesJson.reduce(addition);
    // console.log("Total like json", totalLikesJson)
    return totalLikesJson;

}

let allLikes = [];

// timesClicked++;
//              if (timesClicked === 1) {
//                  var elem = document.querySelector('i');
//                  elem.classList.remove('fa-heart-o');
//                  elem.classList.add('fa-heart');
//              }

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Affichage des médias
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



function displayTemplates() {
    try {
        //Le tableau des templates des médias
        const templates = templatesObjects();
        //Affichage du tableau de templates
        document.getElementById("medias").innerHTML = `${templates.join('')}`;
        //Pour gérer les likes*************************
        var elementsI = document.querySelectorAll('i');
        const elements = Array.from(elementsI);
        let timesClicked = 0;
        elements.forEach((link, index) => link.addEventListener('click', e => {
            console.log(objectsMedias[index]);
            timesClicked++;
            console.log("time cliqued", timesClicked);
            // console.log("Valeur du like avant le clic", objectsMedias[index].likes);
            // if (timesClicked === 1) {
            objectsMedias[index].inc();
            displayTemplates();
            // }
            let totalLikesJson = allLikesJson();
            console.log("les likes du json", totalLikesJson);
            // console.log("all likes", allLikes);
            // console.log("Valeur du like après le clic", objectsMedias[index].likes);
            allLikes.push(objectsMedias[index].likes);
            // console.log("all likes", allLikes);
            let totalLikes = allLikes.reduce(addition) + totalLikesJson;
            // console.log("total likes", totalLikes);
            document.getElementById("likes").innerHTML = `${totalLikes}`;
        }));

        //pour gérer la lightbox*************:
        // const linksCards = document.getElementsByClassName("lien-media");
        // //selection de l'attribut video
        // var media = document.querySelector('video');
        // console.log("voir media", media);
        // const cards = Array.from(linksCards);
        // // suppression de l'attribut qui empêche le clic
        // for (let item of cards) {
        //     media.removeAttribute('controls');
        // }
        // const showMod = document.getElementById("modBox");
        // cards.forEach((link, index) => link.addEventListener('click', e => {
        //     e.preventDefault();
        //     console.log("Clic sur la carte!!!");
        //     console.log(index);
        //     console.log("Index", index);
        //     // console.log("Show element for modale", showMod);
        //     // showMod.style.display = "block";
        //     showMod.innerHTML = ` 
        //         <div class="dialog">
        //             <div class="previous-button"></div>
        //                 <div class="container-img">
        //                     <img class="container-photo__photo" src="assets/photographers/${objectsMedias[index].photographerId}/${objectsMedias[index].image}" />
        //                     <div class="description">
        //                     ${objectsMedias[index].title}
        //                     </div>
        //                 </div>
        //             <div class="next-button"></div>
        //             <div class="close"></div>
        //         </div>                
        //         `;
        //     //fermeture de la modale 
        //     const closeWbtn = document.querySelector(".close");
        //     closeWbtn.addEventListener("click", closeWind);

        //     function closeWind() {
        //         showMod.style.display = "none";
        //     }
        // }))
        // cards.forEach((link, index) => link.removeEventListener('click', e => {
        //     e.preventDefault();
        // }))

    } catch (erreur) {
        console.log(erreur);
    }

}

function urlExtension(url) {
    const urlToSplit = url;
    const urlSplitSlash = url.split('/').pop();
    console.log("url", urlSplitSlash);
    const urlSplitPoint = urlSplitSlash.split('.').pop();
    console.log("url", urlSplitPoint);
    return urlSplitPoint;
}

function displayImgLightbox(element, selector) {
    console.log("Le chemin de l'objet", element.path())
    elmt = urlExtension(element.path());
    if (elmt == "jpg") {
        return selector.innerHTML = ` 
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
        return selector.innerHTML = ` 
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

}

function next(selector1, index, selector2) {
    document.getElementById(selector1).addEventListener("click", function() {
        console.log("Next!!!!");
        console.log("Index ds le Next!!!!", index);
        console.log(objectsMedias[index]);
        displayImgLightbox(objectsMedias[index + 1], selector2);

    })

}
// function getFlavorByIndex(originalFlavors, anyIndex){

//     console.log(originalFlavors[anyIndex])

//   } 

function previous(selector, element) {
    document.getElementById(selector).addEventListener("click", function() {
        console.log("Previous!!!!");
        element = element - 1;
    });

}

function close(selector1, selector2) {
    document.getElementById(selector1).addEventListener("click", function() {
        selector2.style.display = "none";
    });

}


function lightbox() {
    const displays = objectsMedias.map(elements => { return elements.display() });
    // console.log("Tableau d'images", displays);
    const linksCards = document.getElementsByClassName("lien-media");
    console.log("Tableau de links", linksCards);
    //selection de l'attribut video
    var media = document.querySelector('video');
    console.log("voir media", media);
    const cards = Array.from(linksCards);
    // suppression de l'attribut qui empêche le clic
    for (let item of cards) {
        media.removeAttribute('controls');
    }
    let showMod = document.getElementById("modBox");
    cards.forEach((link, index) => link.addEventListener('click', e => {
        e.preventDefault();
        console.log("Clic sur la carte!!!");
        console.log(index);
        console.log("Index", index);
        // console.log("Show element for modale", showMod);
        // showMod.style.display = "block";
        // showMod.innerHTML = ` 
        //         <div class="dialog">
        //             <div class="previous-button"></div>
        //                 <div class="container-img">
        //                     <img class="container-photo__photo" src="assets/photographers/${objectsMedias[index].photographerId}/${objectsMedias[index].image}" />
        //                     <div class="description">
        //                     ${objectsMedias[index].title}
        //                     </div>
        //                 </div>
        //             <div class="next-button"></div>
        //             <div class="close"></div>
        //         </div>                
        //         `;
        //Avec POO:
        // lightbox = new DiapoLightbox("modBox", objectsMedias[index].photographerId, objectsMedias[index].image, objectsMedias[index].title)
        // showMod.innerHTML = lightbox.display();
        // console.log("La target", e.currentTarget)
        displayImgLightbox(objectsMedias[index], showMod);
        previous("previous", objectsMedias, objectsMedias[index]);
        next("next", index, showMod);
        close("close-wind", showMod);
        showMod.style.display = "block";
    }))
}


// function lightbox() {
//     // console.log("Les objects medias ds la light", objectsMedias)
//     const linksCards = document.getElementsByClassName("lien-media");
//     console.log("Les liens des cartes", linksCards)
//         //selection de l'attribut video
//     var media = document.querySelector('video');
//     console.log("voir media", media);
//     const cards = Array.from(linksCards);
//     // suppression de l'attribut qui empêche le clic
//     for (let item of cards) {
//         media.removeAttribute('controls');
//     }
//     const showMod = document.getElementById("modBox");
//     cards.forEach((link, index) => link.addEventListener('click', e => {
//         e.preventDefault();
//         console.log("Clic sur la carte!!!");
//         console.log(index);
//         console.log("Index", index);
//     }))
//     console.log("Show element for modale", showMod);
//     // showMod.style.display = "block";
//     showMod.innerHTML = ` 
//     <div class="dialog">
//         <div class="previous-button"></div>
//             <div class="container-img">
//                 <img class="container-photo__photo" src="assets/photographers/${objectsMedias[index].photographerId}/${objectsMedias[index].image}" />
//                 <div class="description">
//                 ${objectsMedias[index].title}
//                 </div>
//             </div>
//         <div class="next-button"></div>
//         <div class="close"></div>
//     </div>                
//      `;
// }

//Pour gérer la lightbox (à mettre ds le display template à la suite des likes)
//pour gérer la lightbox*************:
// const linksCards = document.getElementsByClassName("lien-media");
// //selection de l'attribut video
// var media = document.querySelector('video');
// console.log("voir media", media);
// const cards = Array.from(linksCards);
// // suppression de l'attribut qui empêche le clic
// for (let item of cards) {
//     media.removeAttribute('controls');
// }
// const showMod = document.getElementById("modBox");
// cards.forEach((link, index) => link.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("Clic sur la carte!!!");
//     console.log(index);
//     console.log("Index", index);
//     // console.log("Show element for modale", showMod);
//     // showMod.style.display = "block";
//     showMod.innerHTML = ` 
//     <div class="dialog">
//         <div class="previous-button"></div>
//             <div class="container-img">
//                 <img class="container-photo__photo" src="assets/photographers/${objectsMedias[index].photographerId}/${objectsMedias[index].image}" />
//                 <div class="description">
//                 ${objectsMedias[index].title}
//                 </div>
//             </div>
//         <div class="next-button"></div>
//         <div class="close"></div>
//     </div>                
//      `;
//     //fermeture de la modale 
//     const closeWbtn = document.querySelector(".close");
//     closeWbtn.addEventListener("click", closeWind);

//     function closeWind() {
//         showMod.style.display = "none";
//     }
// }))
// cards.forEach((link, index) => link.removeEventListener('click', e => {
//     e.preventDefault();

// }))




//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Tableau de tri
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Par popularité
function sortByLikes() {
    try {
        const result = objectsMedias.sort((a, b) => {
            if (a.likes > b.likes) {
                return -1;
            } else if (a.likes < b.likes) {
                return 1;
            } else {
                return 0;
            };
        });
        console.log("Result au clic", result);
        return displayTemplates(result);

    } catch (erreur) {
        console.log(erreur);
    }
}
//Par titre   ********************************************
function SortByTitles() {
    try {
        const SortByName = objectsMedias.sort((a, b) =>
            a.title.localeCompare(b.title));
        return displayTemplates(SortByName);
    } catch (erreur) {
        console.log(erreur);
    }
}
//Par date   ********************************************
function SortByDates() {
    try {
        const SortByDates = objectsMedias.sort(function(a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });
        return displayTemplates(SortByDates);

    } catch (erreur) {
        console.log(erreur);
    }
}

//Gestion du tri
function sorting() {
    try {
        const sort = document.getElementById('toSort');
        sort.addEventListener('click', function() {
            console.log("C'est cliqué!");
            var text = sort.options[sort.selectedIndex].text;
            console.log(text);
            switch (text) {
                case 'Popularité':
                    console.log("T'as cliqué sur Popularité!!");
                    sortByLikes();
                    break;
                case 'Date':
                    console.log("T'as cliqué sur Date!!");
                    SortByDates();
                    break;
                case 'Titre':
                    console.log("T'as cliqué sur Titre!!");
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
//Orchestrator
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function orchestrator() {
    try {
        displayTemplates();
        sorting();
        lightbox();
        // likes();
    } catch (erreur) {
        console.log(erreur);
    }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Lightbox
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//1er essai
// function lightbox(objectsMedias) {
//     try {
//         paths = objectsMedias.map(elements => { return elements.path() });
//         //Recup de la classe pour les liens dans le template des objets de médias
//         const elt = document.getElementsByClassName("lien-media");
//         //selection de l'attribut video
//         var media = document.querySelector('video');
//         console.log("voir media", media);
//         const arrayElt = Array.from(elt);
//         // suppression de l'attribut qui empêche le clic
//         for (let item of arrayElt) {
//             media.removeAttribute('controls');
//         }
//         arrayElt.forEach((link, index) => link.addEventListener('click', e => {
//             e.preventDefault();
//             console.log("Clic sur la carte!!!");
//             console.log(index);
//             console.log("Index", index);
//             console.log("Paths", paths);
//             console.log("recherche 1de l'élément séléctionné dans le tableau", paths[index]);
//             var first = paths[index];
//             paths.unshift(paths[index]);
//             paths.sort((x, y) => {
//                 if (x == first) {
//                     return -1;
//                 } else if (y == first) {
//                     return 1;
//                 } else {
//                     return 0;
//                 }
//             });
//             //Suppression du premier élément du tableau.
//             paths.shift();
//             console.log("vue sur paths", paths)
//             var diapo = new Diapo(paths, "modBox");
//             diapo.init();
//             diapo.play();

//         }))

//     } catch (erreur) {
//         console.log(erreur);
//     }
// }

//voir si je fais fonction à part des likes et lightbox si je peux écrire comme ça...
//2ème essai
// function lightbox() {
//     try {
//         //Recup de la classe pour les liens dans le template des objets de médias
//         const links = document.getElementsByClassName("lien-media");
//         //selection de l'attribut video
//         var media = document.querySelector('video');
//         console.log("voir media", media);
//         const elements = Array.from(links);
//         // suppression de l'attribut qui empêche le clic
//         for (let item of elements) {
//             media.removeAttribute('controls');
//         }
//         elements.forEach((link, index) => link.addEventListener('click', e => {
//             e.preventDefault();
//             console.log("Clic sur la carte!!!");
//             console.log(index);
//             console.log("Index", index);

//         }))

//     } catch (erreur) {
//         console.log(erreur);
//     }
// }



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//initialisation de la page
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Essai if ds le map:
// const objectsMedias = medias.map((elements, datas, values) => {
//     if (elements == "image") {
//         values = datas.filter(function(img) {
//             return img.image;
//         });
//     } else if (elements == "video") {
//         values = datas.filter(function(film) {
//             return film.video;
//         });
//     }
//     return values;
// })


const datas_with_id = async() => {
    try {
        const jsonDatas = await getDatas(pathJsonProject, id_number);
        // console.log("jsonDatas", jsonDatas);
        const photogaphers = jsonDatas.photographers.find(element => element.id == id_number);
        const medias = jsonDatas.media.filter(element => element.photographerId == id_number);
        console.log([photogaphers, medias]);
        //Les photographes
        console.log("Les photographes", photogaphers);
        console.log("Les médias", medias);
        displayPageheader("photograph-header", photogaphers);

        //Les médias
        images = filterElements(medias, "image");
        console.log("Images", images);
        videos = filterElements(medias, "video");
        console.log("Vidéos", videos);
        //Les objets images
        objectsImages = images.map(function instance(img) {
            return new ImageMedia(img);
        });
        console.log("Objets image", objectsImages);
        //Les objets vidéos
        objectsVideos = videos.map(function instance(movie) {
            return new VideoMedia(movie);
        });
        console.log("Objets vidéo", objectsVideos);
        //Le tableau d'objets
        objectsMedias = objectsImages.concat(objectsVideos)
        console.log("le tableau des objets medias", objectsMedias);
        //Affichage des médias
        orchestrator();


    } catch (erreur) {
        console.log(erreur);
    }
}

datas_with_id();