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
        photograph = new Photographer(boxDatas.id, boxDatas.portrait, boxDatas.name, boxDatas.city, boxDatas.tagline, boxDatas.price, boxDatas.country);
        document.getElementById(id).innerHTML = ` ${photograph.templateHeaderPhotographerHTML()}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

async function ObjectImages(boxDatas) {
    var images = boxDatas.filter(function(img) {
        console.log("img.image", img.image)
        return img.image;
    });
    photos = images.map(function instance(objectPhoto) {
        return new ImageMedia(objectPhoto);
    });
    const arrayTemplatePhotos = photos.map(img => { return img.display() });
    return arrayTemplatePhotos;
}

async function ObjectVideos(boxDatas) {
    var videos = boxDatas.filter(function(film) {
        return film.video;
    });
    var films = videos.map(function instance(objectVideo) {
        return new VideoMedia(objectVideo);
    });
    const arrayTemplateVideo = films.map(movie => { return movie.display() });
    return arrayTemplateVideo;
}

async function displayHTMLmedias(id, boxDatas) {
    try {
        arrayGalleryPhotosVideos = [];
        arrayTemplatePhotos = await ObjectImages(boxDatas);
        arrayTemplateVideo = await ObjectVideos(boxDatas);
        arrayGalleryPhotosVideos = arrayTemplatePhotos.concat(arrayTemplateVideo);
        document.getElementById(id).innerHTML = `${arrayGalleryPhotosVideos.join('')}`;
        // Lightbox.init();

    } catch (erreur) {
        console.log(erreur);
    }
}

const printDataMedias = async() => {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        displayHTMLheader("photograph-header", datas_medias[0]);
        displayHTMLmedias("medias", datas_medias[1]);
    } catch (erreur) {
        console.log(erreur);
    }
}
printDataMedias();



//test pour la lightbox si objet fonctionnel:
// var diapo = new Diaporama(["./scripts/medias/img/P1.jpg", "./scripts/medias/img/P2.jpg", "./scripts/medias/img/P3.jpg"], "#diaporama");
// diapo.init();
// diapo.play();