class Diaporama {
    constructor(listImage, selector) {
        this.listImage = listImage;
        this.current = null;
        this.selector = selector;
        this.element = document.querySelector(selector);

    }
    init() {
        var previous = document.createElement("button");
        previous.setAttribute("class", "previous-button");
        previous.innerHTML = "<";
        this.element.appendChild(previous);
        var ul = document.createElement("ul");
        for (let image of this.listImage) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.setAttribute("src", image);
            li.appendChild(img);
            ul.appendChild(li);
        }
        this.element.appendChild(ul);
        var next = document.createElement("button");
        next.setAttribute("class", "next-button");
        next.innerHTML = ">";
        this.element.appendChild(next);

        this.prepareEvent();

    }
    add(image) {
        console.log("ajout image");
        this.listImage.push(image);
    }
    play() {
        this.current = this.listImage[0];
        document.querySelector(this.selector + " li:first-child").setAttribute("class", "activ");
    }
    next() {
        for (let i = 0; i <= this.listImage.length; i++) {
            if (this.listImage[i] == this.current) {
                if (i == (this.listImage.length - 1)) {
                    this.current = this.listImage[0];
                    var activ = this.element.querySelector(this.selector + " li.activ");
                    this.element.querySelector("li:first-child").setAttribute("class", "activ");
                } else {
                    this.current = this.listImage[++i];
                    var activ = this.element.querySelector(this.selector + " li.activ");
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
                    var activ = this.element.querySelector(this.selector + " li.activ");
                    this.element.querySelector("li:last-child").setAttribute("class", "activ");
                } else {
                    this.current = this.listImage[--i];
                    var activ = this.element.querySelector(this.selector + " li.activ");
                    activ.nextSibling.setAttribute("class", "activ");
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