/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function  repeticao(elemento, numVezes){
    let array = []

    for(i = 0; i < numVezes; i++){
        array.push(elemento)    
    }
    return array
}

console.log(repeticao(7, 5))