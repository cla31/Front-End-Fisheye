// Fetch classique
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
        let response = await data.json()
            // console.log("La réponse", response);
        return response;
    } catch (erreur) {
        console.log(erreur);
    }
}
// printData().then(response => console.log(response));
//Ou
printData().then(function(response) {
    console.log(response);
});

//ça ça fonctionne aussi:
// async function getData() {
//     let response = await fetch("./data/photographers.json");
//     let data = await response.json()
//     return data;
// }