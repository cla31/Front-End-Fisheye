const queryString_url_id = window.location.search;
// console.log("query string", queryString_url_id);
const id_number = queryString_url_id.slice(1);
// console.log("Mon id", id_number);
let fullMedias = [];



//Initialise la page
const init = async() => {
    try {
        const jsonDatas = await getDatas(pathJsonProject);
        const photogapher = jsonDatas.photographers.find(element => element.id == id_number);
        const medias = jsonDatas.media.filter(element => element.photographerId == id_number);
        //Affichage du photographe dans le header
        header("photograph-header", photogapher);
        //Les médias
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
        sorting();

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
    try {
        let compt = 0;
        for (let i in fullMedias) {
            compt = compt + fullMedias[i].likes;
        }
        return compt;
    } catch (erreur) {
        console.log(erreur);
    }
}

function displayMedias() {
    try {
        //Le tableau des templates des médias
        const cards = displayCards();
        //Affichage du tableau de templates
        document.getElementById("medias").innerHTML = `${cards.join('')}`;
        //Pour gérer les likes*************************
        var elementsI = document.querySelectorAll('i');
        const elements = Array.from(elementsI);
        let totalLikesJson = allLikesJson();
        lightbox();
        document.getElementById("likes").innerHTML = `${totalLikesJson}`;
        elements.forEach((link, index) => link.addEventListener('click', e => {
            // console.log("full media index", fullMedias[index]);
            fullMedias[index].inc();
            displayMedias();
        }));
    } catch (erreur) {
        console.log(erreur);
    }

}


init();