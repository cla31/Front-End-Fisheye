class Photographer {
    constructor(id, portrait, name, city, tagline, price) {
        this.id = id;
        this.portrait = portrait;
        this.name = name;
        this.city = city;
        this.tagline = tagline;
        this.price = price;
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