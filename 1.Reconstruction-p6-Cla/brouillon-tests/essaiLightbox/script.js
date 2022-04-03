class Lightbox {
    static init() {
        //Il faut selectionner tous les liens qui mènent vers les jpeg.
        // const links = document.querySelectorAll('a[href$=.jpg]')
        const links = document.querySelectorAll('a[href$=".jpg"]')
            .forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'))
            }))
        console.log("Links", links);
    }
    constructor(url) {
        //je v construire la structure html de la lightbox
        const element = this.buildDOM(url);
        document.body.appendChild(element);
    }

    //fonction pour charger une image
    loadImage(url) {
            //On crée une nouvelle image
            const image = new Image();
            //lorsque l'image sera bien chargée, tu lanceras une fonction... 27mn48
            image.onload = function() {

            }
            image.src = url;

        }
        // Cette meth prend en paramètre même url que constructeur et renverra
        // un  élément html.
    buildDOM(url) {
        //Création de la div qui aura la classe lightbox
        const dom = document.createElement('div');
        //On lui rajoute la classe
        dom.classList.add('lightbox');
        //Maintenant que j'ai cet élément je v modifier son innerHTML:
        dom.innerHTML = `<div class="lightbox">
                            <button class="lightbox__close">Fermer</button>
                            <button class="lightbox__next">Suivant</button>
                            <button class="lightbox__prev">Précédent</button>
                            <div class="lightbox__container">
                                <div class="lightbox__loader"></div>
                            </div>
                        </div>         
                        `
            //Lorsque le traitement est finit je peux retourner le dom:
        return dom
    }
}

Lightbox.init()


//La modale en html
{
    /* <div class="lightbox">
            <!-- Début structure minimale dont j'ai besoin pour la lightbox -->
            <button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox__container">
                <img src="./img/Architecture_Connected_Curves.jpg" alt="">
            </div>
            <!-- Fin structure minimale dont j'ai besoin pour la lightbox -->
        </div> */
}