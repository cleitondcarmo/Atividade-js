/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */

function palavras(texto){
    let qtdpalavras = texto.split(" ");
    console.log(qtdpalavras.length);
}

texto = "ola bom dia"
palavras(texto)