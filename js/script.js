//Ciclo i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
    //Se il valore del numero che sto attualmente ciclando è un multiplo di tre, mostro il testo Fizz
    if (i % 3 == 0){
        console.log(`${i} multiplo di 3`)
    }
    //Se il valore del numero che sto attualmente ciclando è un numero multiplo di cinque, mostro il testo Buzz
    else if (i % 5 == 0){
        console.log(`${i} multiplo di 5`)
    }



//Altrimenti se è sia un multiplo di 3 che di 5, mostro il testo FizzBuzz

}

