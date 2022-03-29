//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDataJson) {
    try {
        console.log("Affichage de box data ds display", boxDataJson);
        photographers = boxDataJson.map(function instance(objectPhotographer) {
            return new Photographer(objectPhotographer.id, objectPhotographer.portrait, objectPhotographer.name, objectPhotographer.city, objectPhotographer.tagline, objectPhotographer.price);
        })

        document.getElementById(id).innerHTML = ` ${photographers.map( photograph =>  {return photograph.template()
        }).join('')}`

    } catch (erreur) {
        console.log(erreur);
    }
}


async function orchestratorDatas(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        displayHTML("photographers", jsonDatas.photographers);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestratorDatas(pathJsonProject);