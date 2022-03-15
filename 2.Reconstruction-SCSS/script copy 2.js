// Autre test fetch:
//https://www.youtube.com/watch?v=uxf0--uiX0I vers 10mn 20

// chemin du json ds une variable
const path = "./data/photographers.json";
// Fonction pour récupérer les données via le fetch
async function getDatas(pathJson) {
    const fetchJson = await fetch(pathJson);
    const backFetch = await fetchJson.json();
    console.log("réponse de backFetch", backFetch);
    return backFetch;
}

//Fonction qui gère l'affichage html
async function displayHTML(id, variable) {
    function template(photographersName) {
        return `
            <div class="testDataHtml">
                <p>${photographersName.name}</p>
                <h2>${photographersName.city} <span class="country">(${photographersName.country})</span></h2>
            </div>
            `
    }
    document.getElementById(id).innerHTML = `
    <h1 class="app-title">Photogaphers(${variable.length} results)</h1>   
        Photographers will go here:       
        ${variable.map(template).join(' ')}`

}

// Fonction qui récupère les données et les affiche
async function renderDatas(pathJson) {
    const jsonDatas = await getDatas(pathJson);
    console.log("Réponse de renderDatas", jsonDatas);
    console.log(jsonDatas.photographers[0].name);
    displayHTML("app", jsonDatas.photographers);
}
renderDatas(path);
// const resultFetch = getDatas(path);
// console.log("resultat du fetch", resultFetch);