function pellRecursivo(n) {
    
    
    if (n === 0) {
        return 0;
    }
 
    else if (n === 1) {
        return 1;
    }
  
    else {
        return 2 * pellRecursivo(n - 1) + pellRecursivo(n - 2);
    }
}


let n = 7; 
let resultado = pellRecursivo(n);
console.log("O", n + "-ésimo número de Pell é:", resultado);
