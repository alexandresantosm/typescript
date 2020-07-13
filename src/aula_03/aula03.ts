//Tipos básico
//Booleano
let meuBooleano: boolean = true;
alert(meuBooleano);

//Numérico
let meuNumero: number = 1;
alert(meuNumero);

//Numérico com representação binária
let a: number = 0b11;
alert(a);

//Numérico com representação hexadecimal
let b: number = 0xAB13;
alert(b);

//Numérico com representação octal
let c: number = 0o13;
alert(c);

//String
let meuTexto: string = "Olá, TreinaWeb";
alert(meuTexto);

//Recurso String Patterns - String Expression
let logradouro: string = "Avenida Paulista";
let numero: string = "123B";
let cidade: string = "São Paulo";
let estado: string = "SP";
alert(`Endereço: ${logradouro}, ${numero}. ${cidade}, ${estado}`);

//Tipos avançados
//Array
//let meuArray: number[] = [1, 2, 3, 4]; //Forma tradicional de se declarar um arrray
let meuArray: Array<number> = [1, 2, 3, 4];
alert(meuArray);