/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */

let valores = [10, 87, 50, 60, 79, 41, 58, 766, 54, , 50, 6, 4]

let maior = valores.reduce(function(a, b){
    return Math.max(a, b)
})

let menor = valores.reduce(function(a, b){
    return Math.min(a, b)
})

console.log("Maior: " + maior + "\nMenor: " + menor)