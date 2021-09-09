/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

function PA(n, a1, r){
    let pa = [a1]
    for(i = 1; i < n; i++){
        a1 += r
        pa.push(a1) 
    }
    console.log(pa)
}

function PG(n, a1, r){
    let pg = [a1]
    for(i = 1; i < n; i++){
        a1 *= r
        pg.push(a1) 
    }
    console.log(pg)
}

PA(5, 4, 3)
PG(8, 2, 2)
