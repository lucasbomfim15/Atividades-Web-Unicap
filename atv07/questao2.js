function contarParesEImpares() {
    let numerosPares = 0;
    let numerosImpares = 0;

    for (let i = 1; i <= 10; i++) {
        const numero = parseInt(prompt(`Digite o ${i}º número:`));
        if (numero % 2 === 0) {
            numerosPares++;
        } else {
            numerosImpares++;
        }
    }

    console.log(`Quantidade de números pares: ${numerosPares}`);
    console.log(`Quantidade de números ímpares: ${numerosImpares}`);
}

contarParesEImpares();
