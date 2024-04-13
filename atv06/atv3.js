let nome, idade, salario, sexo, estadoCivil;


do {
    nome = prompt("Digite seu nome:");
} while (nome.length <= 3);


do {
    idade = parseInt(prompt("Digite sua idade:"));
} while (isNaN(idade) || idade < 0 || idade > 150);

do {
    salario = parseFloat(prompt("Digite seu salário:"));
} while (isNaN(salario) || salario <= 0);


do {
    sexo = prompt("Digite seu sexo (f/m):").toLowerCase();
} while (sexo !== 'f' && sexo !== 'm');


do {
    estadoCivil = prompt("Digite seu estado civil (s/c/v/d):").toLowerCase();
} while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd');


alert("Informações validadas:\nNome: " + nome + "\nIdade: " + idade + "\nSalário: " + salario + "\nSexo: " + sexo + "\nEstado Civil: " + estadoCivil);
