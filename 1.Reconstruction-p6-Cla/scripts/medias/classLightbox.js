class DiapoLightbox {
    constructor(selector, photographerId, image, title) {
        this.selector = document.getElementById(selector);
        this.photographerId = photographerId;
        this.image = image;
        this.title = title;
        this.selector.innerHTML = this.display();
        this.manageEvent();
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