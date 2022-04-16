//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
console.log("query string", queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log("Mon id", id_number);

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

function templatesObjects(objectsElements) {
    try {
        templates = objectsElements.map(element => { return element.display() });
        return templates;
    } catch (erreur) {
        console.log(erreur);
    }
}

//Affichage des médias
function displayTemplates(objectsMedias) {
    try {
        //Le tableau des templates des médias
        const templates = templatesObjects(objectsMedias);
        //Affichage du tableau de templates
        document.getElementById("medias").innerHTML = `${templates.join('')}`;

    } catch (erreur) {
        console.log(erreur);
    }

}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Tableau de tri
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Par popularité
function sortByLikes(objectsMedias) {
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
function SortByTitles(objectsMedias) {
    try {
        const SortByName = objectsMedias.sort((a, b) =>
            a.title.localeCompare(b.title));
        return displayTemplates(SortByName);
    } catch (erreur) {
        console.log(erreur);
    }
}
//Par date   ********************************************
function SortByDates(objectsMedias) {
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
function sorting(objectsMedias) {
    try {
        const sort = document.getElementById('toSort');
        sort.addEventListener('click', function() {
            console.log("C'est cliqué!");
            var text = sort.options[sort.selectedIndex].text;
            console.log(text);
            switch (text) {
                case 'Popularité':
                    console.log("T'as cliqué sur Popularité!!");
                    sortByLikes(objectsMedias);
                    break;
                case 'Date':
                    console.log("T'as cliqué sur Date!!");
                    SortByDates(objectsMedias);
                    break;
                case 'Titre':
                    console.log("T'as cliqué sur Titre!!");
                    SortByTitles(objectsMedias);
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
function orchestrator(objectsMedias) {
    try {
        displayTemplates(objectsMedias);
        sorting(objectsMedias);
        lightbox(objectsMedias);

    } catch (erreur) {
        console.log(erreur);
    }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Lightbox
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function lightbox(objectsMedias) {
    try {
        paths = objectsMedias.map(elements => { return elements.path() });
        //Recup de la classe pour les liens dans le template des objets de médias
        const elt = document.getElementsByClassName("lien-media");
        //selection de l'attribut video
        var media = document.querySelector('video');
        console.log("voir media", media);
        const arrayElt = Array.from(elt);
        // suppression de l'attribut qui empêche le clic
        for (let item of arrayElt) {
            media.removeAttribute('controls');
        }
        arrayElt.forEach((link, index) => link.addEventListener('click', e => {
            e.preventDefault();
            console.log("Clic sur la carte!!!");
            console.log(index);
            console.log("Index", index);
            console.log("Paths", paths);
            console.log("recherche 1de l'élément séléctionné dans le tableau", paths[index]);
            // const newPaths =
            //     function() {
            //         if (paths[index] in paths) paths.remove(paths.indexOf(paths[index]));
            //         paths.unshift(paths[index])
            //         return paths;
            //     }
            //Autre façon de récupérer l'index en premier ds le diapo (mais ne fonctionne pas super...)
            var first = paths[index];
            paths.unshift(paths[index]);
            paths.sort((x, y) => {
                if (x == first) {
                    return -1;
                } else if (y == first) {
                    return 1;
                } else {
                    return 0;
                }
            });
            paths.shift();
            // console.log("Paths après le tri", paths);
            //1ère version de la lightbox training dev
            // var diapo = new Diaporama(paths, ".lightbox");
            // diapo.init();
            // diapo.play();
            //2ème version de la lightbox training dev
            console.log("vue sur paths", paths)
            var diapo = new Diapo(paths, "modBox");
            diapo.init();
            diapo.play();

        }))

    } catch (erreur) {
        console.log(erreur);
    }
}
// var data= ["email","role","type","name"];
// if ("role" in data) data.remove(data.indexOf("role")); data.unshift("role")
// data;

// var data = ["email", "role", "type", "name"];
// var first = "role";
// data.sort(function(x, y) { return x == first ? -1 : y == first ? 1 : 0; });

// data.sort((x, y) => {
//     if (x == first) {
//         return -1;
//     } else if (y == first) {
//         return 1;
//     } else {
//         return 0;
//     }
// });


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//initialisation de la page
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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
        orchestrator(objectsMedias);

    } catch (erreur) {
        console.log(erreur);
    }
}

datas_with_id();