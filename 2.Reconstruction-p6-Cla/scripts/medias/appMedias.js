const queryString_url_id = window.location.search;
// console.log("query string", queryString_url_id);
const id_number = queryString_url_id.slice(1);
// console.log("Mon id", id_number);
let fullMedias = [];




const datas_with_id = async() => {
    try {
        const jsonDatas = await getDatas(pathJsonProject);
        // console.log("jsonDatas", jsonDatas);
        const photogapher = jsonDatas.photographers.find(element => element.id == id_number);
        const medias = jsonDatas.media.filter(element => element.photographerId == id_number);
        // console.log([photogapher, medias]);
        //Affichage du photographe dans le header
        header("photograph-header", photogapher);
        //Les médias
        // console.log("Les médias", medias);
        // const test = medias.map(element => { return console.log("Les éléments", element.image) });
        fullMedias = medias.map((element) => {
            if (element.image) {
                // return console.log("Les éléments", element.image);
                return new MediasFactory(element, "image");

            } else {
                // return console.log("Les éléments", element.video);
                return new MediasFactory(element, "video");
            }
        });
        console.log("Test test test", fullMedias);
        displayMedias();

    } catch (erreur) {
        console.log(erreur);
    }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Pour l'affichage du header
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function header(id, datas) {
    try {
        photograph = new Photographer(datas);
        // console.log("Les photographes", photograph)
        document.getElementById(id).innerHTML = ` ${photograph.displayHeader()}`;
    } catch (erreur) {
        console.log(erreur);
    }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Pour l'affichage du main
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function displayCards() {
    try {
        templates = fullMedias.map(element => { return element.display() });
        return templates;
    } catch (erreur) {
        console.log(erreur);
    }
}

function allLikesJson() {
    let compt = 0;
    for (let i in fullMedias) {
        compt = compt + fullMedias[i].likes;
    }
    return compt;
}

function displayMedias() {
    try { // console.log("Test ds display Medias", fullMedias);
        //Le tableau des templates des médias
        const cards = displayCards();
        //Affichage du tableau de templates
        document.getElementById("medias").innerHTML = `${cards.join('')}`;
        //Pour gérer les likes*************************
        var elementsI = document.querySelectorAll('i');
        const elements = Array.from(elementsI);
        let totalLikesJson = allLikesJson();
        document.getElementById("likes").innerHTML = `${totalLikesJson}`;
        elements.forEach((link, index) => link.addEventListener('click', e => {
            // console.log("full media index", fullMedias[index]);
            fullMedias[index].inc();
            displayMedias();
            // console.log("les likes du json", totalLikesJson);
            // document.getElementById("likes").innerHTML = `${totalLikesJson}`;
        }));
    } catch (erreur) {
        console.log(erreur);
    }

}
datas_with_id();