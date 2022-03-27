// Les données de la gallerie pour le photographe sélectionné sont affichés ds le console.log
// Ds le dossier photographers, pour avoir accès dynamiquement au dossier correspondant à un photographe
// j'ai mis id plutôt que nom photographe, expl: 243 au lieu de mimi

// RAF:
//     - Résoudre le pb d 'affichage de la gallerie dans tout le html. (cf fonction displayGallery) 
//     - Faire un if selon si média = vidéo ou photo

//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log(id_number);

//Fonction qui récupère les données en fonction de l'id pour le header
async function datas_with_id_header(pathJson, getId) {
    try {
        const jsonDatas = await getDatas(pathJson, getId);
        console.log("1 élément ds la fonction", jsonDatas.photographers);
        const select_id = jsonDatas.photographers.find(element => element.id == getId);
        //Récupération des clés/valeurs correspondant à l'id selectionné
        console.log("en selectionnant l'id", select_id);
        console.log("en selectionnant l'id et le name", select_id.name);
        return select_id;
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

//fonction template séparée en plusieurs morceaux comme ds script-photographers
// function templateGalleryHTML(boxDatasMedias) {
//     return `
//             <div class="card-media">
//                 <div class="container-photo">
//                     <img class="container-photo__photo" src="assets/photographers/${boxDatasMedias.photographerId}/${boxDatasMedias.image}" />
//                 </div>
//                 <div class="items-media">
//                     <div class="items-media__title">
//                         <p>${boxDatasMedias.title}</p>
//                     </div>
//                     <div class="items-media__note">
//                         <p>${boxDatasMedias.likes}</p>
//                         <i class="fa-regular fa-heart"></i>
//                     </div>
//                 </div>
//             </div>`
// }
// async function displayGallery(id, boxDatasMedias) {
//     try {
//         document.getElementById(id).innerHTML = `${boxDatasMedias.map(templateGalleryHTML).join(' ')}`
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }
//Fonction qui gère l'affichage du template de la gallerie:
// ******Elle affiche un 404.not found qd elle tombe sur la vidéo
async function displayGallery(id, boxDatasMedias) {
    try {
        // `<h1>${boxDatasMedias.title} </h1>`
        document.getElementById(id).innerHTML =
            `
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
        for (let i of datas_medias_gallery) {
            console.log("Test affichage du titre: " + i.title);
            //*********Alors pourquoi ici il n'affiche pas tous les titres?
            //Il faut peut-être faire un for pour afficher les éléments?
            document.getElementById("medias").innerHTML = `<p>${i.title}</p>`
                //*********Et du coup la fonction displayGallery ne fonctionne pas....?
                // displayGallery("medias", i);
        }
        // displayGallery("medias", datas_medias_gallery)
    } catch (erreur) {
        console.log(erreur);
    }
}
printDataMedias();