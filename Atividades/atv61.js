/* Criar uma função que receba um array de números e retorne o menor número desse array */

valor = [14, 50, 2]

let menor = valor.reduce(function(a, b){
    return Math.min(a, b)
})

console.log(menor)
