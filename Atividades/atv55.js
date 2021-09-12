/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

function pares(valor){
    par = []
    for(i = 0; i < valor.length; i++) {
        if((valor[i] % 2 == 0) && (i % 2 == 0))
            par.push(valor[i])
    };
    return(par)
}
valor = [10, 20, 5, 5, 4]
console.log(pares(valor))