// Fonction pour récupérer les données via le fetch
async function getDatas(pathJson) {
    try {
        const fetchJson = await fetch(pathJson);
        const backFetch = await fetchJson.json();
        console.log("réponse de backFetch", backFetch);
        return backFetch;
    } catch (erreur) {
        console.log(erreur);
    }
}