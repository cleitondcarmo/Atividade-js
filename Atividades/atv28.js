/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares */

function num(valores){
    let pares = 0
    let impares = 0
    for(i = 0; i < valores.length; i++){
        if(valores[i] % 2 == 0){
            pares++            
        }
        else{  
            impares++
        }  
    }
    console.log("Pares: " + pares + "\nImpares: " + impares)
}

valores = [10, 20, 25, 13, 80, 46, 33, 76, 94, 200]

num(valores)