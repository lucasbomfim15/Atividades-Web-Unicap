do{
    let nu = prompt("DIGITE SEU NOME DE USUARIO");
    let senha = prompt("DIGITE SUA SENHA");
    if(nu == senha){
        alert("ERRO!, SUA SENHA NÃO PODE SER IGUAL AO NOME DE USUARIO.");
    }
} while(nu == senha)

console.log("AUTENTICACAO FEITA COM SUCESSO");