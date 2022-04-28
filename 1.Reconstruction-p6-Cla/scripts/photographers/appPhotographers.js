 function displayPhotographers(id, photographers) {
     try {
         document.getElementById(id).innerHTML = ` ${photographers.map( photograph =>  {return photograph.displayPhotograph()
        }).join('')}`;
     } catch (erreur) {
         console.log(erreur);
     }
 }

 function Objects(elements, Instance) {
     try {
         objectElements = elements.map(function instance(media) {
             return new Instance(media);
         });
         return objectElements;
     } catch (erreur) {
         console.log(erreur);
     }

 }

 async function orchestrator(pathJson) {
     try {
         const jsonDatas = await getDatas(pathJson);
         const dataPhotos = jsonDatas.photographers;
         // console.log("Les datas des photographes: ", dataPhotos);
         const photographers = Objects(dataPhotos, Photographer);
         // console.log("Les objets photographes: ", objectPhotographers);
         displayPhotographers("photographers", photographers);

     } catch (erreur) {
         console.log(erreur);
     }
 }
 orchestrator();