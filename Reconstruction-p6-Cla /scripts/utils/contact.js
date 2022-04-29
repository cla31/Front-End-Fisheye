function contact(photogapherName) {
    modale.style.display = "block";
    modale.innerHTML =
        ` <p>Contactez-moi <br> ${photogapherName}</p>
        <form>        

        <label for="prenom">Prénom</label><br>
        <input type="text" name="prenom" id="prenom" /><br>

        <label for="nom">Nom</label><br>
        <input type="text" name="nom" id="nom" /><br>

        <label for="email">Email</label><br>
        <input type="email" name="email" id="email" /><br>
        <p>
            <label for="message">Message</label><br />
            <textarea name="ameliorer" id="ameliorer"></textarea><br>
        </p>
        <input type="submit" value="Envoyer">
        </form>
        <div class="close-contact" id="close-form"></div>    
    `;
    document.getElementById("close-form").addEventListener("click", function() {
        modale.style.display = "none";
    });
}