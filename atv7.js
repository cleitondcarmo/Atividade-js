function bhask(ax2, bx, c){
    delta = (bx ** 2) - 4 * ax2 * c
    if(delta < 0)
        console.log("Delta é negativo")

    else{
        x1 = ((bx * -1) + Math.sqrt(delta)) / (2 * ax2)
        x2 = ((bx * -1) - Math.sqrt(delta)) / (2 * ax2)
        console.log("X1 = " + x1.toFixed(2))
        console.log("X2 = " + x2.toFixed(2))
    }
}
bhask(1, 12, 13)