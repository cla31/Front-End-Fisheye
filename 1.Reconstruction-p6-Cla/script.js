// chemin du json ds une variable
const path = "./data/photographers.json";

// Fonction pour récupérer les données via le fetch
async function getDatas(pathJson) {
    const fetchJson = await fetch(pathJson);
    const backFetch = await fetchJson.json();
    console.log("réponse de backFetch", backFetch);
    return backFetch;
}
//fonction template
function templatePhotographers(photographersTemplate) {
    return `
    <div class="photographer">
    <a href="photographer.html">
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
    document.getElementById(id).innerHTML = ` ${boxDataJson.map(templatePhotographers).join(' ')}`
}


// Fonction qui récupère les données et les affiche
async function renderDatas(pathJson) {
    const jsonDatas = await getDatas(pathJson);
    // console.log("Réponse de renderDatas", jsonDatas);
    // console.log(jsonDatas.photographers[0].name);
    displayHTML("row", jsonDatas.photographers);
}
renderDatas(path);