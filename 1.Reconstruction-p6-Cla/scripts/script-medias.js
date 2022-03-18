//Récupération de l'id dans la chaîne de requête de l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log(id_number);

// chemin du json ds une variable
const pathJsonProject = "./data/photographers.json";

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

// Accès aux données grâce à l'ID
const printDataMedias = async() => {
    const datas_medias = await datas_with_id(pathJsonProject, id_number);
    console.log("Affichage test", datas_medias.name);
    document.getElementById("photograph-header").innerHTML = `<h1>${datas_medias.name}</h1>`
}
printDataMedias();


//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDatasMedia) {
    try {
        document.getElementById(id).innerHTML = `<h1>${boxDatasMedia.name}</h1>`
    } catch (erreur) {
        console.log(erreur);
    }
}

// //Fonction qui récupère les données de l'id et les affiche
// async function orchDatasMedia(pathJson, id) {
//     const datas_medias = datas_with_id(pathJson, id);
//     displayHTML("photograph-header", datas_medias);
// }
// orchDatasMedia(pathJsonProject, id_number);