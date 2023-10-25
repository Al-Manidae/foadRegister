const usernameEl = document.querySelector('#username');
const localNom = localStorage.getItem('nom');
const passwordEl = document.querySelector('#password');
const localPassword = localStorage.getItem('passWord');

const form = document.querySelector('#signup');

const isRequired = value => value === '' ? false : true;

// Show errors -------------------------------
const showError = (input, message)=>{
// reprendre le form-field element
    const formField = input.parentElement;
    console.log(input);
    console.log(formField);
// ajouter la class error et supprimer la class success
    formField.classList.add('error');
    formField.classList.remove('success');
// afficher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = message;
}

// Is form valid ? ---------------------------
const showSuccess = (input) => {
// reprendre le form-field element
    const formField = input.parentElement;
// ajouter la class success et supprimer la class error
    formField.classList.add('success');
    formField.classList.remove('error');
// cacher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = '';
}

// Verification du nom -----------------------
const checkUsername = () => {
    let valid = false;

    const username = usernameEl.value.trim();
    
    if (!isRequired(username)) {
        showError(usernameEl, 'Entrez votre nom');
    } else if (localNom !== username) {
        showError(usernameEl, "Nom invalide");
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}

// Verification du mdp -----------------------
const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();
    
    if (!isRequired(password)) {
        showError(passwordEl, 'Entrez votre Mot de passe');
    } else if (localPassword !== password) {
        showError(passwordEl, "Mot de passe invalide");
    } else {
        showSuccess(passwordEl);
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
        window.location.href = "localDisplay.html";
    }
});
