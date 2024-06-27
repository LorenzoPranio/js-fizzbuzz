//Ciclo i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
    console.log(i);
    //Se è sia un multiplo di 3 che di 5, mostro il testo FizzBuzz
    if (i % 3 === 0 && i % 5 ===0){
        console.log(`${i} FizzBuzz`)
    }
    //Se il valore del numero che sto attualmente ciclando è un multiplo di tre, mostro il testo Fizz
    else if (i % 3 == 0){
        console.log(`${i} Fizz`)
    }
    //Se il valore del numero che sto attualmente ciclando è un numero multiplo di cinque, mostro il testo Buzz
    else if (i % 5 == 0){
        console.log(`${i} Buzz`)
    }
}

