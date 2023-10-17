let nom = document.getElementById("nom"),
    prenom = document.getElementById("prenom"),
    mail = document.getElementById("mail"),
    passWord = document.getElementById("passWord"),
    passWordConfirm = document.getElementById("passWordConfirm")
    submit = document.getElementById("submit");


function enregistrement (e) {
    let element = document.body,
        checkNom = document.getElementById("checkNom"),
        checkPrenom = document.getElementById("checkPrenom"),
        checkMail = document.getElementById("checkMail"),
        checkMdp = document.getElementById("checkMdp"),
        passWordConfirm = document.getElementById("passWordConfirm");
    switch (nom) {
        case nom = undefined:
            checkNom.classList.remove("hidden") ;
        case nom > 3:
            checkNom.innerText = "Nom trop cours";
            checkNom.classList.remove("hidden") ;
        default:
    }
}