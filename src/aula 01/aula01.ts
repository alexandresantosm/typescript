/* Arquivos typescript aceitam códigos javascript, pois o typescript é um superset.
O typescript adiciona recursos ao javascript
*/
function criarMensagem(nome : string) {
  return "Olá " + nome;
}

var mensagem : string = criarMensagem("TypeScript");

alert(mensagem);