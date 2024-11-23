//DICHIARO LE VARIABILI


//Definisco una variabile kmNumber e la trasformo da stringa a numero
const kmNumber = Number(prompt("Inserisci il numero dei km che vuoi percorrere"));
console.log(kmNumber);

//Definisco una variabile userAge e la trasformo da stringa a numero
const userAge = Number(prompt("Inserisci la tua età"));
console.log(userAge);

//Salvo una variabile kmPrice che sarebbe il prezzo al km
const kmPrice = 0.21;

//Salvo una variabile underAge per determinare il valore dell'età di un minorenne
const underAge = 18;

//Salvo una variabile overAge per determinare il valore dell'età dai 65 anni in sù
const overAge = 65;

//Salvo una variabile underDiscount per determinare il valore sconto dei minorenni
const underDiscount = 20;

//Salvo una variabile underDiscount per determinare il valore sconto dei over 65
const overDiscount = 40;


//CALCOLO DEL BIGLIETTO


//Salvo una variabile price per determinare il prezzo
let price = kmNumber * kmPrice;

//SE utente minorenna applico sconto underAge
if (userAge < underAge) {
    price = price - ((price * underDiscount) / 100);

//ALTRIMENTI SE utente over 65 sconto overAge
} else if (userAge > overAge) {
    price = price - ((price * overDiscount) / 100);

}


//OUTPUT

//Restituisco il risultato
const result = `Il prezzo è ${price.toFixed(2)}€`;
console.log(result);
