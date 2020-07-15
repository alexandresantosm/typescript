//Tipos avançados
//Tuplas - conjunto de dados relacionados
let campeaoBrasilerio: [string, number] = ["Palmeiras", 2016];
alert(campeaoBrasilerio[0] + ", " + campeaoBrasilerio[1]);

//Permite alteração de valor
campeaoBrasilerio[0] = "Teste";
alert(campeaoBrasilerio[0] + ", " + campeaoBrasilerio[1]);

//Enums
enum Estado { Desabilitado, Habilitado };
const meuEstado: Estado = Estado.Desabilitado;
alert(meuEstado);

const textoMeuEstado: string = Estado[Estado.Desabilitado];
alert(textoMeuEstado);

//Any - ao utilizar o tipo any, o TypeScript deixa de fazer checagem de tipo.
let v: any = "Teste";
alert(v);

v = 2;
alert(v);
alert(v.toExponential());
alert(v.toMetodo()); // o TypeScript não verifica se o método existe e gera erro somente quando executado

//Object - tudo é objeto no JavaScript e no TypeScript
const v2: Object = 3;
//alert(v2.toExponential());
