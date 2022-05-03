function contact(photogapherName) {
    const form = document.getElementById("contact");
    const modale = document.getElementById("form-contact");

    //Pour afficher le formulaire
    function displayForm(photogapherName, modale) {
        modale.style.display = "block";
        modale.innerHTML =
            ` <p>Contactez-moi <br> ${photogapherName}</p>
            <form id="form">        
            <div class="first-formData">
                <label for="prenom">Prénom</label><br>
                <input type="text" name="prenom" id="first"/>
                <span></span>
            </div>       
            <div class="last-formData">
                <label for="nom">Nom</label><br>
                <input type="text" name="nom" id="last"/>
                <span></span>
            </div>       
            <div class="email-formData">
                <label for="email">Email</label><br>
                <input type="email" name="email" id="email"/>
                <span></span>
            </div>        
            <p>
                <label for="message">Message</label><br />
                <textarea name="ameliorer" id="improve"></textarea>
                <span></span>
            </p>
            <input type="submit" value="Envoyer">
            </form>
            <div class="close-contact" id="close-form">Close</div>    
        `;

    }
    //soumission du formulaire
    function submitForm() {
        const onlyForm = document.querySelector("#form");
        //fermeture du formulaire
        function closeForm() {
            document.getElementById("close-form").addEventListener("click", function() {
                modale.style.display = "none";
            });
        }
        closeForm();
        //fonction qui gère le contenu des inputs
        const errorDisplay = (tag, message, valid) => {
            const container = document.querySelector("." + tag + "-formData");
            const span = document.querySelector("." + tag + "-formData > span");
            if (!valid) {
                container.classList.add("error");
                span.textContent = message;
            } else {
                container.classList.remove("error");
                span.textContent = message;
            }

        };
        //check prénom et nom
        const firstLastChecker = (value, tag) => {
            if (!value) {
                errorDisplay(tag, "Le champ doit être rempli!");
            } else if (value.length > 0 && (value.length < 3 || value.length > 20)) {
                errorDisplay(tag, "Veuillez entrer 2 caractères ou plus");

            } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
                errorDisplay(tag, "Le pseudo ne doit pas contenir de caractères spéciaux");

            } else {
                errorDisplay(tag, "", true);
                return true;
            }
        };
        //check sur email
        const emailChecker = (value, tag) => {
            if (value == "") {
                errorDisplay(tag, "Le champ doit être rempli!");

            } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
                errorDisplay(tag, "Le mail n'est pas valide");

            } else {
                errorDisplay(tag, "", true);
                return true;
            }
        };
        //check texte (à faire...)
        //**************************************** */
        //listener sur prénom:
        let firstInput = document.getElementById("first");

        //Ajout du listener sur l'élément et contrôle:
        firstInput.addEventListener('change', (e) => {
            firstLastChecker(e.target.value, "first");
        });
        //listener sur nom
        let lastInput = document.getElementById("last");

        //Ajout du listener sur l'élément et contrôle:
        lastInput.addEventListener('change', (e) => {
            firstLastChecker(e.target.value, "last");
        });
        //listener sur email
        let emailInput = document.getElementById("email");

        //Ajout du listener sur l'élément et contrôle:
        emailInput.addEventListener('change', (e) => {
            emailChecker(e.target.value, "email");
        });
        //listener sur texte (à faire)
        let textInput = document.getElementById("improve");

        //Ajout du listener sur l'élément et contrôle:
        // textInput.addEventListener('change', (e) => {
        //     console.log(e.target.value, "Message pour amélioration")
        // });
        //validation du formulaire
        onlyForm.addEventListener('submit', (e) => {
            //empêche l'envoi du formulaire
            e.preventDefault();
            //Récupération de la valeur des inputs au submit
            firstValue = firstInput.value;
            lastValue = lastInput.value;
            emailValue = emailInput.value;
            textValue = textInput.value;
            // Envoi des valeurs de chaque champ (input) vers la fonction de test et validation
            firstLastChecker(firstValue, "first");
            firstLastChecker(lastValue, "last");
            emailChecker(emailValue, "email");
            if (firstLastChecker(firstValue, "first") &&
                firstLastChecker(lastValue, "last") &&
                emailChecker(emailValue, "email")
            ) {
                console.log("Prénom: ", firstValue);
                console.log("Nom: ", lastValue);
                console.log("Email: ", emailValue);
                console.log("Message: ", textValue);

                //Fermeture de la Modale
                closeForm();
                // Effacement des champs du formulaire
                document.getElementById("form").reset();
                firstValue = "";
                lastValue = "";
                emailValue = "";
                textValue = "";
            }

        });
    }
    //Lancement du formulaire au clic
    form.addEventListener('click', e => {
        e.preventDefault();
        // console.log("Cliqué+++++++++++++++");
        displayForm(photogapherName, modale);
        submitForm();
    });
}