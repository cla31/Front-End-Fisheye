//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log(id_number);

// chemin du json ds une variable
// const pathJsonProject = "./data/photographers.json";

//Fonction qui récupère les données en fonction de l'id
async function datas_with_id(pathJson, getId) {
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
//Fonction qui gère l'affichage du template
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
// Accès aux données grâce à l'ID
const printDataMedias = async() => {
    try {
        const datas_medias = await datas_with_id(pathJsonProject, id_number);
        console.log("Affichage test", datas_medias.name);
        // document.getElementById("photograph-header").innerHTML = `<h1>${datas_medias.name}</h1>`
        displayHeader("photograph-header", datas_medias);
    } catch (erreur) {
        console.log(erreur);
    }

}
printDataMedias();