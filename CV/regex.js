//Declaration des valeurs
const form = document.getElementById("form");
const email = document.getElementById("email");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const tel = document.getElementById("tel");


//Bouttons
const envoyer = document.getElementById("bouton_envoi");

//ERREURS
const emailErr = document.getElementById("emailErr");
const nomErr = document.getElementById("nomErr");
const prenomErr = document.getElementById("prenomErr");
const telErr = document.getElementById("telErr");

//REGEX
const nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
const phoneRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

//Declaration fonction
//form validation

form.addEventListener('submit', (e) => {

    //input email

    if (!emailRegex.test(email.value)) {
        emailErr.innerHTML = "Veuillez saisir une adresse e-mail valide";
        email.classList.add("border-danger");
        e.preventDefault();
    };

    //input nom

    if (!nomValid.test(nom.value)) {
        nomErr.innerHTML = "Le nom de la personne à contacter doit être renseigné";
        nom.classList.add("border-danger");
        e.preventDefault();
    };

    //input prenom

    if (!prenomValid.test(prenom.value)) {
        prenomErr.innerHTML = "Le prénom de la personne à contacter doit être renseigné";
        prenom.classList.add("border-danger");
        e.preventDefault();
    };

    //input tel
    // tel pas obligatoire, si valeur entrée par l'utilisateur validation. 

    if (tel.value.length > 1) {
        if (!phoneRegex.test(tel.value)) {
            telErr.innerHTML = "Numéro non reconnu essayez les formats 06 01 02 03 04 ou +33 6 01 02 03 04";
            tel.classList.add("border-danger");
            e.preventDefault();
        } else if (phoneRegex.test(tel.value)) {
            telErr.innerHTML = "";
            tel.classList.remove("border-danger");
            tel.classList.add("border-success");
        }
    };
    // si utilisateur decide de ne plus donner son tel, plus de validation. 
    if (tel.value.length == 0) {
        telErr.innerHTML = "";
        tel.classList.remove("border-danger");
    };

    //RETRAIT ERREUR SI VALEURS CORRECTES

    //Input email

    if (emailRegex.test(email.value)) {
        emailErr.innerHTML = "";
        email.classList.remove("border-danger");
        email.classList.add("border-success");
    };

    //Input nom

    if (nomValid.test(nom.value)) {
        nomErr.innerHTML = "";
        nom.classList.remove("border-danger");
        nom.classList.add("border-success");
    };

    //Input prenom

    if (prenomValid.test(prenom.value)) {
        prenomErr.innerHTML = "";
        prenom.classList.remove("border-danger");
        prenom.classList.add("border-success");
    };

})