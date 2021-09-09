/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function trocar(vetorA, vetorB){
    if (vetorA.length == vetorB.length) {
        for(i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
        console.log("VetorA: " + vetorA) 
        console.log("VetorB: " + vetorB) 
    }
    else
        console.log("Vetores de tamanhos diferentes")
}
vetorA = [10, 20, 30]
vetorB = [1, 2, 3]
trocar(vetorA, vetorB)