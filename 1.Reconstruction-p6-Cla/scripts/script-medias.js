//Récupération de la chaîne de requête dans l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);
const id_number = queryString_url_id.slice(1);
console.log(id_number);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]`
// //https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
// myArray = [{ 'id': '73', 'foo': 'bar' }, { 'id': '45', 'foo': 'bar' }]
// test1 = myArray.find(x => x.id === '45').foo; //renvoie bar parce que c'est la valeur de la clé foo dt id=45
// console.log("test 1", test1);
// test2 = myArray.filter(x => x.id === '45');
// console.log("test 2", test2);

// expected output: 12
// chemin du json ds une variable
const pathJsonProject = "./data/photographers.json";
// getDatas(pathJsonProject);

//fonction template pour le header du fichier photographers.html


//Fonction qui récupère les données en fonction de l'id
async function datas_with_id(pathJson, getId) {
    try {
        const jsonDatas = await getDatas(pathJson, getId);
        console.log("1 élément ds la fonction", jsonDatas.photographers);
        const select_id = jsonDatas.photographers.filter(element => element.id == getId);
        console.log("en selectionnant l'id", select_id);
        return select_id;
        // console.log("en selectionnant l'id et le name", select_id.name);
        // for (let i in jsonDatas.photographers) {
        //     console.log(jsonDatas.photographers[i]["id"]);
        // }   
    } catch (erreur) {
        console.log(erreur);
    }
}

const datas_medias = datas_with_id(pathJsonProject, id_number);


//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDatasMedia) {
    try {
        document.getElementById(id).innerHTML = `<h1>${boxDatasMedia.name}</h1>`
    } catch (erreur) {
        console.log(erreur);
    }
}

displayHTML("photograph-header", datas_medias);

//fonction template pour médias
// function templateMedias(photographersMedias) {
//     return `
//     <div class="row__photographer">
//                     <div class="card-photo">
//                         <div class="container-photo">
//                             <img class="container-photo__photo" src="assets/photographers/Mimi/Animals_Rainbow.jpg" />
//                         </div>
//                         <div class="items-photo">
//                             <div class="items-photo__title">
//                                 <p>title photo</p>
//                             </div>
//                             <div class="items-photo__note">
//                                 <p>3</p>
//                                 <i class="fa-regular fa-heart"></i>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//     `
// }
// //Fonction qui gère l'affichage du template
// async function displayHTML(id, boxDataJson) {
//     try {
//         document.getElementById(id).innerHTML = ` ${boxDataJson.map(templateMedias).join(' ')}`
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//fonction template pour le header du fichier photographers.html
// function template_photographers_header(photographersHeader) {
//     return `
//     <div class="photograph-header__title">
//                 <h1>${photographersHeader.title}</h1>
//                 <p>London, UK</p>
//                 <p>Voir le beau dans le quotidien</p>
//             </div>
//             <div class="photograph-header__button">
//                 <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
//             </div>
//             <div class="photograph-header__container-img">
//                 <img class="photograph-header__container-img__img" src="assets/photographers/Photographers ID Photos/MimiKeel.jpg" />
//             </div>
//     `
// }

// //Fonction qui gère l'affichage du template pour le header
// async function displayHTML(class_header, boxDataJson) {
//     try {
//         document.getElementsByClassName(class_header).innerHTML = ` 
//         <h1>${boxDataJson.title}</h1>
//         `
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }
// // Fonction qui récupère les données et les affiche
// async function orchestratorDatas(pathJson) {
//     try {
//         const jsonDatas = await getDatas(pathJson);
//         // console.log(jsonDatas.photographers[0].name);
//         displayHTML("photograph-header", jsonDatas.photographers);
//     } catch (erreur) {
//         console.log(erreur);
//     }
// }
// orchestratorDatas(pathJsonProject);