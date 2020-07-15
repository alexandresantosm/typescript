//Tipos avançados
//Tuplas - conjunto de dados relacionados
var campeaoBrasilerio = ["Palmeiras", 2016];
alert(campeaoBrasilerio[0] + ", " + campeaoBrasilerio[1]);
//Permite alteração de valor
campeaoBrasilerio[0] = "Teste";
alert(campeaoBrasilerio[0] + ", " + campeaoBrasilerio[1]);
//Enums
var Estado;
(function (Estado) {
    Estado[Estado["Desabilitado"] = 0] = "Desabilitado";
    Estado[Estado["Habilitado"] = 1] = "Habilitado";
})(Estado || (Estado = {}));
;
var meuEstado = Estado.Desabilitado;
alert(meuEstado);
var textoMeuEstado = Estado[Estado.Desabilitado];
alert(textoMeuEstado);
//Any - ao utilizar o tipo any, o TypeScript deixa de fazer checagem de tipo.
var v = "Teste";
alert(v);
v = 2;
alert(v);
alert(v.toExponential());
alert(v.toMetodo()); // o TypeScript não verifica se o método existe e gera erro somente quando executado
//Object - tudo é objeto no JavaScript e no TypeScript
var v2 = 3;
alert(v2.toExponential());
