/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function Media(valores){
    let num = 0
    let total = 0
    for (i = 0; i < valores.length; i++){
        total += valores[i] 
        num++
    }
    console.log(total / num)
}
valores = [5, 10]
Media(valores)