/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras */

const comparacao = (string1, string2) => (string1[0] === string2[0]) ? true : false

let string1 = ['paz']
let string2 = ['paz']
console.log(comparacao(string1, string2))