const meuObjeto = {
  id: 1,
  nome: "TreinaWeb",
  idade: 10
};

//Utilizando a desconstrução
//const {id, nome, idade} = meuObjeto;
//alert(`Código: ${id}, nome: ${nome} e idade: ${idade}`);

//Pegando somente a primeira propriedade do objeto
//const {id} = meuObjeto;
//alert(`Código: ${id}`);

//Pegando somente a primeira e a última propriedades do objeto
//const {id, idade} = meuObjeto;
//alert(`Código: ${id} e idade: ${idade}`);

//Pegando somente a primeira propriedade e o restante alocando em um subobjeto
const {id, ...meuSubObjeto} = meuObjeto;
alert(`Código: ${id} e subobjeto: ${JSON.stringify(meuSubObjeto)}`);