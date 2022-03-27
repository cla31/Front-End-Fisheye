//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDataJson) {
    try {
        console.log("Affichage de box data ds display", boxDataJson);
        photographer = [];
        for (let i = 0; i < boxDataJson.length; i++) {
            console.log("parcours" + i, boxDataJson[i].name);
            console.log("Les i", i);
            photographer[i] = new Photographer(boxDataJson[i].id, boxDataJson[i].portrait, boxDataJson[i].name, boxDataJson[i].city, boxDataJson[i].tagline, boxDataJson[i].price);
            document.getElementById(id).innerHTML = `${ photographer[i].template()}`;
        }

    } catch (erreur) {
        console.log(erreur);
    }
}

//Après, je ne vois pas bien comment ne pas faire de for, c'est d'ailleurs pourquoi je me suis pris la tête
//à savoir comment créer ma classe: c'est en pensant au map du displayHTML justement, car je vois pas bien quoi mettre en paramètre ds
//le constructeur pour ensuite passer ds le map, comme ça, tout est indefined...

//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDataJson) {
    try {
        console.log("Affichage de box data ds display", boxDataJson);
        photographer = new Photographer(boxDataJson.id, boxDataJson.portrait, boxDataJson.name, boxDataJson.city, boxDataJson.tagline, boxDataJson.price);
        document.getElementById(id).innerHTML = ` ${boxDataJson.map(photographer.template()).join(' ')}`;

    } catch (erreur) {
        console.log(erreur);
    }
}