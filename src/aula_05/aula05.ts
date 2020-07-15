//void - nenhuma tipagem
//aceita somente null ou undefined
let teste: void = undefined;
alert(teste);

function funcaoTeste(): void {
  alert("Olá");
}

teste = funcaoTeste(); //a variável teste está recebendo o retorno da função que é void