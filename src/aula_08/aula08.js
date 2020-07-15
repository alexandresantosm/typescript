/*
  - Keyword: const
  - É uma forma de criar constantes, variáveis que recebem um valor uma única vez e não sofrem alterações
*/
var MinhaConstante = 10;
alert(MinhaConstante);
//MinhaConstante = 10; //se tentar reatribuir o valor, o compilador do typescript mostra erro
var MeuObjeto = {
    id: 1,
    nome: "treinaWeb"
};
alert(JSON.stringify(MeuObjeto));
/*
//gera erro

MeuObjeto = {
  id: 1,
  nome: "treinaWeb"
};
*/
/*
  - Objetos declarados como constante: os atributos são mutáveis, o objeto em si é imutável.
*/
MeuObjeto.id = 2;
MeuObjeto.nome = "Qualquer outro";
alert(JSON.stringify(MeuObjeto));
var t;
t = ["TreinaWeb", 10];
alert(t[0].substring(2));
alert(t[1].substring(2));
