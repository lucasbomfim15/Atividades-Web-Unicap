
function mostrar(){
   return console.log("BOAS VINDAS!");
 
}
 
function verificarNum(a){
    if(verificarNum() % 2 == 0){
        return true;
    }
    else
    return false;
}
 
function calcularMedia(){
    let vet = [1,2,3,4];
    let media = vet / vet.length;
    return media;
     
}
 
function caixaAlta(a){
    return a.toUpperCase();
}
 
function ehPrimoOuNao(a){
    if (number <= 1) {
        return false;
    }

 
    if (a <= 3) {
        return true;
    }

   
    if (a % 2 === 0 || number % 3 === 0) {
        return false;
    }

   
    for (let i = 5; i * i <= a; i += 6) {
        if (a % i === 0 || a % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function inverter(a){
    let vetReverso = [];

    
    for (let i = vetReverso - 1; i >= 0; i--) {
        vetReverso.push(array[i]);
    }

    return vetReverso;
}


function porcentagem(valor, aumento){
    const aumento = (valor * porcentagem) / 100;
    const valorAumentado = valor + aumento;
    return valorAumentado;
}

function palindromo(palavra){
    palavra = palavra.toLowerCase();

    
    palavra = palavra.replace(/\s/g, '');

    
    const palavraInvertida = palavra.split('').reverse().join('');

  
    return palavra === palavraInvertida;
}
 

function binario(numero){
    return numero.toString(2);
}

function fatorial(numero){
      
        if (numero === 0 || numero === 1) {
            return 1;
        }
    
       
        let fatorial = 1;
    
      
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
    
        return fatorial;
    }
