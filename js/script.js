console.log("JS OK")

// Variable
var name = prompt ("Inserisci qui il tuo nome:");
console.log(name);

var surname = prompt ("Inserisci qui il tuo cognome:");
console.log(surname);

var favoriteColor = prompt ("Inserisci qui il tuo colore preferito:");
console.log(favoriteColor);

var message = "La tua password è: ";

var number = "21";

var password = document.getElementById("password");

password.innerHTML = message + name + surname + favoriteColor + number;