class Photographer {
    constructor(id, portrait, name, city, tagline, price) {
        this.id = id;
        this.portrait = portrait;
        this.name = name;
        this.city = city;
        this.tagline = tagline;
        this.price = price;
        // this.arrayJson = [this.id, this.portrait, this.name, this.city, this.tagline, this.price]

    }

    template() {
        return `
        <div class="photographer">
        <a href="./photographer.html?${this.id}">
            <div class="card">
                <div class="container-img">
                    <img class="container-img__img" src="assets/photographers/Photographers ID Photos/${this.portrait}" />
                </div>
                <h2 class="card__photographer-name">${this.name}</h2>
            </div>
        </a>
        <p>${this.city}</p>
        <p>${this.tagline}</p>
        <p>${this.price}</p>
    </div>`
    }
}


//Fonction qui gère l'affichage du template
async function displayHTML(id, boxDataJson) {
    try {
        console.log("Affichage de box data ds display", boxDataJson);
        // test = boxDataJson.map(x => new Photographer(x.id, x.portrait, x.name, x.city, x.tagline, x.price));
        // même fonction mais écrite sans raccourcit...
        test = boxDataJson.map(function instance(objetPhotographer) {
                return new Photographer(objetPhotographer.id, objetPhotographer.portrait, objetPhotographer.name, objetPhotographer.city, objetPhotographer.tagline, objetPhotographer.price);
            })
            //affichage mais une ligne sur 2
            // document.getElementById(id).innerHTML = ` ${boxDataJson.map(function instance(objetPhotographer) {
            //     return new Photographer(objetPhotographer.id, objetPhotographer.portrait, objetPhotographer.name, objetPhotographer.city, objetPhotographer.tagline, objetPhotographer.price).template()
            // })}`

        document.getElementById(id).innerHTML = ` ${boxDataJson.map(function instance(objetPhotographer) {
            return new Photographer(objetPhotographer.id, objetPhotographer.portrait, objetPhotographer.name, objetPhotographer.city, objetPhotographer.tagline, objetPhotographer.price).template()
        }).join(' ')}`

        console.log("affichage de test", test);
        console.log("affichage du premier élément de  test", test[0].template());
        // return new Photographer(objetPhotographer.id, objetPhotographer.portrait, objetPhotographer.name, objetPhotographer.city, objetPhotographer.tagline, objetPhotographer.price)`

    } catch (erreur) {
        console.log(erreur);
    }
}
//Fonction qui gère l'affichage du template
//Cela fonctionne aussi comme ça, avec la boucle for et le join(' ') au tableau ligne 72:
// async function displayHTML(id, boxDataJson) {
//     try {
//         console.log("Affichage de box data ds display", boxDataJson);
//         photographer = [];
//         photographersTemplate = [];
//         for (let i = 0; i < boxDataJson.length; i++) {
//             console.log("parcours" + i, boxDataJson[i].name);
//             photographer[i] = new Photographer(boxDataJson[i].id, boxDataJson[i].portrait, boxDataJson[i].name, boxDataJson[i].city, boxDataJson[i].tagline, boxDataJson[i].price);
//             photographersTemplate.push(photographer[i].template());
//             // document.getElementById(id).innerHTML = `${ photographer[i].template()}`;
//         }
//         console.log("tableau des templates", photographersTemplate);
//         document.getElementById(id).innerHTML = ` ${photographersTemplate.join(' ')}`;

//     } catch (erreur) {
//         console.log(erreur);
//     }
// }

// Fonction qui récupère les données et les affiche
async function orchestratorDatas(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        // console.log("JSONDATAS ARRAY?", jsonDatas.photographers);
        displayHTML("photographers", jsonDatas.photographers);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestratorDatas(pathJsonProject);