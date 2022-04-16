class Lightbox {
    static init() {
        const match = document.querySelectorAll('a[href$=".jpg"],a[href$=".mp4"]')
            .forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'));
            }))
            // console.log("match constructeur", match);

    }
    constructor(url) {
            //je v construire la structure html de la lightbox
            this.element = this.buildDOMimage(url);
            this.loadImage(url);
            document.body.appendChild(this.element);
        }
        // Cette meth prend en paramètre même url que constructeur et renverra
        // un  élément html.

    urlExtension(url) {
            const urlToSplit = url;
            const urlSplitSlash = url.split('/').pop();
            console.log("url", urlSplitSlash);
            const urlSplitPoint = urlSplitSlash.split('.').pop();
            console.log("url", urlSplitPoint);
            return urlSplitPoint;
        }
        //fonction pour charger une image
    loadImage(url) {
        //On crée une nouvelle image
        const image = new Image();
        const container = this.element.querySelector('.lightbox__container');
        //Création du loader
        const loader = document.createElement('div');
        loader.classList.add('lightbox__loader');
        //Rajouter ds le container l'enfant qui sera le loader:
        container.appendChild(loader);
        //lorsque l'image sera bien chargée, tu lanceras une fonction... 27mn48
        image.onload = function() {
            console.log("Chargé");
            //on enlève le loader
            container.removeChild(loader);
            //on ajoute l'image
            container.appendChild(image);
        }
        image.src = url;
    }
    loadVideo(url) {
        const containerVideo = this.element.getElementById("myVideo");
        //Création du loader
        const loader = document.createElement('div');
        loader.classList.add('lightbox__loader');
        //Rajouter ds le container l'enfant qui sera le loader:
        containerVideo.appendChild(loader);
        containerVideo.src = url;
        //lorsque l'image sera bien chargée, tu lanceras une fonction...
        containerVideo.onload();


    }

    buildDOMimage(url) {
        dom.innerHTML = `<div class="lightbox">
                            <button class="lightbox__close">Fermer</button>
                            <button class="lightbox__next">Suivant</button>
                            <button class="lightbox__prev">Précédent</button>
                            <div class="lightbox__container">
                            
                            </div>
                        </div>         
                        `
            //Lorsque le traitement est finit je peux retourner le dom:
        return dom
    }

    buildDOMvideo(url) {
        dom.innerHTML = `<div class="lightbox">
                            <button class="lightbox__close">Fermer</button>
                            <button class="lightbox__next">Suivant</button>
                            <button class="lightbox__prev">Précédent</button>
                            <div class="lightbox__container id='myVideo'">
                            
                            </div>
                        </div>         
                        `
            //Lorsque le traitement est finit je peux retourner le dom:
        return dom
    }
}