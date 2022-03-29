//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDataJson) {
    try {
        console.log("Affichage de box data ds display", boxDataJson);
        photographers = boxDataJson.map(function instance(objetPhotographer) {
            return new Photographer(objetPhotographer.id, objetPhotographer.portrait, objetPhotographer.name, objetPhotographer.city, objetPhotographer.tagline, objetPhotographer.price);
        })

        document.getElementById(id).innerHTML = ` ${photographers.map( photograph =>  {return photograph.template()
        }).join('')}`

        console.log("affichage du premier élément de  test", test[0].template());

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