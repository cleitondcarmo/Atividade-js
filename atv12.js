function fat(num){
    var x = 1
    for(i = num; i > 1; i--){
        x *= i
    } 
    console.log(x) 
}

fat(4)