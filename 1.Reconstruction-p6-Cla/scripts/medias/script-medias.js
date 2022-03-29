//affichage de la page photographe.html en procédural
//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log(id_number);

async function datas_with_id(pathJson, getId) {
    try {
        const jsonDatas = await getDatas(pathJson, getId);
        console.log(jsonDatas);
        const select_id_photogaphers = jsonDatas.photographers.find(element => element.id == getId);
        console.log("select_id_photographers", select_id_photogaphers)
        const select_id_medias = jsonDatas.media.filter(element => element.photographerId == getId);
        console.log("medias", medias)
        return [select_id_photogaphers, select_id_medias];
    } catch (erreur) {
        console.log(erreur);
    }
}

//Fonction qui gère l'affichage du template du header
async function displayHeader(id, boxDatasHeader) {
    try {
        document.getElementById(id).innerHTML = `
        
        <div class="photograph-header__title">
                <h1>${boxDatasHeader.name}</h1>
                <p>${boxDatasHeader.city}, ${boxDatasHeader.country}</p>
                <p>${boxDatasHeader.tagline}</p>
            </div>
            <div class="photograph-header__button">
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div class="photograph-header__container-img">
                <img class="photograph-header__container-img__img" src="assets/photographers/Photographers ID Photos/${boxDatasHeader.portrait}" />
            </div>`
    } catch (erreur) {
        console.log(erreur);
    }
}

//Fonction qui gère l'affichage du template de la gallerie:
function displayGallery(boxDatasMedias) {
    try {
        if (boxDatasMedias.image) {
            return `
            <div class="card-media">
                <div class="container-photo">
                    <img class="container-photo__photo" src="assets/photographers/${boxDatasMedias.photographerId}/${boxDatasMedias.image}" />
                </div>
                <div class="items-media">
                    <div class="items-media__title">
                        <p>${boxDatasMedias.title}</p>
                    </div>
                    <div class="items-media__note">
                        <p>${boxDatasMedias.likes}</p>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>`
        } else {
            return `
            <div class="card-media">
                <div class="container-video">
                    <video class="container-video__video" controls>
                    <source  type=video/ogg> <source src="assets/photographers/${boxDatasMedias.photographerId}/${boxDatasMedias.video}" type=video/mp4>
                </div>
                <div class="items-media">
                    <div class="items-media__title">
                        <p>${boxDatasMedias.title}</p>
                    </div>
                    <div class="items-media__note">
                        <p>${boxDatasMedias.likes}</p>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>`

        }

    } catch (erreur) {
        console.log(erreur);
    }
}




async function displayHTMLmedias(id, boxDatas) {
    try {
        document.getElementById(id).innerHTML = ` ${boxDatas.map(displayGallery).join(' ')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

const printDataMedias = async() => {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        console.log("Affichage test", datas_medias[0]);
        displayHeader("photograph-header", datas_medias[0]);
        displayHTMLmedias("medias", datas_medias[1]);


    } catch (erreur) {
        console.log(erreur);
    }
}

printDataMedias();