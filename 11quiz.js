/*ASTERSICOS */


var max = 5
var min = 15
var numf = Math.floor(Math.random() * (max - min) + min)
console.log(+numf)

for (i = 0; i <= numf; i++) {
    var s = ''
    var contador = 0
    while (contador < i) {
        contador = contador + 1
        s = s + '*'
    }
    console.log(s)
}




var max = 5
var min = 15
var numf = Math.floor(Math.random() * (max - min) + min)
console.log(+numf)

for (i = 0; i <= numf; i--) {
    var s = ''
    var contador = 0
    while (contador < i) {
        contador = contador - 1
        s = s - '*'
    }
    console.log(s)
}


/*for (a = 0; a < numf; a++) {
    for (b = 0, b < numf; b++)
        console.log('*')
    if (b == a) {
        console.log('')*/