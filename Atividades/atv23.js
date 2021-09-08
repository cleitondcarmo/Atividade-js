/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. */

function media(cod, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaP = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / (4 + 3 + 3)
   
    console.log("Código: "+ cod)
    console.log("Nota 1: "+ nota1 + "\nNota 2: " + nota2 + "\nNota 3: " + nota3)
    console.log(`Média ponderada: ${mediaP} ${mediaP < 5 ? '\nSituação: REPROVADO' : '\nSituação: APROVADO'}`)
}
media(1, 10, 8, 10)

