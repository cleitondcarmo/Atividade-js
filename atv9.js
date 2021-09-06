function aluno(nota){
    let resto = nota % 5

    if(nota < 0 || nota > 100)
        console.log("Nota inválida")

    else{   
        if(resto != 0 && resto >= 3)
            att = (5 - resto) + nota
        else
            att = nota

        if(nota <= 37)
            console.log("Aluno reprovado " + nota)
        else{           
            console.log("Aluno aprovado " + att)
        }
    }
}

aluno(99)