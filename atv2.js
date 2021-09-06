const tri = function (a, b, c){
    if (a == b && b == c)
        console.log("Triangulo equilitero") 
    
    else if (a === b && b !== c || a === c && c !== b|| b === c && c !== a)
        console.log("Triangulo isosceles")  

    else if (a != b && b != c && a != c)
        console.log("Triangulo escaleno")  
}

tri(10, 1, 0)