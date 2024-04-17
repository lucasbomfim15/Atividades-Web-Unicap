function calcularMedia(notas) {
    const totalNotas = notas.length;
    if (totalNotas === 0) {
        return 0;
    }
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / totalNotas;
}

function main() {
    const quantidadeNotas = parseInt(prompt("Digite a quantidade de notas: "));
    
    if (isNaN(quantidadeNotas) || quantidadeNotas <= 0) {
        console.log("Por favor, insira um número válido de notas.");
        return;
    }

    const notas = [];
    for (let i = 1; i <= quantidadeNotas; i++) {
        const nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
        if (isNaN(nota)) {
            console.log("Por favor, insira uma nota válida.");
            return;
        }
        notas.push(nota);
    }

    const media = calcularMedia(notas);
    console.log(`A média das notas é: ${media.toFixed(2)}`);
}

main();
