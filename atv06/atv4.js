let populacaoA = 80000;
let taxaCrescimentoA = 0.03; // 3%
let populacaoB = 200000;
let taxaCrescimentoB = 0.015; // 1.5%
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA *= (1 + taxaCrescimentoA);
    populacaoB *= (1 + taxaCrescimentoB);
    anos++;
}

console.log("Número de anos necessários: " + anos);
