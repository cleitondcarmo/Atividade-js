/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function primeira(num, inteiro){
    let mult = []
    for(i = 0; i < num.length; i++){
        mult.push(num[i] * inteiro)
    }
    return mult
}
function segunda(num, inteiro){
    let mult = []
    for(i = 0; i < num.length; i++){
        if(num[i] > 5)
            mult.push(num[i] * inteiro)
    }
    return mult
}

let num = [10, 30, 5, 2]
console.log(primeira(num, 3))
console.log(segunda(num, 3))
