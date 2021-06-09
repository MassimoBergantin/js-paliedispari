// Esercizio di oggi:
// nome repo: js-paliedispari
// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Infine, dichiariamo chi ha vinto.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

var userword = prompt("dimmi una parola");

// copiato SPUDORATAMENTE online

function parolaPalindroma(str){
    var strReverse = str.split('').reverse().join('');  
    return strReverse;
}

var parolaInversa = parolaPalindroma(userword);

if(userword == parolaInversa){
    document.getElementById("pali").innerHTML = 'la parola inserita é PALINDROMA';
} else {
    document.getElementById("pali").innerHTML = "la parola inserita NON E' PALINDROMA";
}


var usernumber = pro