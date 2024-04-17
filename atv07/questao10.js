function encontrarPrimosAteN(N) {
    let numerosPrimos = [];
    let divisoes = 0;

    for (let numero = 2; numero <= N; numero++) {
        let ehPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            divisoes++;
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            numerosPrimos.push(numero);
        }
    }

    return { primos: numerosPrimos, divisoes: divisoes };
}

function main() {
    const N = parseInt(prompt("Digite um número inteiro para encontrar todos os primos até ele: "));

    if (isNaN(N) || N < 2) {
        console.log("Por favor, insira um número válido maior ou igual a 2.");
        return;
    }

    const resultado = encontrarPrimosAteN(N);
    console.log(`Números primos entre 1 e ${N}: ${resultado.primos.join(', ')}`);
    console.log(`Número total de divisões realizadas: ${resultado.divisoes}`);
}

main();
