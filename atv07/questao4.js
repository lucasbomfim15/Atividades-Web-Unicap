function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
    }
    return fatorial;
}

const numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));
const resultado = calcularFatorial(numero);
console.log(`${numero}! = ${resultado}`);
