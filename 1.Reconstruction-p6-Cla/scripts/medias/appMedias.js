//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
const id_number = queryString_url_id.slice(1);

async function datas_with_id(pathJson, getId) {
    try {
        const jsonDatas = await getDatas(pathJson, getId);
        const select_id_photogaphers = jsonDatas.photographers.find(element => element.id == getId);
        const select_id_medias = jsonDatas.media.filter(element => element.photographerId == getId);
        return [select_id_photogaphers, select_id_medias];
    } catch (erreur) {
        console.log(erreur);
    }
}
//Partie Header
async function displayHTMLheader(id, boxDatas) {
    try {
        photograph = new Photographer(boxDatas);
        document.getElementById(id).innerHTML = ` ${photograph.templateHeaderPhotographerHTML()}`;
    } catch (erreur) {
        console.log(erreur);
    }
}
async function printHeader() {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        const datasPhotographers = datas_medias[0];
        displayHTMLheader("photograph-header", datasPhotographers);
    } catch (erreur) {
        console.log(erreur);
    }
}

//Partie Main
async function filterElements(boxDatas, elements) {
    try {
        if (elements == "image") {
            values = boxDatas.filter(function(img) {
                return img.image;
            });
        } else if (elements == "video") {
            values = boxDatas.filter(function(film) {
                return film.video;
            });
        }
        return values;
    } catch (erreur) {
        console.log(erreur);
    }
}

async function concatArray(myArray1, myArray2) {
    try {
        arrayConcat = myArray1.concat(myArray2);
        return arrayConcat;
    } catch (erreur) {
        console.log(erreur);
    }
}

async function arrayObjectMedias(datasImages, datasVideos) {
    try {
        const objImages = await arrayObject(datasImages, ImageMedia);
        // console.log("images en objet", objImages);
        const objVideos = await arrayObject(datasVideos, VideoMedia);
        // console.log("videos en objet", objVideos);
        arrayElements = await concatArray(objImages, objVideos);
        return arrayElements;
    } catch (erreur) {
        console.log(erreur);
    }
}
async function arrayElementsRaw() {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        const datasImages = await filterElements(datas_medias[1], "image");
        // console.log("images filtrées", datasImages);
        const datasVideos = await filterElements(datas_medias[1], "video");
        // console.log("vidéos filtrées", datasVideos);
        const arrayMedias = await arrayObjectMedias(datasImages, datasVideos);
        // console.log("tableau d'objets médias en brutes", arrayMedias);
        return arrayMedias;
    } catch (erreur) {
        console.log(erreur);
    }
}
async function arrayTemplatesObjects(arrayObjectsElements) {
    try {
        arrayTemplates = arrayObjectsElements.map(element => { return element.display() });
        return arrayTemplates;
    } catch (erreur) {
        console.log(erreur);
    }
}
async function displayHTMLmedias(id, boxTemplates) {
    try {
        document.getElementById(id).innerHTML = `${boxTemplates.join('')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

async function printGallery() {
    try {
        const arrayMedias = await arrayElementsRaw();
        const arrayTemplate = await arrayTemplatesObjects(arrayMedias);
        // console.log("tableau des templates", arrayTemplate);
        displayHTMLmedias("medias", arrayTemplate);

    } catch (erreur) {
        console.log(erreur);
    }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Tableau de tri
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Par popularité
async function sortArrayLikes() {
    const arrayMedias = await arrayElementsRaw();
    // console.log("Array au clic", arrayMedias);
    const result = arrayMedias.sort((a, b) => {
        if (a.likes > b.likes) {
            return -1;
        } else if (a.likes < b.likes) {
            return 1;
        } else {
            return 0;
        };
    });
    console.log("Result au clic", result);
    return result;
}
async function displaySortLikes() {
    const arrayLikes = await sortArrayLikes();
    // console.log("result array", arrayLikes);
    const arrayTemplate = await arrayTemplatesObjects(arrayLikes);
    displayHTMLmedias("medias", arrayTemplate);
}
//Par titre   ********************************************
async function SortArrayTitles() {
    const arrayMedias = await arrayElementsRaw();
    const SortByName = arrayMedias.sort((a, b) =>
        a.title.localeCompare(b.title));
    return SortByName;

}
async function displaySortTitles() {
    const arrayTitles = await SortArrayTitles();
    const arrayTemplate = await arrayTemplatesObjects(arrayTitles);
    displayHTMLmedias("medias", arrayTemplate);
}
//Par date   ********************************************


async function SortArrayDates() {
    const arrayMedias = await arrayElementsRaw();
    const SortByDates = arrayMedias.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
    });
    return SortByDates;
}
async function displaySortDates() {
    const arrayDates = await SortArrayDates();
    console.log("Array of dates", arrayDates);
    const arrayTemplate = await arrayTemplatesObjects(arrayDates);
    displayHTMLmedias("medias", arrayTemplate);
}
//Gestion du tri
async function sorting() {
    const sort = document.getElementById('toSort');
    sort.addEventListener('click', function() {
        console.log("C'est cliqué!");
        var text = sort.options[sort.selectedIndex].text;
        console.log(text);
        switch (text) {
            case 'Popularité':
                // console.log("T'as cliqué sur Popularité!!");
                displaySortLikes();
                break;
            case 'Date':
                // console.log("T'as cliqué sur Date!!");
                displaySortDates();
                break;
            case 'Titre':
                // console.log("T'as cliqué sur Titre!!");
                displaySortTitles();
                break;
            default:
                null;
        }
    });
    // const sortDate = document.getElementsByClassName('date');
    // sortDate.addEventListener('click', function() {
    //     console.log("C'est cliqué!");
    // });
}

// async function sortingDate() {
//     const sortDate = document.getElementsByClassName('date');
//     sortDate.addEventListener('click', function() {
//         console.log("C'est cliqué!");
//     });
// }

const orchestratorPhotographerHTML = async() => {
    try {
        printHeader();
        printGallery();
        sorting();
        // sortingDate();
    } catch (erreur) {
        console.log(erreur);
    }
}



orchestratorPhotographerHTML();

//test pour la lightbox si objet fonctionnel:
// var diapo = new Diaporama(["./scripts/medias/img/P1.jpg", "./scripts/medias/img/P2.jpg", "./scripts/medias/img/P3.jpg"], "#diaporama");
// diapo.init();
// diapo.play();