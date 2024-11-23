//DICHIARO LE VARIABILI

//Prendo il form dal dom

const myForm = document.getElementById("calculator-form");

//Campi del form

const kmNumber = document.getElementById("km-number");
const userAge = document.getElementById("user-age");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");


//LEGGO I DATI INSERITI DALL'UTENTE

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(kmNumber.value);
    console.log(userAge.value);

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

    let price = kmNumber.value * kmPrice;
    console.log(price)
    
    //SE utente minorenna applico sconto underAge

    if (userAge < underAge) {
    price = price - ((price * underDiscount) / 100);

    //ALTRIMENTI SE utente over 65 sconto overAge

    } else if (userAge > overAge) {
    price = price - ((price * overDiscount) / 100);

    };


    //OUTPUT

    resultText.innerHTML = `Il costo del biglietto è ${price}€`;
    resultContainer.classList.remove("d-none");


    //SVUOTO I CAMPI
    kmNumber.value = "";
    userAge.value = "";


    });