class Lightbox {
    constructor(listImage, selector) {
        this.listImage = listImage;
        this.current = null;
        this.element = document.querySelector(selector);
        this.selector = selector;
    }
    init() {
        var ul = document.createElement("ul");
        for (let image of this.listImage) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.setAttribute("src", image);
            li.appendChild(img);
            ul.appendChild(li);
        }
        this.element.appendChild(img);
    }

    play() {
        this.current = this.listImage[0];
    }

    prepaEvent() {

    }

    next() {
        for (let i = 0; i < this.listImage.length; i++) {
            if (this.listImage[i] == this.current) {
                this.current = this.listImage[++i];
                break;
            }
        }

    }
    previous() {
        for (let i = 0; i < this.listImage.length; i++) {
            if (this.listImage[i] == this.current) {
                this.current = this.listImage[--i];
                break;
            }
        }

    }
}