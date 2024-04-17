function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

function calcularFatorialVariasVezes() {
    while (true) {
        const numero = parseInt(prompt("Digite um número inteiro positivo e menor que 16 para calcular o fatorial (ou digite 0 para sair): "));
        
        if (numero === 0) {
            console.log("Programa encerrado.");
            break;
        }

        if (numero < 1 || numero >= 16 || isNaN(numero)) {
            console.log("Número inválido. Por favor, insira um número inteiro positivo e menor que 16.");
        } else {
            const resultado = calcularFatorial(numero);
            console.log(`${numero}! = ${resultado}`);
        }
    }
}

calcularFatorialVariasVezes();
