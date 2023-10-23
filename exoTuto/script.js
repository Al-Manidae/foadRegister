const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

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

// Vérif de l’email --------------------------
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// Vérif du mdp ------------------------------
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

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

// Validation du nom -------------------------
const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Renseignez votre nom');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Votre nom doit comprendre entre ${min} et ${max} caractères`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}

// Validation du mail ------------------------
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, 'Renseignez votre adresse e-mail');
    } else if (!isEmailValid(email)) {
        showError(emailEl, "Cette adresse e-mail est invalide")
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

// Validation du mdp -------------------------
const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    
    if (!isRequired(password)) {
        showError(passwordEl, 'Renseignez un mot de passe');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, dont une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};

// Validation de confirm mdp -----------------
const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    
    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Entrez votre mot de passe');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, "Confirmation différante de votre mot de passe");
    } else {
        showSuccess(confirmPasswordEl);
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
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
                    isEmailValid &&
                    isPasswordValid &&
                    isConfirmPasswordValid;
    
    if (isFormValid==false) {
        e.preventDefault();
    }else{
        // localStorage -----------------------------
        let usernameVal =document.getElementById("username").value;
        let passWord =password.value;
        let dateLogIn = new Date();
        //envoie dans le localStorage
        localStorage.setItem("nom",usernameVal);
        localStorage.setItem("passWord",passWord);
        localStorage.setItem("dateLogIn",dateLogIn);
        console.log(localStorage.getItem('nom'));
        console.log(localStorage.getItem('passWord'));
        window.location.href = "logIn.html";
    }
});
