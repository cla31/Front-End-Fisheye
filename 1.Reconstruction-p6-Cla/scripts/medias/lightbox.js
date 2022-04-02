class Lightbox {
    static init() {
        const match = document.querySelectorAll('a[href$=".jpg"],a[href$=".mp4"]')
            .forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'));
            }))

    }
    constructor(url) {
            //je v construire la structure html de la lightbox
            const element = this.buildDOM(url);
            document.body.appendChild(element);
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
    buildDOM(url) {
        //Pour récupérer juste l'extension de l'url
        const valueMedia = this.urlExtension(url);
        console.log("valeur du média:", valueMedia);
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
                                <img src="${url}" alt="">
                            </div>
                        </div>         
                        `

        //Lorsque le traitement est finit je peux retourner le dom:
        return dom
    }
}