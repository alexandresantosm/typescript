var meusNumeros = [1, 2, 3, 4];
alert(meusNumeros[0]); //forma tradicional
//Utilizando a desconstrução
var primeiro = meusNumeros[0], segundo = meusNumeros[1], terceiro = meusNumeros[2], quarto = meusNumeros[3];
alert(primeiro);
alert(segundo);
alert(terceiro);
alert(quarto);
//Pegando somente o primeiro índice do vetor
var meuOutroPrimeiro = meusNumeros[0];
alert(meuOutroPrimeiro);
//Pegando somente o primeiro e o terceiro índice do vetor
var meuPrimeiro = meusNumeros[0], meuTerceiro = meusNumeros[2];
alert(meuPrimeiro + " e " + meuTerceiro);
//Pegando somente o primeiro e os índices restantes do vetor alocando em um subvetor
var primeiroValor = meusNumeros[0], subVetor = meusNumeros.slice(1);
alert(primeiroValor + " e " + subVetor);
//Pegando somente o último índice do vetor
var ultimo = meusNumeros[3];
alert(ultimo);
