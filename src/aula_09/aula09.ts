const meusNumeros: number[] = [1, 2, 3, 4];
alert(meusNumeros[0]); //forma tradicional

//Utilizando a desconstrução
const [primeiro, segundo, terceiro, quarto] = meusNumeros;
alert(primeiro);
alert(segundo);
alert(terceiro);
alert(quarto);

//Pegando somente o primeiro índice do vetor
const [meuOutroPrimeiro] = meusNumeros;
alert(meuOutroPrimeiro);

//Pegando somente o primeiro e o terceiro índice do vetor
const [meuPrimeiro, ,meuTerceiro, ] = meusNumeros;
alert(meuPrimeiro + " e " + meuTerceiro);

//Pegando somente o primeiro e os índices restantes do vetor alocando em um subvetor
const [primeiroValor, ...subVetor ] = meusNumeros;
alert(primeiroValor + " e " + subVetor);

//Pegando somente o último índice do vetor
const [ , , , ultimo] = meusNumeros;
alert(ultimo);