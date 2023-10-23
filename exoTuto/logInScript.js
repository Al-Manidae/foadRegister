const usernameEl = document.querySelector('#username');
const localNom = localStorage.getItem('nom');
const passwordEl = document.querySelector('#password');
const localPassword = localStorage.getItem('passWord');

const form = document.querySelector('#signup');

// Fonctions fléchées ------------------------
const isRequired = value => value === '' ? false : true;
// if (value === "") {
//     false
// } else {
//     true
// }
// remplacé par 1 ligne
// “?” est un if et le “:” est else
const isBetween =(length,min,max)=>length<min || length>max ? false : true;

// Show errors -------------------------------
const showError = (input, message)=>{
// reprendre le form-field element
    const formField = input.parentElement;
// ajouter la class error et supprimer la class success
    formField.classList.remove('success');
    formField.classList.add('error');
// afficher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = message;
}

// Is form valid ? ---------------------------
const showSuccess = (input) => {
// reprendre le form-field element
    const formField = input.parentElement;
// ajouter la class success et supprimer la class error
    formField.classList.remove('error');
    formField.classList.add('success');
// cacher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = '';
}

// const usernameEl = document.querySelector('#username');
// const localNom = localStorage.getItem('nom');

// Verification du nom -----------------------
const checkUsername = () => {
    let valid = false;

    const username = usernameEl.value.trim();
    
    if (!isRequired(username)) {
        showError(username, 'Entrez votre nom');
    } else if (localNom !== username) {
        showError(username, "Nom invalide");
    } else {
        showSuccess(username);
        valid = true;
    }
    return valid;
}

// const passwordEl = document.querySelector('#password');
// const localPassword = localStorage.getItem('passWord');

// Verification du mdp -----------------------
const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();
    
    if (!isRequired(password)) {
        showError(password, 'Entrez votre Mot de passe');
    } else if (localPassword !== password) {
        showError(password, "Mot de passe invalide");
    } else {
        showSuccess(password);
        valid = true;
    }
    return valid;
}

// Submit form ------------------------------
form.addEventListener('submit',function(e){
// utilisation du prevent Default
    e.preventDefault();
//validation des champs
    let isUsernameValid = checkUsername();
    let isPasswordValid = checkPassword();

    let isFormValid = isUsernameValid &&
                    isPasswordValid;
    
    if (isFormValid==false) {
        e.preventDefault();
    }else{
        // localStorage -----------------------------
        let dateLogIn = new Date();
        //envoie dans le localStorage
        localStorage.setItem("dateLogIn",dateLogIn);
        // window.location.href = "logIn.html";
    }
});
