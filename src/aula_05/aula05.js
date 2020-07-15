//void - nenhuma tipagem
//aceita somente null ou undefined
var teste = undefined;
alert(teste);
function funcaoTeste() {
    alert("Olá");
}
teste = funcaoTeste(); //a variável teste está recebendo o retorno da função que é void
