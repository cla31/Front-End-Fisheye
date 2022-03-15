// Autre test fetch:
//https://www.youtube.com/watch?v=uxf0--uiX0I vers 10mn 20

// chemin du json ds une variable
const path = "./data/photographers.json";
const source = "assets/photographers/Photographers ID Photos/MimiKeel.jpg";
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
    console.log("Réponse de renderDatas", jsonDatas);
    console.log(jsonDatas.photographers[0].name);

    // function template(photographersTemplate) {
    //     return `
    //     <div class="photographer">
    //     <a href="photographer.html">
    //         <div class="card">
    //             <div class="container-img">
    //                 <img class="container-img__img" src="assets/photographers/Photographers ID Photos/${photographersTemplate.portrait}" />
    //             </div>
    //             <h2 class="card__photographer-name">${photographersTemplate.name}</h2>
    //         </div>
    //     </a>
    //     <p>${photographersTemplate.city}</p>
    //     <p>${photographersTemplate.tagline}</p>
    //     <p>${photographersTemplate.price}</p>
    // </div>`

    // }
    // document.getElementById("row").innerHTML = ` ${jsonDatas.photographers.map(template).join(' ')}`
    displayHTML("row", jsonDatas.photographers);


}
renderDatas(path);
// const resultFetch = getDatas(path);
// console.log("resultat du fetch", resultFetch);