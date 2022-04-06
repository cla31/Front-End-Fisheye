// async function instancePhotographers(boxDataJson) {
//     try {
//         const dataPhotographers = boxDataJson.photographers;
//         photographers = dataPhotographers.map(function instance(objectPhotographer) {
//             return new Photographer(objectPhotographer);
//         });
//         return photographers;

//     } catch (erreur) {
//         console.log(erreur);
//     }
// }
async function arrayObject(elements, Instance) {
    try {
        objectElements = elements.map(function instance(media) {
            return new Instance(media);
        });
        return objectElements;
    } catch (erreur) {
        console.log(erreur);
    }

}

async function displayPhotographers(id, photographers) {
    try {
        document.getElementById(id).innerHTML = ` ${photographers.map( photograph =>  {return photograph.templateIndexHTML()
        }).join('')}`;
    } catch (erreur) {
        console.log(erreur);
    }
}

async function orchestratorIndexHTML(pathJson) {
    try {
        const jsonDatas = await getDatas(pathJson);
        const dataPhotos = jsonDatas.photographers;
        // console.log("Les datas des photographes: ", dataPhotos);
        const objectPhotographers = await arrayObject(dataPhotos, Photographer);
        // console.log("Les objets photographes: ", objectPhotographers);
        displayPhotographers("photographers", objectPhotographers);

    } catch (erreur) {
        console.log(erreur);
    }
}
orchestratorIndexHTML(pathJsonProject);