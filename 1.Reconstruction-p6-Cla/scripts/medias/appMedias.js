//affichage de la page photographe.html en procédural
//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
// console.log(queryString_url_id);
const id_number = queryString_url_id.slice(1);
// console.log(id_number);

async function datas_with_id(pathJson, getId) {
    try {
        const jsonDatas = await getDatas(pathJson, getId);
        // console.log(jsonDatas);
        const select_id_photogaphers = jsonDatas.photographers.find(element => element.id == getId);
        // console.log("select_id_photographers", select_id_photogaphers)
        const select_id_medias = jsonDatas.media.filter(element => element.photographerId == getId);
        // console.log("medias", medias)
        return [select_id_photogaphers, select_id_medias];
    } catch (erreur) {
        console.log(erreur);
    }
}

async function displayHTMLheader(id, boxDatas) {
    try {
        // console.log("Affichage de box data ds display", boxDatas);
        // console.log("Affichage de box data ds display", boxDatas.name);
        photograph = new Photographer(boxDatas.id, boxDatas.portrait, boxDatas.name, boxDatas.city, boxDatas.tagline, boxDatas.price, boxDatas.country);
        document.getElementById(id).innerHTML = ` ${photograph.templateHeaderPhotographerHTML()}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

async function ObjectImages(boxDatas) {
    //********* Les objets image
    var images = boxDatas.filter(function(img) {
        return img.image;
    });
    // console.log("images", images)
    photos = images.map(function instance(objectPhoto) {
        return new Image(objectPhoto.id, objectPhoto.photographerId, objectPhoto.title, objectPhoto.image, objectPhoto.likes, objectPhoto.date, objectPhoto.price);
    });
    // console.log("photos", photos);
    const arrayTemplatePhotos = photos.map(img => { return img.displayImage() });
    return arrayTemplatePhotos;
}

async function displayHTMLmedias(id, boxDatas) {
    try {
        // console.log("displayHTMLmedias", boxDatas[8].video);
        arrayGalleryPhotosVideos = [];
        //********* Les objets image
        // var images = boxDatas.filter(function(img) {
        //     return img.image;
        // });
        // // console.log("images", images)
        // photos = images.map(function instance(objectPhoto) {
        //     return new Image(objectPhoto.id, objectPhoto.photographerId, objectPhoto.title, objectPhoto.image, objectPhoto.likes, objectPhoto.date, objectPhoto.price);
        // });
        // // console.log("photos", photos);
        // const arrayTemplatePhotos = photos.map(img => { return img.displayImage() });
        // // document.getElementById(id).innerHTML = `${arrayTemplatePhotos.join('')}`;
        arrayTemplatePhotos = await ObjectImages(boxDatas);
        console.log("Retour fonction objet photo", arrayTemplatePhotos)
            //********* Les objets video
        var videos = boxDatas.filter(function(film) {
            return film.video;
        });
        // console.log("videos", videos);
        var films = videos.map(function instance(objectVideo) {
            return new Video(objectVideo.id, objectVideo.photographerId, objectVideo.title, objectVideo.video, objectVideo.likes, objectVideo.date, objectVideo.price);
        });
        // console.log("films", films);
        const arrayTemplateVideo = films.map(movie => { return movie.displayVideo() });
        // document.getElementById(id).innerHTML = `${arrayTemplateVideo.join('')}`;

        //Les images et vidéos:
        arrayGalleryPhotosVideos = arrayTemplatePhotos.concat(arrayTemplateVideo);
        // console.log("La gallerie de photos et de vidéo", arrayGalleryPhotosVideos)
        document.getElementById(id).innerHTML = `${arrayGalleryPhotosVideos.join('')}`;


    } catch (erreur) {
        console.log(erreur);
    }
}

const printDataMedias = async() => {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        // console.log("Affichage test", datas_medias[0]);
        displayHTMLheader("photograph-header", datas_medias[0]);
        displayHTMLmedias("medias", datas_medias[1]);

    } catch (erreur) {
        console.log(erreur);
    }
}

printDataMedias();

//test pour la lightbox si objet fonctionnel:
// lightbox = new Lightbox(images, "medias");
// // lightbox.init();
// lightbox.play();
// console.log("lightbox", lightbox);