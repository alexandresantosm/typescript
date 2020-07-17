var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var meuObjeto = {
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
var id = meuObjeto.id, meuSubObjeto = __rest(meuObjeto, ["id"]);
alert("C\u00F3digo: " + id + " e subobjeto: " + JSON.stringify(meuSubObjeto));
