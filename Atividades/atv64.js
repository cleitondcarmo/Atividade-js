/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas. */

function contar(Buscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
    if (frase.charAt(i) === Buscado)
    contador++
    return contador
}
    
console.log(contar("c", "Conhece-te a ti mesmo"))