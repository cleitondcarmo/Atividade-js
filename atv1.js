/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

let conta = function (a, b){
    soma = a + b
    div = a / b
    sub = a - b
    mul = a * b

    console.log(soma + "\n" + div + "\n" + sub + "\n" + mul)
}
conta(10, 5)