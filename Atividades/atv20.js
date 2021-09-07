/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function nota(ced) {
    if (ced >= 100) {
        resto = ced % 100
        console.log(((ced - resto) / 100) + " nota(s) de R$ 100")
        ced = resto
    }
    if (ced >= 50 && ced < 100) {
        resto = ced % 50
        console.log(((ced - resto) / 50) + " nota(s) de R$ 50")
        ced = resto
    }

    if (ced >= 20 && ced < 50) {
        resto = ced % 20
        console.log(((ced - resto) / 20) + " nota(s) de R$ 20")
        ced = resto
    }

    if (ced >= 10 && ced < 20) {
        resto = ced % 10
        console.log(((ced - resto) / 10) + " nota(s) de R$ 10")
        ced = resto
    }

    if (ced >= 5 && ced < 10) {
        resto = ced % 5
        console.log(((ced - resto) / 5) + " nota(s) de R$ 5")
        ced = resto
    }

    if (ced >= 1 && ced < 5) {
        resto = ced % 1
        console.log(((ced - resto) / 1) + " nota(s) de R$ 1")
    }
    else
        console.log("Digite números positivos")
}
nota(99999)