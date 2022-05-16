//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Tableau de tri
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Définition des constantes
const filterDate = document.getElementById("filter_date");
const filterTitre = document.getElementById("filter_titre");
const iconChevron = document.querySelector(".fa-chevron-down");
const iconChevronUp = document.querySelector(".fa-chevron-up");

// Fonction pour afficher tous les filtres
function displayFilters() {
    filterDate.style.display = "block";
    filterTitre.style.display = "block";
    iconChevron.style.display = "none";
    iconChevronUp.style.display = "block";
}

// Fonction qui va refermer les filtres
function hideFilters() {
    filterDate.style.display = "none";
    filterTitre.style.display = "none";
    iconChevron.style.display = "block";
    iconChevronUp.style.display = "none";
}

// Ecoute de l'évènement click pour développer et fermer les filtres
iconChevron.addEventListener("click", displayFilters);
iconChevronUp.addEventListener("click", hideFilters);
// Ecoute de l'évènement clavier pour développer et fermer les filtres
iconChevron.addEventListener("clic", (e) => {
    displayFilters(e);
});

iconChevronUp.addEventListener("clic", (e) => {
    hideFilters(e);
});
// Ecoute de l'évènement clavier pour développer et fermer les filtres
iconChevron.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        displayFilters(e);
    }
});
iconChevronUp.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        hideFilters(e);
    }
});
// Par popularité
function sortByLikes() {
    try {
        const result = fullMedias.sort((a, b) => {
            if (a.likes > b.likes) {
                return -1;
            } else if (a.likes < b.likes) {
                return 1;
            } else {
                return 0;
            };
        });
        // console.log("Result au clic", result);
        return displayMedias(result);

    } catch (erreur) {
        console.log(erreur);
    }
}
//Par titre   ********************************************
function SortByTitles() {
    try {
        const SortByName = fullMedias.sort((a, b) =>
            a.title.localeCompare(b.title));
        return displayMedias(SortByName);
    } catch (erreur) {
        console.log(erreur);
    }
}
//Par date   ********************************************
function SortByDates() {
    try {
        const SortByDates = fullMedias.sort(function(a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
        });
        return displayMedias(SortByDates);

    } catch (erreur) {
        console.log(erreur);
    }
}

//Gestion du tri
function sorting() {
    try {
        const sort = document.getElementById('filter_elements');
        sort.addEventListener('click', e => {
            var text = e.target.id;
            switch (text) {
                case 'filter_pop':
                    // console.log("T'as cliqué sur Popularité!!");
                    sortByLikes();
                    break;
                case 'filter_date':
                    // console.log("T'as cliqué sur Date!!");
                    SortByDates();
                    break;
                case 'filter_titre':
                    // console.log("T'as cliqué sur Titre!!");
                    SortByTitles();
                    break;
                default:
                    null;
            }
        });


    } catch (erreur) {
        console.log(erreur);
    }

}