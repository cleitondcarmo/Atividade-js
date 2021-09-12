/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro. */

function filtrarQtd(numeros, qtdDesejada) {
    return numeros.filter(numero => {
    const qtdDeDigitos = String(numero).length
    return qtdDeDigitos === qtdDesejada
    })
}

console.log(filtrarQtd([5, 9, 1, 125, 11], 1))
