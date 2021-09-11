/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function simboloMais(num){
    let string = ''
    for(i = 0; i < num; i++){
        string += "+"
    }
    console.log(string)
}

simboloMais(5)