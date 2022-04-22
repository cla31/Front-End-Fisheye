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

//Affichage des médias
function displayTemplates() {
    try {
        //Le tableau des templates des médias
        const templates = templatesObjects();
        //Affichage du tableau de templates
        document.getElementById("medias").innerHTML = `${templates.join('')}`;
        var elementsI = document.querySelectorAll('i');
        const elements = Array.from(elementsI);
        elements.forEach((link, index) => link.addEventListener('click', e => {
            console.log(objectsMedias[index]);
            objectsMedias[index].inc();
            displayTemplates();
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
        likes();
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
//Les likes
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// if (timesClicked === 1) {}
//1er essai
// function likes(objectsMedias) {
//     try {
//         var elementsI = document.querySelectorAll('i');
//         const elements = Array.from(elementsI);
//         var timesClicked = 1;
//         elements.forEach((link, index) => link.addEventListener('click', e => {
//             // e.preventDefault();
//             console.log("Clic sur le coeur!!!");
//             console.log("link", link);
//             console.log("index", index);
//             // console.log("Index du coeur", index);
//             allLikes = [];
//             var likes = timesClicked++;
//             console.log("nbre likes", likes);
//             allLikes.push(likes);
//             // var verif = link + index;
//             // console.log("verif", verif);
//             link.classList.remove('fa-regular');
//             link.classList.add('fas');
//             // document.getElementById("likes").innerHTML = `${likes}`;
//             console.log("objectsMedias ds like", objectsMedias);
//             for (let i in objectsMedias) {
//                 console.log("boucles des ojets " + objectsMedias[i].likes);
//                 allLikes.push(objectsMedias[i].likes);
//             }
//             console.log("allLikes", allLikes);
//             const addition = (previousValue, currentValue) => previousValue + currentValue;
//             let totalLikes = allLikes.reduce(addition);
//             console.log("total likes", totalLikes);
//             document.getElementById("likes").innerHTML = `${totalLikes}`;
//             likeCard = objectsMedias[index].likes + 1;
//             console.log("object medias avec les likes", likeCard);
//             // console.log("recherche l'élément ds le Dom", document.querySelector(".items-media__note p"));
//             document.getElementsByClassName("noteLike").innerHTML = `${likeCard}   
//             `;
//             //....
//             // objectsMedias[index].likes = likeCard;
//             // console.log("objectsMedias[index].likes", objectsMedias[index].likes);
//             // document.getElementsByClassName("noteLike").innerHTML = `${likeCard}`;

//         }))

//     } catch (erreur) {
//         console.log(erreur);
//     }
// }

//2ème essai
// function likes(objectsMedias) {
//     const displays = objectsMedias.map(elements => { return elements.display() });
//     // console.log("Tableau d'images", displays);
//     for (let i in displays) {
//         // noteLike.dataset.indexnumber = i;
//         console.log("index ", data.indexnumber);
//     }
// }
// noteLike.dataset.indexnumber = index;


//3ème essai
// function likes(objectsMedias) {
//     try {
//         console.log("objets médias dans les likes", objectsMedias)
//         var elementsI = document.querySelectorAll('i');
//         const elements = Array.from(elementsI);
//         elements.forEach((link, index) => link.addEventListener('click', e => {
//             // console.log("elements", elements);
//             // console.log("Clic sur le coeur!!!");
//             // console.log("link", link);
//             // console.log("index", index);
//             // console.log("Le like de la carte", objectsMedias[index].likes);
//             // const likeCard = objectsMedias[index].likes;
//             // console.log("Index du coeur", index);
//             var indexClic = document.getElementById("noteLike");
//             console.log("test", indexClic);
//             indexClic.dataset.indexnumber = index;
//             console.log("index du html 1", indexClic.dataset.indexnumber);
//             for (let i in elements) {
//                 // console.log("Les i ", i);
//                 if (i === indexClic.dataset.indexnumber) {
//                     console.log("OK ");
//                     objectsMedias[index].likes = objectsMedias[index].likes + 1;
//                     console.log("total like ", objectsMedias[index].likes);
//                     link.classList.remove('fa-regular');
//                     link.classList.add('fas');
//                     console.log("recherche element", document.getElementById("noteLike"));
//                     // document.getElementById("noteLike").innerHTML = `${objectsMedias[index].likes}`;

//                 }
//             }
//         }))

//4ème essai
// function likes(objectsMedias) {
//     try {
//         console.log("objets médias dans les likes", objectsMedias)
//             // const displays = objectsMedias.map(elements => { return elements.display() });
//             // console.log("Tableau d'images", displays);
//         var elementsI = document.querySelectorAll('i');
//         const elements = Array.from(elementsI);
//         elements.forEach((link, index) => link.addEventListener('click', e => {
//             console.log("link", link);
//             // console.log("elements", elements);
//             // console.log("Clic sur le coeur!!!");
//             // console.log("link", link);
//             // console.log("index", index);
//             // console.log("Le like de la carte", objectsMedias[index].likes);
//             // const likeCard = objectsMedias[index].likes;
//             // console.log("Index du coeur", index);
//             // console.log("Le  template de l'index", objectsMedias[index].display());
//             var indexClic = document.getElementById("noteLike");
//             console.log("test", indexClic);
//             indexClic.dataset.indexnumber = index;
//             console.log("index du html 1", indexClic.dataset.indexnumber);
//             // objectsMedias[index].display() = `Hello`;
//             for (let i in elements) {
//                 // console.log("Les i ", i);
//                 if (i === indexClic.dataset.indexnumber) {
//                     console.log("Le i ", i);
//                     console.log("OK ");
//                     objectsMedias[index].likes = objectsMedias[index].likes + 1;
//                     console.log("total like ", objectsMedias[index].likes);
//                     link.classList.remove('fa-regular');
//                     link.classList.add('fas');
//                     console.log("recherche element", document.getElementById("noteLike"));
//                     // console.log("display un élément", displays[index]);
//                     // document.getElementsByClassName("salut").innerHTML = `${objectsMedias[index].likes}`;
//                     console.log("recherche element", document.getElementById("noteLike"));
//                     // document.getElementById("noteLike").innerHTML = `${objectsMedias[index].likes}`;
//                     //ne fonctionne que sur la 1ère carte:
//                     const user = document.querySelector("[data-indexnumber]");
//                     // console.log("user inner", user.innerHTML)
//                     user.innerHTML = `${objectsMedias[index].likes}`;
//                     // displayTemplates(objectsMedias);

//                 }


//             }


//         }))

//     } catch (erreur) {
//         console.log(erreur);
//     }
// }

function inc(element) {
    // var timesClicked = 1;
    var elem = document.querySelector('i');
    console.log("elem????", elem);
    // elem.classList.remove('fa-heart-o');
    // elem.classList.add('fa-heart');
    // return timesClicked++;

    console.log("C'est cliqué!!!");
    console.log("Et voici l'élément", element);

}

//5ème essai:
function likes() {
    try {
        // Display du tableau
        const displays = objectsMedias.map(elements => { return elements.display() });
        var indexClic = document.getElementById("noteLike");
        console.log("test", indexClic);
        // const array = document.querySelectorAll('i');
        // console.log("array", array);

        console.log("index du html", indexClic.dataset.id);
        document.querySelectorAll('i').forEach(displays => displays.addEventListener("click", (e) => {
            inc(e.currentTarget.dataset.id);

        }))

    } catch (erreur) {
        console.log(erreur);
    }
}

// <
// article
// id = "voitureelectrique"
// data - columns = "3"
// data - index - number = "12314"
// data - parent = "voitures" >
//     ... <
//     /article>
// var article = document.getElementById('voitureelectrique');

// article.dataset.columns // "3"
// article.dataset.indexNumber // "12314"
// article.dataset.parent // "voitures"



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