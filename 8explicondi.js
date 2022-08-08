/* If - Else */

var rango1 = 1
var rango2 = 20
var num = rango1 + Math.floor(Math.random() * rango2)
console.log(num)

if (num % 2 == 0) {
    console.log(+num, 'El numero es par')
} else { console.log(+num, 'El numero es impar') }

/* IF anidados */

var rango1 = 1
var rango2 = 40000000
var sueldo = rango1 + Math.floor(Math.random() * rango2)
console.log(sueldo)


if (sueldo == 1000000) {
    console.log('su sueldo es el minimo');
} else if (sueldo < 1000000) {
    console.log('Usted gana menos de un salrio minimo ');
} else if ((sueldo > 1000000) && (sueldo < 2000000)) {
    console.log('Usted gana dos salarios minimos ');
} else {
    console.log('Usted gana mas de dos salarios minimos')
}




/*EXPLICACION Y EJERCICIOS INSTRUCTOR*/



/*Multiplo de 5 */
var x = Math.round(Math.random() * 100)
console.log(x)

if (x % 5 == 0) {
    console.log('Si es multiplo de 5')
}

/*Par o impar */
var x = Math.round(Math.random() * 100)
console.log(x)
if (x % 2 == 0) {
    console.log('Es par')
} else {
    console.log('Es impar')
}

/* Imprimir 2 numeros aleatorios y determinar si b es factor de a  */
var a = Math.round(Math.random() * 10)
var b = Math.round(Math.random() * 10)
console.log(+a)
console.log(+b)
console.log('')
if ((b<=a)&&(b%a==0)) {
    console.log(+b,'Es factor de',+a)
}else{ 
    console.log(+b,'NO es factor de',+a)
}

/*Positivo y negativo */
x = 10
console.log(x)
if (x > 0) {
    console.log('Positivo')
} else if (x < 0) {
    console.log('Negativo')
} else
    console.log('Cero')



/*Numero mayor, menor o igual */
var a = Math.round(Math.random() * 100)
var b = Math.round(Math.random() * 100)
console.log(a)
console.log(b)
if (a > b) {
    console.log(+a, 'Es mayor que', +b)
} else if (a < b) {
    console.log(+a, 'Es menor que', +b)
} else
    console.log(+a, 'Son dos numeros iguales', +b)


/*tres numeros aleatorios a,b, c, diga cual es el menor. No ultilice operadores logicos*/

var a = Math.round(Math.random() * 100)
var b = Math.round(Math.random() * 100)
var c = Math.round(Math.random() * 100)

if ((a < b) == (b > c)) {
    console.log(+a, +b, +c, 'El numero menor es', +b)
} else if ((a < b) == (b > c)) {
    console.log(+a, +b, +c, 'El numero menor es', +c)
} else
    console.log(+a, +b, +c, 'El numero menor es', +a)


/*Calificaciones */
var nota=Math.round(Math.random* 4.9)
console.log(`Su nota es: ${nota}`)

if (nota>=4.5) {
    console.log('Excelente')  
} else if (nota>=4.0) {
    console.log('Sobresaliente')  
} else if (nota>=3.5) {
    console.log('Aceptable') 
} else if (nota >2.5) {
    console.log('Regular') 
} else { 
    console.log('Insuficiente') 
}



//OPERADORES LOGICOS && || !

var x=true
var y=false
console.log (`Expresion OR disyuncion, O ${x || y}`)
var caf = 3.1
var edad=15
console.log(`Vota si es mayor que 18 ${!(edad<18)}`)
console.log (`Expresion OR disyuncion, O ${edad<=12|| edad>=80}`)
console.log (`Expresion AND conjcion, y ${caf>3.0 && caf<4.0}`)
console.log(``)
