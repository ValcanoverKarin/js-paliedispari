//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma

//chiedere una parola all' utente (stringa)
var parolaUtente = prompt('inserisci una parola');
console.log(parolaUtente);

//creo la funzione parola palindroma o non palindroma
function valutaParola (parolaDaValutare){
    //crea ciclo per leggere la parola che inserisce l utente da sinistra a destra
for (var i = 0; i < parolaUtente.length; i++){
    var parolaDritta = parolaUtente[i];
    console.log(parolaDritta);
}

