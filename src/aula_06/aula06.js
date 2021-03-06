/*
Diferença entre void e never
    - O tipo de dado void retorna null ou undefined
    - O tipo de dado never retorna nada, usado em funções que nunca vai ser finalizada, ex.: while(true) ou funções que arremessam exceções
*/
function mostrarErro(mensagem) {
    throw new Error("Ocorreu um erro: " + mensagem);
}
var n = -1;
if (n <= 0) {
    mostrarErro("Número menor ou igual a zero!");
}
