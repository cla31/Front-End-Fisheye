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

async function displayHTMLheader(id, boxDatas) {
    try {
        photograph = new Photographer(boxDatas);
        document.getElementById(id).innerHTML = ` ${photograph.templateHeaderPhotographerHTML()}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

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


async function arrayTemplatesObjects(arrayObjectsElements) {
    try {
        arrayTemplates = arrayObjectsElements.map(element => { return element.display() });
        return arrayTemplates;
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


async function displayHTMLmedias(id, boxTemplates) {
    try {
        document.getElementById(id).innerHTML = `${boxTemplates.join('')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

// const printDataMedias = async() => {
//     try {
//         const datas_medias = await datas_with_id(pathJsonProject, id_number);
//         const datasPhotographers = datas_medias[0];
//         // console.log("datas medias 2ème élément", datas_medias[1]);
//         const datasImages = await filterElements(datas_medias[1], "image");
//         // console.log("images filtrées", datasImages);
//         const datasVideos = await filterElements(datas_medias[1], "video");
//         // console.log("vidéos filtrées", datasVideos);
//         const objImages = await arrayObject(datasImages, ImageMedia);
//         // console.log("images en objet", objImages);
//         const objVideos = await arrayObject(datasVideos, VideoMedia);
//         // console.log("videos en objet", objVideos);
//         const templatesImages = await arrayTemplatesObjects(objImages);
//         // console.log("les templates d'images", templatesImages);
//         const templatesVideos = await arrayTemplatesObjects(objVideos);
//         // console.log("les templates de videos", templatesVideos);
//         templatesForGallery = await concatArray(templatesImages, templatesVideos);
//         // console.log("les templates des éléments", templatesForGallery);
//         displayHTMLheader("photograph-header", datasPhotographers);
//         displayHTMLmedias("medias", templatesForGallery);
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }
// printDataMedias();
async function printHeader() {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        const datasPhotographers = datas_medias[0];
        displayHTMLheader("photograph-header", datasPhotographers);

    } catch (erreur) {
        console.log(erreur);
    }
}
async function printGallery() {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        const datasImages = await filterElements(datas_medias[1], "image");
        // console.log("images filtrées", datasImages);
        const datasVideos = await filterElements(datas_medias[1], "video");
        // console.log("vidéos filtrées", datasVideos);
        const objImages = await arrayObject(datasImages, ImageMedia);
        // console.log("images en objet", objImages);
        const objVideos = await arrayObject(datasVideos, VideoMedia);
        // console.log("videos en objet", objVideos);
        const templatesImages = await arrayTemplatesObjects(objImages);
        // console.log("les templates d'images", templatesImages);
        const templatesVideos = await arrayTemplatesObjects(objVideos);
        // console.log("les templates de videos", templatesVideos);
        templatesForGallery = await concatArray(templatesImages, templatesVideos);
        // console.log("les templates des éléments", templatesForGallery);
        displayHTMLmedias("medias", templatesForGallery);

    } catch (erreur) {
        console.log(erreur);
    }
}

const orchestratorPhotographerHTML = async() => {
    try {
        printHeader();
        printGallery();
    } catch (erreur) {
        console.log(erreur);
    }
}

orchestratorPhotographerHTML();

//test pour la lightbox si objet fonctionnel:
// var diapo = new Diaporama(["./scripts/medias/img/P1.jpg", "./scripts/medias/img/P2.jpg", "./scripts/medias/img/P3.jpg"], "#diaporama");
// diapo.init();
// diapo.play();