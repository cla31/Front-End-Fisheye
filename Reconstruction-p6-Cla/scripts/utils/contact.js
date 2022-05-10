function contact(photogapherName) {
    const form = document.getElementById("contact");
    const modale = document.getElementById("form-contact");

    //Pour afficher le formulaire
    // function displayForm(photogapherName, modale) {
    //     modale.style.display = "block";
    //     modale.innerHTML =
    //         ` <p>Contactez-moi <br> ${photogapherName}</p>
    //         <form id="form">        
    //         <div class="first-formData">
    //             <label for="prenom">Prénom</label><br>
    //             <input type="text" name="prenom" id="first"/>
    //             <br>
    //             <span></span>
    //         </div>       
    //         <div class="last-formData">
    //             <label for="nom">Nom</label><br>
    //             <input type="text" name="nom" id="last"/>
    //             <br>
    //             <span></span>
    //         </div>       
    //         <div class="email-formData">
    //             <label for="email">Email</label><br>
    //             <input type="email" name="email" id="email"/>
    //             <br>
    //             <span></span>
    //         </div>        
    //         <div class="textarea-formData">
    //             <label for="message">Message</label><br />
    //             <textarea name="textarea" id="textarea"></textarea>
    //             <br>
    //             <span></span>
    //         </div> 
    //         <input type="submit" value="Envoyer">
    //         </form>
    //         <div class="close-contact" id="close-form">Close</div>    
    //     `;

    // }

    //Pour afficher le formulaire
    function displayForm(photogapherName, modale) {
        modale.style.display = "block";
        modale.innerHTML =
            ` <p>Contactez-moi <br> ${photogapherName}</p>
            <aside id="contact_modal" aria-hidden="false" aria-labelledby="contactPhotographerH1" arial-modal="true" style="display: block;">
        <div class="contentModal">
            <header id="headerModal">
                <h1 id="contactPhotographerH1" tabindex="0" arialabel="contactez Mimi Keel">Contactez Mimi Keel</h1>
            </header>

            <form name="reserve" action="photographer.html" method="get" id="form">
                <div class="modal-body">
                    <div class="formData firstName first-formData">
                        <label for="first">Prénom</label>
                        <input class="text-control" id="first" name="first" minlength="2" maxlength="40" placeholder="Entre 2 et 40 caractères." aria-required="true" tabindex="0" type="text">
                        <!-- span permettant l'affichage du message d'erreur si le champ est incorrect -->
                        <span></span>
                    </div>

                    <div class="formData lastName last-formData">
                        <label for="last">Nom</label>
                        <input class="text-control" id="last" name="last" minlength="2" maxlength="40" placeholder="Entre 2 et 40 caractères." aria-required="true" tabindex="0" type="text">
                        <span></span>
                    </div>

                    <div class="formData address email-formData">
                        <label for="email">E-mail</label>
                        <input class="text-control" id="email" name="email" placeholder="Caractères accentués non autorisés." aria-required="true" tabindex="0" type="email">
                        <span></span>
                    </div>

                    <div class="formData message textarea-formData">
                        <label for="message">Votre message</label>
                        <textarea class="text-control" id="textarea" name="message" maxlength="500" placeholder="500 caractères maximum." aria-required="true" tabindex="0"></textarea>
                        <span></span>
                    </div>
                </div>
                <input class="contactButton" value="Envoyer" tabindex="0" type="submit">
            </form>
            <div class="crossCloseModal" id="close-form" tabindex="0" aria-label="Fermeture du formulaire">
                <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path class="svgCross" d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="white"></path>
            </svg>
            </div>
        </div>
    </aside>
               
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
        //check texte
        const textareaChecker = (value, tag) => {
            if (value == "") {
                errorDisplay(tag, "Le champ doit être rempli!");
            } else if (value.length > 0 && (value.length < 7 || value.length > 500)) {
                errorDisplay(tag, "Veuillez entrer entre 5 et 500 caractères ");

            } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
                errorDisplay(tag, "Le message n'est pas valide");

            } else {
                errorDisplay(tag, "", true);
                return true;
            }
        };
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
        //listener sur texte
        let textInput = document.getElementById("textarea");
        textInput.addEventListener('change', (e) => {
            textareaChecker(e.target.value, "textarea");
        });

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
                emailChecker(emailValue, "email") &&
                textareaChecker(textValue, "textarea")
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