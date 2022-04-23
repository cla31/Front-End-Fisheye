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


//2ème essai
function lightbox() {
    try {
        //Recup de la classe pour les liens dans le template des objets de médias
        const links = document.getElementsByClassName("lien-media");
        //selection de l'attribut video
        var media = document.querySelector('video');
        console.log("voir media", media);
        const elements = Array.from(links);
        // suppression de l'attribut qui empêche le clic
        for (let item of elements) {
            media.removeAttribute('controls');
        }
        elements.forEach((link, index) => link.addEventListener('click', e => {
            e.preventDefault();
            console.log("Clic sur la carte!!!");
            console.log(index);
            console.log("Index", index);

        }))

    } catch (erreur) {
        console.log(erreur);
    }
}



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