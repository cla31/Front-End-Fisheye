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



// Fonction qui récupère les données et les affiche
async function renderDatas(pathJson) {
    const jsonDatas = await getDatas(pathJson);
    console.log("Réponse de renderDatas", jsonDatas);
    console.log(jsonDatas.photographers[0].name);
    document.getElementById("row").innerHTML = `
    <div class="photographer">
    <a href="photographer.html">
        <div class="card">
            <div class="container-img">
                <img class="container-img__img" src="assets/photographers/Photographers ID Photos/${jsonDatas.photographers[0].portrait}" />
            </div>
            <h2 class="card__photographer-name">${jsonDatas.photographers[0].name}</h2>
        </div>
    </a>
    <p>${jsonDatas.photographers[0].city}</p>
    <p>${jsonDatas.photographers[0].tagline}</p>
    <p>${jsonDatas.photographers[0].price}</p>
</div>`

}
renderDatas(path);
// const resultFetch = getDatas(path);
// console.log("resultat du fetch", resultFetch);