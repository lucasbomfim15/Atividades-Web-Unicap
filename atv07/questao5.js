function calcularMinMaxESoma() {
    const quantidadeNumeros = parseInt(prompt("Digite a quantidade de números: "));
    
    if (quantidadeNumeros <= 0 || isNaN(quantidadeNumeros)) {
        console.log("Quantidade inválida de números.");
        return;
    }

    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let soma = 0;

    for (let i = 1; i <= quantidadeNumeros; i++) {
        const numero = parseFloat(prompt(`Digite o ${i}º número:`));
        if (!isNaN(numero)) {
            menorValor = Math.min(menorValor, numero);
            maiorValor = Math.max(maiorValor, numero);
            soma += numero;
        } else {
            console.log(`Valor inválido fornecido. Por favor, insira um número válido.`);
            return;
        }
    }

    console.log(`Menor valor: ${menorValor}`);
    console.log(`Maior valor: ${maiorValor}`);
    console.log(`Soma dos valores: ${soma}`);
}

calcularMinMaxESoma();
