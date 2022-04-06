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
}

async function arrayObject(elements, Instance) {
    try {
        objectElements = elements.map(function instance(media) {
            return new Instance(media);
        });
        return objectElements;
    } catch (erreur) {
        console.log(erreur);
    }

}

// async function arrayObjectElements(images, videos) {
//     try {
//         const arrayObjectMedias = [];
//         objectImg = images.map(function instance(img) {
//             return new ImageMedia(img);
//         });
//         objectMovie = videos.map(function instance(mov) {
//             return new VideoMedia(mov);
//         });
//         arrayObjectElements = objectImg.concat(objectMovie);
//         return arrayObjectElements;


//     } catch (erreur) {
//         console.log(erreur);
//     }
// }

// async function objectEl(boxDatas) {
//     const arrayObject = [];
//     var videos = boxDatas.filter(function(film) {
//         return film.video;
//     });
//     var images = boxDatas.filter(function(img) {
//         return img.image;
//     });
//     photos = images.map(function instance(objectPhoto) {
//         return new ImageMedia(objectPhoto);
//     });
//     console.log("videos********", videos);
//     console.log("images********", images);
// }

// async function ObjectImages(boxDatas) {
//     var images = boxDatas.filter(function(img) {
//         console.log("img.image", img.image)
//         return img.image;
//     });
//     photos = images.map(function instance(objectPhoto) {
//         return new ImageMedia(objectPhoto);
//     });
//     const arrayTemplatePhotos = photos.map(img => { return img.display() });
//     return arrayTemplatePhotos;
// }



// async function ObjectVideos(boxDatas) {
//     var videos = boxDatas.filter(function(film) {
//         console.log("film.video", film.video);
//         return film.video;
//     });
//     var films = videos.map(function instance(objectVideo) {
//         return new VideoMedia(objectVideo);
//     });
//     const arrayTemplateVideo = films.map(movie => { return movie.display() });
//     return arrayTemplateVideo;
// }

async function arrayTemplatesObjects(arrayObjectsElements) {
    arrayTemplates = arrayObjectsElements.map(element => { return element.display() });
    return arrayTemplates;
}

async function concatArray(myArray1, myArray2) {
    // const arrayConcat = [];
    arrayConcat = myArray1.concat(myArray2);
    return arrayConcat;
}


async function displayHTMLmedias(id, boxTemplates) {
    try {
        // arrayGalleryPhotosVideos = [];
        // arrayTemplatePhotos = await ObjectImages(boxDatas);
        // arrayTemplateVideo = await ObjectVideos(boxDatas);
        // arrayGalleryPhotosVideos = arrayTemplatePhotos.concat(arrayTemplateVideo);
        document.getElementById(id).innerHTML = `${boxTemplates.join('')}`;
        // Lightbox.init();
    } catch (erreur) {
        console.log(erreur);
    }
}

const printDataMedias = async() => {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        const datasPhotographers = datas_medias[0];
        console.log("datas medias 2ème élément", datas_medias[1]);
        const datasImages = await filterElements(datas_medias[1], "image");
        console.log("images filtrées", datasImages);
        const datasVideos = await filterElements(datas_medias[1], "video");
        console.log("vidéos filtrées", datasVideos);
        const objImages = await arrayObject(datasImages, ImageMedia);
        console.log("images en objet", objImages);
        const objVideos = await arrayObject(datasVideos, VideoMedia);
        console.log("videos en objet", objVideos);
        const templatesImages = await arrayTemplatesObjects(objImages);
        console.log("les templates d'images", templatesImages);
        const templatesVideos = await arrayTemplatesObjects(objVideos);
        console.log("les templates de videos", templatesVideos);
        // const templatesForGallery = [];
        // templatesForGallery = templatesImages.concat(templatesVideos);
        templatesForGallery = await concatArray(templatesImages, templatesVideos);
        console.log("les templates des éléments", templatesForGallery);
        // const arrayMedias = await arrayObjectElements(datasImages, datasVideos);
        // console.log("tableau d'objets", arrayMedias);
        // const elements = await arrayObject(datas_medias[1]);
        // console.log("elements", elements);
        // const elements = await objectEl(datas_medias[1]);
        displayHTMLheader("photograph-header", datasPhotographers);
        displayHTMLmedias("medias", templatesForGallery);
    } catch (erreur) {
        console.log(erreur);
    }
}
printDataMedias();

//test pour la lightbox si objet fonctionnel:
// var diapo = new Diaporama(["./scripts/medias/img/P1.jpg", "./scripts/medias/img/P2.jpg", "./scripts/medias/img/P3.jpg"], "#diaporama");
// diapo.init();
// diapo.play();