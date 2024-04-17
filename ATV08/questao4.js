function tribonacciRecursivo(n) {
  
    if (n === 0) {
        return 0;
    }
   
    else if (n === 1 || n === 2) {
        return 1;
    }
    else {
        return tribonacciRecursivo(n - 1) + tribonacciRecursivo(n - 2) + tribonacciRecursivo(n - 3);
    }
}


let n = 7; 
let resultado = tribonacciRecursivo(n);
console.log("O", n + "-ésimo número da sequência de Tribonacci é:", resultado);
