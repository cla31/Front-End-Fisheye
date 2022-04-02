class Lightbox {
    static init() {
        //Il faut selectionner tous les liens qui mènent vers les jpeg.
        // const links = document.querySelectorAll('a[href$=.jpg]')
        // const links = document.querySelector('.card-media');
        const jpg = ".jpg";
        const mp4 = ".mp4";
        const match = document.querySelectorAll('a[href$=".jpg"],a[href$=".mp4"]')
            .forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'));
                // console.log("url static", e.currentTarget.getAttribute('href'));
                // console.log("match", link);
                // console.log("target", e.currentTarget);
                // if (e.currentTarget == jpg) {
                //     return console.log("ok");
                // } else {
                //     console.log("NOOO!");
                // }

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
        const valueMedia = this.urlExtension(url);
        console.log("valeur du média:", valueMedia);
        // const urlToSplit = url;
        // const urlSplitSlash = url.split('/').pop();
        // console.log("url", urlSplitSlash);
        // const urlSplitPoint = urlSplitSlash.split('.').pop();
        // console.log("url", urlSplitPoint);


        //Lorsque le traitement est finit je peux retourner le dom:
        return dom
    }
}