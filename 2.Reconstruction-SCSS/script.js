// Autre test fetch:
//https://www.youtube.com/watch?v=uxf0--uiX0I vers 10mn 20

const path = "./data/photographers.json";
async function getDatas(pathJson) {
    const fetchJson = await fetch(pathJson);
    const backFetch = await fetchJson.json();
    console.log("réponse de backFetch", backFetch);
    return backFetch;
}

// console.log("réponse de backFetch 1", backFetch.photographers[0].name);
// console.log("réponse de backFetch 2", backFetch.media[0].title);
// const { name, city } = backFetch.photographers[0];
// document.getElementById('nom').textContent = name;
// document.getElementById('ville').textContent = city;
// console.log("réponse de backFetch 3", name);
// console.log("réponse de backFetch 3", city);
// }

async function displayHTML(id, variable) {
    document.getElementById(id).innerHTML = `
    <p>Ici je ne récupère qu'un élément:</p>
    ${variable};`
}

async function renderDatas(pathJson) {
    const jsonDatas = await getDatas(pathJson);
    console.log("Réponse de renderDatas", jsonDatas);
    console.log(jsonDatas.photographers[0].name);
    displayHTML("app", jsonDatas.photographers[0].name);
}
renderDatas(path);
// const resultFetch = getDatas(path);
// console.log("resultat du fetch", resultFetch);