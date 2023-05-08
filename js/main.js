const arrayNumeri = [];

for (let i = 0; i < 6; i++) {
    const nuovoNumero = parseInt(prompt('Inserisci nuovo numero'));

    if (nuovoNumero % 2 !=0){
        arrayNumeri.push(nuovoNumero);
    }
}

console.log("I numeri dispari sono " + arrayNumeri);