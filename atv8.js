function basq(a){
    let valoratual = a[0]    
    let rec = 0
    let x = 0  
    for(i = 0; i <= a.length; i++){
        if(valoratual < a[i]){
            x += 1
            rec = i           
        }    
    }
   console.log(x, rec) 
}
let a = [10, 20, 20, 8, 25, 3, 0, 30, 1]
basq(a)