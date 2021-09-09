/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function contem(valores) {
    let dentro = 0
    let fora = 0
    
    for (i = 0; i < valores.length; i++) {
        if (valores[i] >= 10 && valores[i] <= 20)
            dentro++
        else
            fora++
    }
    console.log("Dentro: " + dentro + "\nFora: " + fora)
}
valores = [20, 28, 75, 8, 69, 41, 58, 46, 37, 20, 46, 10, 2]
contem(valores)
