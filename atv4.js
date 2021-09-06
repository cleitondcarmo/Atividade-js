function exp(a, b){
    div = a / b
    res = a % b

    return ["Resultado: " + div, "Resto: " +  res]
}
console.log(exp(9, 2))