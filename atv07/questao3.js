function fibonacciAteLimite(limite) {
    let fibonacci = [0, 1];
    let i = 2;
    
    while (fibonacci[i - 1] + fibonacci[i - 2] <= limite) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }
    
    return fibonacci;
}

const limite = 500;
const serieFibonacci = fibonacciAteLimite(limite);
console.log("Série de Fibonacci até que o valor seja maior que 500:");
console.log(serieFibonacci.join(", "));
