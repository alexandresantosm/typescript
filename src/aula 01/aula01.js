/* Arquivos typescript aceitam códigos javascript, pois o typescript é um superset.
O typescript adiciona recursos ao javascript
*/
function criarMensagem(nome) {
    return "Olá " + nome;
}
var mensagem = criarMensagem("TypeScript");
alert(mensagem);
