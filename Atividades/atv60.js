/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário. */

const triangulo = (base, altura) => (base * altura) / 2

console.log(triangulo(10, 15).toFixed(2))