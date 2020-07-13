/* Variável Global
var: a variável fica no escopo global do objeto window
let: a variável não fica no escopo global do objeto window
*/
var a = 2;
//alert(window.a);

let b = 3;
//alert(window.b); //erro: sintaxe (b não declarado)

/* Escopo da Variável
var: a variável pode ser acessada de fora do seu escopo
let: a variável fica restrita ao escopo em que foi declarado 
*/
{ var c = 2; }
//alert(c);

{ let d = 5; }
//alert(d); //erro: referência (b não definido)

var resultado1 = 0;
for (var i=0; i<=10; i++) {
  resultado1 += i;
}
//alert(i);

var resultado2 = 0;
for (let j=0; j<=10; j++) {
  resultado2 += j;
}
//alert(j);

/* Strict Mode
var: a variável pode ser redeclarada, sofre sobrescrita
let: a variável não pode ser redeclarada, não sofre sobrescrita 
*/
var e = 3;
alert(e);
var e = 4;
alert(e);

let f = 7;
alert(f);
let f = 1;
alert(f);

/* 
O TypeScript em sua documentação recomenda declarar as variáveis como let, tendo em vista uma maior segurança ao código
*/