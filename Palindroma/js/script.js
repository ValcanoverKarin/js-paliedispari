//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma

//chiedere una parola all' utente (stringa)
var parolaUtente = prompt('inserisci una parola');
console.log(parolaUtente);

//creo la funzione parola palindroma o non palindroma
function valutaParola (parolaDaValutare){
//creo ciclo per leggere la parola che inserisce l utente da sinistra a destra
for (var i = 0; i < parolaUtente.length; i++){
    var parolaDritta = parolaUtente[i];
    console.log(parolaDritta);
}
//creo ciclo per leggere la parola che inserisce l utente da destra a sinistra
for (var i = parolaUtente.length; i >= 0; i--){
    var parolaContraria = parolaUtente[i];
    console.log(parolaContraria);
}
    var risultato;

//se la parola letta dritta o al contrario è uguale è palindroma se no no
if(parolaDritta == parolaContraria){
    risultato = 'parola palindroma';
} else {
    risultato = 'parola non palindroma';
}
return risultato;
}

var parolaValutata = valutaParola(parolaUtente);
console.log(parolaValutata);

//stampa
alert(parolaValutata);

