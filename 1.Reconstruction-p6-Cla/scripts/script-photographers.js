// chemin du json ds une variable
const pathJsonProject = "./data/photographers.json";

//fonction template
//????????????????????????????
//Pourquoi pas besoin d'écrire cette ligne de code ci-dessous pour
// que la fonction templatePhotographers comprenne qu'elle prend en paramètre
// un tableau ?
// const photographersTemplate = [];

function templatePhotographers(photographersTemplate) {
    return `
    <div class="photographer">
    <a href="./photographer.html?${photographersTemplate.id}">
        <div class="card">
            <div class="container-img">
                <img class="container-img__img" src="assets/photographers/Photographers ID Photos/${photographersTemplate.portrait}" />
            </div>
            <h2 class="card__photographer-name">${photographersTemplate.name}</h2>
        </div>
    </a>
    <p>${photographersTemplate.city}</p>
    <p>${photographersTemplate.tagline}</p>
    <p>${photographersTemplate.price}</p>
</div>`
}
//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDataJson) {
    try {
        document.getElementById(id).innerHTML = ` ${boxDataJson.map(templatePhotographers).join(' ')}`
    } catch (erreur) {
        console.log(erreur);
    }
}

// Fonction qui récupère les données et les affiche
async function orchestratorDatas(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        // console.log(jsonDatas.photographers[0].name);
        displayHTML("row", jsonDatas.photographers);
    } catch (erreur) {
        console.log(erreur);
    }
}
orchestratorDatas(pathJsonProject);