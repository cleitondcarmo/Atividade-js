/* O cardápio de uma lanchonete é o seguinte:
Código | Descrição do Produto | Preço
100 | Cachorro Quente    | R$ 3,00
200 | Hambúrguer Simples | R$ 4,00
300 | Cheeseburguer      | R$ 5,50
400 | Bauru              | R$ 7,50
500 | Refrigerante       | R$ 3,50
600 | Suco               | R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */
function lanche(cod, quant){
let cachorroquente = 3.00
let hamburguer = 4.00
let cheeseburguer = 5.5
let bauru = 7.5
let refri = 3.5
let suco = 2.8

    switch(cod){
        case 100: console.log("Valor total: " + cachorroquente * quant)
        break
        case 200: console.log("Valor total: " + hamburguer * quant)
        break
        case 300: console.log("Valor total: " + cheeseburguer * quant)
        break
        case 400: console.log("Valor total: " + bauru * quant)
        break
        case 500: console.log("Valor total: " + refri * quant)
        break
        case 600: console.log("Valor total: " + suco * quant)
        break
        default: console.log("Produto não existe")
        break
    }
}
lanche(600, 1)