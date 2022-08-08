var rango1 = 1
var rango2 = 5
var A = rango1 + Math.floor(Math.random() * rango2)
console.log('A es = ' + A)
var rango1 = 1
var rango2 = 5
var B = rango1 + Math.floor(Math.random() * rango2)
console.log('B es = ' + B)
var rango1 = 1
var rango2 = 5
var C = rango1 + Math.floor(Math.random() * rango2)
console.log('C es = ' + C)



var determinante = Math.pow(B, 2) - (4 * A * C)
if (determinante > 0) {
    var x1 = ((B * (-1)) + Math.sqrt(determinante)) / (2 * A)
    var x2 = ((B * (-1)) - Math.sqrt(determinante)) / (2 * A)
    console.log('X1=' + x1)
    console.log('X2=' + x2)
} else {}