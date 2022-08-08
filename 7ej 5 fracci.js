
console.log ('La primera fraccion es')
var rango1 = 1
var rango2 = 100
var numerador1= rango1+Math.floor (Math.random ()*rango2)
console.log (+numerador1)
var rango1 = 1
var rango2 = 100
var denominador1= rango1+Math.floor (Math.random ()*rango2)
console.log (+denominador1)
var rango1 = 1
var rango2 = 100
console.log('')
console.log('')

console.log ('La segunda fraccion es')
var numerador2= rango1+Math.floor (Math.random ()*rango2)
console.log (+numerador2)
var rango1 = 1
var rango2 = 100
var denominador2= rango1+Math.floor (Math.random ()*rango2)
console.log (+denominador2)
console.log('')
console.log('')

/* Para la suma y resta de fraccionarios heterogeneas, estas se realizan primero multiplicando
los dos denominadores y multiplicando en sentido de x, es decir, numerador1
con denominador 2, denominador1 con numerador 2, losresultados deestas dos 
cruzadas se van a sumaro a restar y asi daran un resultado de fraccion */
if (denominador1!=denominador2)
 var fsumad1 = ((numerador1*denominador2)+(numerador2*denominador1))
 var fsumad2 = (denominador1*denominador2)
 console.log('La suma de la fraccion es:',+fsumad1,'/',+fsumad2)
 console.log('')
 console.log('')
 var frestad1 = ((numerador1*denominador2)-(numerador2*denominador1))
 var frestad2 = (denominador1*denominador2)
 console.log('La resta de la fraccion es:',+frestad1,'/',+frestad2)
 console.log('')
 console.log('')
  

/*Para la multiplicacion se van a multiplicar de forma lineal, es decir, numerador con
numerador y denominador con denominador */
var fmulti1= (numerador1*numerador2)
var fmulti2= (denominador1*denominador2)
console.log('La multiplicacion de la fraccion es',+fmulti1,'/',+fmulti2)
console.log('')
console.log('')

/*Para la division se va a realizar una multiplicacion en x  */
var fdivi1 = (numerador1*denominador2)
var fdivi2= (numerador2*denominador1)
console.log('La division de la fraccion es',fdivi1,'/',+fdivi2)


