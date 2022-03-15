// Fetch classique
function askHello() {
    fetch("https://mockbin.com/request?greetings=salut")
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            document
                .getElementById("hello-result")
                .innerText = value.queryString.greetings;
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}

document
    .getElementById("ask-hello")
    .addEventListener("click", askHello);


setTimeout(function() {
    console.log("I'm here!")
}, 5000);
// Fetch classique pour le projet
console.log("Where are you?");

// function testFetch() {
//     fetch("./data/photographers.json")
//         .then(function(response) {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(function(data) {

//             return console.log(data);
//         })
//         .catch(function(err) {
//             // Une erreur est survenue
//             console.log("Pb vec fetch");
//         });
// }

// console.log(testFetch());

// Fetch avec async et await

async function printData() {
    try {
        const data = await fetch("./data/photographers.json");
        // console.log("data", data);
        const response = await data.json()
            // console.log("La réponse", response);
        return response;
    } catch (erreur) {
        console.log(erreur);
    }
}
const resultats = printData();
// printData().then(response => console.log(response));
//Ou
// printData().then(function(response) {
//     console.log("La réponse", response);
// });

//ça ça fonctionne aussi:
// async function getData() {
//     let response = await fetch("./data/photographers.json");
//     let data = await response.json()
//     return data;
// }


//Dans le code ci-dessous, map va créer un array avec chacun 
//des items de response.photographers
//https://www.youtube.com/watch?v=DG4obitDvUA


//Fonctionnement de map:
// const array1 = [1, 4, 9, 16];
// pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);
// expected output: Array [2, 8, 18, 32]


//Pour afficher les données ds le html
printData().then(function(response) {
    console.log("La réponse", response);

    function template(photographersName) {
        return `
            <div class="testDataHtml">
                <p>${photographersName.name}</p>
                <h2>${photographersName.city} <span class="country">(${photographersName.country})</span></h2>
            </div>
            `
    }
    document.getElementById("app").innerHTML = `
        <p>Ici je ne récupère qu'un élément:</p>
        ${response.photographers[0].name};
        <h1 class="app-title">Photogaphers(${response.photographers.length} results)</h1>   
        Photographers will go here:       
        ${response.photographers.map(template).join(' ')}
        <p class="footer">These ${response.photographers.length} photographers were added recently. Check back soon for updates.</p>
        `;
});

// Autre test fetch:
//https://www.youtube.com/watch?v=uxf0--uiX0I vers 10mn 20

const path = "./data/photographers.json";
async function getDatas() {
    const fetchJson = await fetch(path);
    const backFetch = await fetchJson.json();
    return backFetch;
    // console.log("réponse de backFetch", backFetch);
    // console.log("réponse de backFetch 1", backFetch.photographers[0].name);
    // console.log("réponse de backFetch 2", backFetch.media[0].title);
    const { name, city } = backFetch.photographers[0];
    document.getElementById('nom').textContent = name;
    document.getElementById('ville').textContent = city;
    // console.log("réponse de backFetch 3", name);
    // console.log("réponse de backFetch 3", city);
}
getDatas();