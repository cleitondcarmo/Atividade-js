/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1, 'alo', 60.88]
let vetorString = [22, 'ola', 44.99]
let vetorDouble = [50, 'loa', 75.50]

console.log(vetorInteiro.concat(vetorString, vetorDouble))
console.log(vetorString.concat(vetorInteiro, vetorDouble))