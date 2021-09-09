/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function negativos(num) {
    qtd = 0
    for (i = 0; i < num.length; i++) {
        if (num[i] < 0)
            qtd++
    }
    console.log(qtd)
}
num = [50, 880, 7, 69, 46, -28, 2, -54, 5, 3, -70, 66]
negativos(num)