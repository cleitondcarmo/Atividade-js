/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas */

function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach( par => {
    const chave = 0,
    valor = 1
    objetoInvertido[ par[valor] ] = par[chave]
    })
    return objetoInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3}))


