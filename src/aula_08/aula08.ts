/*
  - Keyword: const
  - É uma forma de criar constantes, variáveis que recebem um valor uma única vez e não sofrem alterações
*/
const MinhaConstante = 10;
alert(MinhaConstante);
//MinhaConstante = 10; //se tentar reatribuir o valor, o compilador do typescript mostra erro

const MeuObjeto = {
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