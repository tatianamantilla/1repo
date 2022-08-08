/*Estructura de control que usa una variable 
iuna condcion y un contador, se usa cuando se 
sabe o se conoce el nuemro de repeticiones 
que va a tenr un ciclo */

/*Primer elemento es una asignacion
segundo elemento es una condicion
tercer elemento es un contador (Un contador es una variabale quee s igual a la misma variable )
mas una constante la cual o cambia*/

var contador = 1
contador = contador + 1
    //sumador=sumador+otravariable

let i
let suma = 0
for (let i = 1; i <= 10; i = i + 1) {
    console.log(i)
    suma = suma + i
}
console.log(`La suma es ${suma}`)

var max = 100
var min = 50
for (let j = 0; j < 10; j++) {
    console.log(Math.random() * (max - min) + min)
}

/*Imprima los numeros de 1 a 100 y 
diga cuales de ellos son multiplos de 7 */
for (let t = 0; t < 100; t++) {
    console.log(t)
    if (t % 7 == 0) {
        console.log(t, 'Es multiplo de 7')

    }
}

/*Generar 10 numeros aleatorios que esten en 
el rango de 1 a 100 (sin incluir el cero).
 Muestre la suma y el promedio*/
var max = 100
var min = 1

for (let a = 1; a <= 10; a++) {
    var num = Math.floor(Math.random() * (max - min) + min)
    console.log(num)
    var sum = sum + num
}
var prom = sum / 10
console.log('La suma es', +sum)
console.log('')
console.log('El promedio es', +prom)