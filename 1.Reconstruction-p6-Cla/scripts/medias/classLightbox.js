class Diapo {
    constructor(listImage, selector) {
        this.listImage = listImage;
        this.current = null;
        this.selector = selector;
        //selection du futur container de la modale
        this.element = document.getElementById(selector);
        console.log("selector", this.selector);
        console.log("La liste des images", this.listImage);

    }
    urlExtension(url) {
        const urlToSplit = url;
        const urlSplitSlash = url.split('/').pop();
        console.log("url", urlSplitSlash);
        const urlSplitPoint = urlSplitSlash.split('.').pop();
        console.log("url", urlSplitPoint);
        return urlSplitPoint;
    }
    init() {
        //Création de la plus haute div (1ère) lightbox-modal
        var lightboxModal = document.createElement("div");
        lightboxModal.setAttribute("id", "lightbox-modal");
        this.element.appendChild(lightboxModal);
        lightboxModal.style.display = "block";
        //Création de la 2ème div (dialog)
        const dialog = document.createElement("div");
        dialog.setAttribute("class", "dialog");
        lightboxModal.appendChild(dialog);
        //***************DANS DIALOG**********************
        //Création de la div previous-button
        var previousButton = document.createElement("div");
        previousButton.setAttribute("class", "previous-button");
        dialog.appendChild(previousButton);
        //Création de la div container-img
        var containerImg = document.createElement("div");
        containerImg.setAttribute("class", "container-img");
        dialog.appendChild(containerImg);
        //Création de la div next-button
        var nextButton = document.createElement("div");
        nextButton.setAttribute("class", "next-button");
        dialog.appendChild(nextButton);
        //Création de la div close
        var closeBtn = document.createElement("div");
        closeBtn.setAttribute("class", "close");
        dialog.appendChild(closeBtn);

        //***************DANS CONTAINER-IMG**********************
        var ul = document.createElement("ul");
        var elmt = null;
        for (let media of this.listImage) {
            console.log("Les medias ds le for", media);
            elmt = this.urlExtension(media);
            console.log("Les medias ds le for", elmt);
            var li = document.createElement("li");
            if (elmt == "jpg") {
                // li.setAttribute("class", "activ");
                var img = document.createElement("img");
                img.setAttribute("src", media);
                li.appendChild(img);

            } else {
                console.log("C'est une video")
                    // Mettre ici le code pour la vidéo
                var video = document.createElement("video");
                video.setAttribute("controls", "");
                video.setAttribute("src", media);
                li.appendChild(video);

            }
            ul.appendChild(li);
        }
        containerImg.appendChild(ul);
        //************************** */
        //************************** */
        //************************** */
        // A REVOIR
        //************************** */
        //************************** */
        //************************** */
        //fermeture de la modale avec la croix
        const closeWbtn = this.element.querySelector(".close");
        console.log("close btn", closeWbtn);
        //Fermeture de la fenêtre
        let click = 0;
        closeWbtn.addEventListener("click", function(event) {
            console.log("Je teste la fermeture");
            event.preventDefault();
            click++;
            lightboxModal.style.display = "none";
            if (click >= 1) {
                // remove event listener function `abc`
                closeWbtn.removeEventListener('click', function(event) {
                    lightboxModal.style.display = "none";
                });
            }
        });


        this.prepareEvent();

    }

    add(image) {
        console.log("ajout image");
        this.listImage.push(image);
    }
    play() {
        this.current = this.listImage[0];
        document.querySelector("#modBox div.container-img li:first-child").setAttribute("class", "activ");

    }
    next() {
        for (let i = 0; i <= this.listImage.length; i++) {
            if (this.listImage[i] == this.current) {
                if (i == (this.listImage.length - 1)) {
                    this.current = this.listImage[0];
                    var activ = this.element.querySelector("#modBox div.container-img li.activ");
                    this.element.querySelector("#modBox div.container-img li:first-child").setAttribute("class", "activ");
                } else {
                    this.current = this.listImage[++i];
                    var activ = this.element.querySelector("#modBox div.container-img li.activ");
                    activ.nextSibling.setAttribute("class", "activ");
                }
                activ.setAttribute("class", "");
                break;
            }
        }
    }

    previous() {
        for (let i = 0; i <= this.listImage.length; i++) {
            if (this.listImage[i] == this.current) {
                if (i == 0) {
                    this.current = this.listImage.length - 1;
                    var activ = this.element.querySelector("#modBox div.container-img li.activ");
                    this.element.querySelector("#modBox div.container-img li:last-child").setAttribute("class", "activ");
                } else {
                    this.current = this.listImage[--i];
                    var activ = this.element.querySelector("#modBox div.container-img li.activ");
                    activ.previousSibling.setAttribute("class", "activ");
                }
                activ.setAttribute("class", "");
                break;
            }
        }

    }

    prepareEvent() {
        var thisDiapo = this;
        this.element.querySelector(".previous-button").addEventListener("click", function() {
            thisDiapo.previous();
        });
        this.element.querySelector(".next-button").addEventListener("click", function() {
            thisDiapo.next();
        });

    }
}