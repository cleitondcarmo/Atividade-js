/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação. */

function multiplicacao(num1, num2){
let mult = 0   
    if(typeof (num1 && num2) == 'number'){
        for(i = 0; i < num2; i++){
            mult += num1
        }
        console.log(mult)       
    }
    else
        console.log("Valores inválidos!")        
    }
    
multiplicacao(15, 4)
multiplicacao(0, 7)