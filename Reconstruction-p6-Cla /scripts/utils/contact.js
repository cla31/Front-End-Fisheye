function contact(photogapherName) {
    const form = document.getElementById("contact");
    const modale = document.getElementById("form-contact");

    function displayForm(photogapherName, modale) {
        modale.style.display = "block";

        modale.innerHTML =
            ` <p>Contactez-moi <br> ${photogapherName}</p>
            <form>        
            <div class="first-formData">
                <label for="prenom">Prénom</label><br>
                <input type="text" name="prenom" id="prenom"/>
                <span></span>
            </div>       
            <div class="last-formData">
                <label for="nom">Nom</label><br>
                <input type="text" name="nom" id="nom"/>
                <span></span>
            </div>       
            <div class="email-formData">
                <label for="email">Email</label><br>
                <input type="email" name="email" id="email"/>
                <span></span>
            </div>        
            <p>
                <label for="message">Message</label><br />
                <textarea name="ameliorer" id="ameliorer"></textarea>
                <span></span>
            </p>
            <input type="submit" value="Envoyer">
            </form>
            <div class="close-contact" id="close-form">Close</div>    
        `;
        document.getElementById("close-form").addEventListener("click", function() {
            modale.style.display = "none";
        });
    }
    form.addEventListener('click', e => {
        e.preventDefault();
        console.log("Cliqué+++++++++++++++");
        displayForm(photogapherName, modale);
    });
}