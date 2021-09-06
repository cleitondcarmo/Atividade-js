const composto = (c, i, t) => m = c * ((1 + (i / 100)) ** t)
const simples = (c, i ,t) => m = c * (1 + (i / 100) * t)

console.log(composto(5000, 1, 6).toFixed(2))
console.log(simples(5000, 1, 6).toFixed(2))