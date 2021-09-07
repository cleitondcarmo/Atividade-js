/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function exp(a, b){
    div = a / b
    res = a % b

    return ["Resultado: " + div, "Resto: " +  res]
}
console.log(exp(9, 2))