/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function att(notas){
    let conceitoA = []
    let conceitoB = []
    let conceitoC = []
    let conceitoD = []

    for(i = 0; i < notas.length; i++){
        if(notas[i] >= 0 && notas[i] <= 4.9){
            conceitoD.push(notas[i])
        }
        if(notas[i] > 4.9 && notas[i] < 7){
            conceitoC.push(notas[i])
        }
        if(notas[i] >= 7 && notas[i] < 9){
            conceitoB.push(notas[i])
        }
        if(notas[i] >= 9 && notas[i] <= 10){
            conceitoA.push(notas[i])
        }
    }
    console.log("Conceito A: " + conceitoA)
    console.log("Conceito B: " + conceitoB)
    console.log("Conceito C: " + conceitoC)
    console.log("Conceito D: " + conceitoD)
}
notas = [4.9, 3, 10, 8, 5, 5.5, 7]
att(notas)