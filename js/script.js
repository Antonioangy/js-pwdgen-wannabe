// Chiedi all’utente il suo nome,

let nome = prompt('inserisci il tuo nome');

// chiedi il suo cognome,

let cognome = prompt('inserisci il tuo cognome');

// chiedi il suo colore preferito

let colore = prompt('inserisci il tuo colore preferito');

let password = nome + cognome + colore + 21;

console.log(password);

document.getElementById('latuapassword').innerHTML = password;