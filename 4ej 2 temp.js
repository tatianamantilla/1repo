var rango1 = 1
var rango2 = 20
var tempe= rango1+Math.floor (Math.random ()*rango2)
console.log ('La temperatura arrojada es: '+tempe)


var Fahrenheit=(1.8*tempe)+32
console.log ('Grados Celsius a Fahrenheit')
console.log(+tempe,'°C','=',+Fahrenheit,'°F')


var Kelvin=(tempe+273.15)
console.log ('Grados Celsius a Kelvin')
console.log(+tempe,'°C','=',+Kelvin,'°K')


var Rankine=(1.8*tempe)+491.67
console.log ('Grados Celsius a Fahrenheit')
console.log(+tempe,'°C','=',+Rankine,'°R')