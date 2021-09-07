/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const composto = (c, i, t) => m = c * ((1 + (i / 100)) ** t)
const simples = (c, i ,t) => m = c * (1 + (i / 100) * t)

console.log(composto(5000, 1, 6).toFixed(2))
console.log(simples(5000, 1, 6).toFixed(2))