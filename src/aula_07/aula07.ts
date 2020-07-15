/*Type assertions
  - É um recurso de casting, ou seja, de conversão de tipo
*/
const teste1: any = "Isso é uma string";
alert((<string>teste1).length); //sintaxe utilizando o operador diamante

/*
Sintaxe utilizando o operador 'as'. 
Obs.: quando utilizar TypeScript com JSX, muito comum no React, a única sintaxe aceita é utilizando o operador "as".
*/
alert((teste1 as string).length); 