class DiapoLightbox {
    constructor(selector, photographerId, image, title) {
        this.selector = selector;
        this.element = document.getElementById(this.selector);
        this.photographerId = photographerId;
        this.image = image;
        this.title = title;
        this.element.innerHTML = this.display();
        this.manageEvent();
        this.element.style.display = "block";
    }
    display() {
        return `
        <div class="dialog">
        <div class="previous-button"></div>
            <div class="container-img">
                <img class="container-photo__photo" src="assets/photographers/${this.photographerId}/${this.image}" />
                <div class="description">
                ${this.title}
                </div>
            </div>
        <div class="next-button"></div>
        <div class="close" id="clic-close"></div>
    </div>            
        `;
    }
    next() {

    }

    previous() {

    }
    manageEvent() {
        document.getElementById("clic-close").addEventListener("click", this.closeWind);

    }
    closeWind() {
        this.selector.style.display = "none";

    }
}