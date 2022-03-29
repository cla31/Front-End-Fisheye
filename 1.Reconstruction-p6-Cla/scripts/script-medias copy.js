//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log(id_number);

//non, pas placé au bon endroit:
// function choiceElementArray(elements) {
//     if (elements == elements.photographers) {
//         // console.log(elements.photographers)
//         const select_id = elements.photographers.find(element => element.id == getId);
//     } else {
//         const select_id = elements.media.filter(element => element.photographerId == getId);
//     }
//     return select_id;
// }


//Fonction qui récupère les données en fonction de l'id pour le header
async function datas_with_id_header(pathJson, getId) {
    try {
        const jsonDatas = await getDatas(pathJson, getId);
        //test pour DRY
        // getPhotographers = jsonDatas.photographers;
        // console.log("1 élément ds la fonction", getPhotographers);
        // select_id = choiceElementArray(getPhotographers);
        //code qui fonctionne:
        // console.log("1 élément ds la fonction", jsonDatas.photographers);
        // const select_id = jsonDatas.photographers.find(element => element.id == getId);
        // //Récupération des clés/valeurs correspondant à l'id selectionné
        // console.log("en selectionnant l'id", select_id);
        // console.log("en selectionnant l'id et le name", select_id.name);
        // return select_id;
        //Test avec if:
        if (jsonDatas.photographers) {
            const select_id = jsonDatas.photographers.find(element => element.id == getId);
            return select_id;

        } else if (jsonDatas.media) {
            const select_id = jsonDatas.media.filter(element => element.photographerId == getId);
            return select_id;
        } else {
            console.log("No!")
        }
    } catch (erreur) {

        console.log(erreur);
    }
}
//Fonction qui récupère les données en fonction de l'id pour la gallerie
async function datas_with_id_media(pathJson, getId) {
    try {
        const jsonDatas = await getDatas(pathJson, getId);
        console.log("1 élément ds la fonction", jsonDatas.media);
        const select_id = jsonDatas.media.filter(element => element.photographerId == getId);
        console.log("select_id", select_id);
        //Récupération d'un élément
        console.log("en selectionnant l'id", select_id[3].title);
        // console.log("en selectionnant l'id et le name", select_id.title);
        return select_id;
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
        // `<h1>${boxDatasMedias.title} </h1>`
        // document.getElementById(id).innerHTML =
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
                <video width="290" height="290" controls>
                <source type=video/ogg> <source src="assets/photographers/${boxDatasMedias.photographerId}/${boxDatasMedias.video}" type=video/mp4>
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
//Fonction qui gère l'affichage du template
async function displayHTMLmedias(id, boxDatas) {
    try {
        document.getElementById(id).innerHTML = ` ${boxDatas.map(displayGallery).join(' ')}`
    } catch (erreur) {
        console.log(erreur);
    }
}
// Accès aux données grâce à l'ID
const printDataMedias = async() => {
    try {
        const datas_medias = await datas_with_id_header(pathJsonProject, id_number);
        console.log("Affichage test", datas_medias.name);
        // document.getElementById("photograph-header").innerHTML = `<h1>${datas_medias.name}</h1>`
        displayHeader("photograph-header", datas_medias);
        const datas_medias_gallery = await datas_with_id_media(pathJsonProject, id_number);
        console.log("Affichage datas media gallery", datas_medias_gallery);
        displayHTMLmedias("medias", datas_medias_gallery);
    } catch (erreur) {
        console.log(erreur);
    }
}
printDataMedias();