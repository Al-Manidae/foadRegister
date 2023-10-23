// Récupérer le nom
let nom = localStorage.getItem('nom');

//Récupération du mail
let adressMail = localStorage.getItem('mail');

//Récupération de la date
let dateLogIn = new Date(localStorage.getItem('dateLogIn'));

document.getElementById("nom").innerHTML = nom;
document.getElementById("date").innerHTML = dateLogIn.getDay()+"/"+dateLogIn.getMonth()+"/"+dateLogIn.getFullYear();
document.getElementById("heure").innerHTML = dateLogIn.getHours()+":"+dateLogIn.getMinutes()+":"+dateLogIn.getSeconds();
