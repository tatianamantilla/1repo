/* Una funcion optimiza una tarea
* Es un conjunto de lineas de codigo para evitar la redundacia 
*Palabra reservada FUNCTION
*cADA VEZ QUE LLAMAMOS LA FUNCION VA A A REPETIR LO DADO ANTERIORMENTE 
parametro= Algo que se encesita para que se trabaje, es el valor que se envia a la funcion */


/* 1. Saber que va a resolver con la funcion
2. plantiamineto, analizar qu eentra y que sale de la funcion
3 desarrollo logico de la funcion */

function saludar() {
    console.log('Hi soacha')
}
saludar()


function saludar(nombre) {
    console.log(`Hi soacha ${nombre}`)

}
saludar('Sena Soacha')

function saludar(nombre) {
    return `Hi soacha ${nombre}`

}



/*funcion para temperaturas son tres funciones*/
var tempe = Math.round((Math.random() * 100 - 1) + 1)
console.log('La temperatura arrojada es: ' + tempe)

function Fahrenheit(tempe) {
    var rFahrenheit = (1.8 * tempe) + 32
    return rFahrenheit
}

var rFahrenheit = Fahrenheit(tempe)
console.log(`${tempe} °C = ${rFahrenheit} °F`)


function Kelvin(tempe) {
    var rKelvin = (tempe + 273.15)
    return rKelvin
}
var rKelvin = Kelvin(tempe)
console.log(`${tempe} °C = ${rKelvin} °k `)


function Rankine(tempe) {
    var rRankine = (1.8 * tempe) + 491.67
    return rRankine
}
var rRankine = Rankine(tempe)
console.log(`${tempe} °C = ${rRankine} °R `)


/*funcion cuadratica*/

var A = Math.round((Math.random() * 8 - 1) + 1)
console.log('A es = ' + A)
var B = Math.round((Math.random() * 8 - 1) + 1)
console.log('B es = ' + B)
var C = Math.round((Math.random() * 8 - 1) + 1)
console.log('C es = ' + C)

function determinante(A, B, C) {
    var rdeterminante = Math.pow(B, 2) - (4 * A * C)
    return rdeterminante
}
var rdeterminante = determinante(A, B, C)

function pos(rdeterminante) {
    var xpos = ((B * (-1)) + Math.sqrt(rdeterminante)) / (2 * A)
    return xpos
}
var xpos = pos(rdeterminante)
console.log(`Positivo ${xpos}`)


function neg(rdeterminante) {
    var xneg = ((B * (-1)) - Math.sqrt(rdeterminante)) / (2 * A)
    return xneg
}
var xneg = neg(rdeterminante)
console.log(`Negativo ${xneg}`)




/*escriba una funcion diga de que tipo es */

function Ttriangulo(l1, l2, l3) {

    if (l1 == l2 && l2 == l3) {
        return (` El trianuglo es equilatero`)
    } else if (l1 == l2 && l2 != l3) {
        return (` El trianuglo es isoceles`)
    } else {
        return (` El trianuglo es escaleno`)

    }


}

console.log(Ttriangulo(8, 8, 2))

/*teorema de pitagoras*/

function tpitagoras(c1, c2) {
    return Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2))
}

console.log(tpitagoras(6, 10))



/*FUNCIONES FLECHA */
/* Son iguales aals funciones clasicas en el sentido general son anonima  */
const x = 100
const saludar = () => {
    return `Hi soacha cariña`
}

console.log(saludar())

//funcion flecha sin parametros
const saludar2 = () => `Hi soacha cariña`
console.log(saludar2())
    //funcion flecha con parametros
const saludar3 = (nombre) => `Hi  ${nombre} a soacha cariña`
console.log(saludar3('Pony'))

const mifuncion = (c1, c2) => Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2))
console.log(mifuncion(6, 10))




//CONDICIONALES
/* Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la 
hora que será dentro de 1 segund */

function hora(h, m, s) {
    s = s + 1
    if (s > 59) {
        s = 0
        m = m + 1
        if (m > 59) {
            m = 0
            h = h + 1
            if (h > 23) {
                h = 0
            }
        }

        if (m > 60) {
            m = 0
        }

        if (h > 24) {
            h = 0
        }


    }
    return (`La hora en un segundo despues sera= ${h}:${m}:${s}`)
}
console.log(hora(12, 59, 59))


const hora = (h, m, s) => {
    s = s + 1
    if (s > 59) {
        s = 0
        m = m + 1
        if (m > 59) {
            m = 0
            h = h + 1
            if (h > 23) {
                h = 0
            }
        }

        if (m > 60) {
            m = 0
        }

        if (h > 24) {
            h = 0
        }


    }
    return (`La hora en un segundo despues sera= ${h}:${m}:${s}`)
}
console.log(hora(12, 59, 59))


/* Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga 
además en que vuelta está sabiendo que cada 360 grados se completa una 
vuelta a la circunferencia. Además diga el resultado en radianes. */
function angulo(G) {
    if (G <= 90) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el primer cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G <= 180) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el segundo cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G <= 270) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el tercer cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G <= 360) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el cuarto cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G > 360) {
        sobrante = (360 - G)
        radian = Math.round(sobrante * 3.1416) / 180
        return (`Se encuntra en el cuadrante que corresponde a ${sobrante} grados , sus grados convertidos en radianes es de ${radian}`)

    }

}

console.log(angulo(380))


const angulo = (G) => {
    if (G <= 90) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el primer cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G <= 180) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el segundo cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G <= 270) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el tercer cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G <= 360) {
        radian = Math.round(G * 3.1416) / 180
        return (`Se encuntra en el cuarto cuadrante sus grados convertidos en radianes es de ${radian}`)
    } else if (G > 360) {
        sobrante = (360 - G)
        radian = Math.round(sobrante * 3.1416) / 180
        return (`Se encuntra en el cuadrante que corresponde a ${sobrante} grados , sus grados convertidos en radianes es de ${radian}`)

    }

}

console.log(angulo(338))


/* Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, 
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores */
function nnota(nota) {
    if (nota < 2) {
        return ('La nota ingresada es Deficiente')
    } else if (nota < 4) {
        return ('La nota ingresada es Insuficiente')
    } else if (nota < 6) {
        return ('La nota ingresada es Aceptable')
    } else if (nota < 8) {
        return ('La nota ingresada es Buena')
    } else if (nota <= 10) {
        return ('La nota ingresada es Excelente')
    } else {
        return ('La nota es incorrecta')
    }

}
console.log(nnota(12))



const nnota = (nota) => {
    if (nota < 2) {
        return 'La nota ingresada es Deficiente'
    } else
    if (nota < 4) {
        return 'La nota ingresada es Insuficiente'
    } else if (nota < 6) {
        return 'La nota ingresada es Aceptable'
    } else if (nota < 8) {
        return 'La nota ingresada es Buena'
    } else if (nota <= 10) {
        return 'La nota ingresada es Excelente'
    } else {
        return 'La nota es incorrecta'
    }
}

console.log(nnota(10))

/* Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el 
valor del medio es 11. No use operadores lógicos*/


function medio(num1, num2, num3) {
    if ((num2 > num1) == (num2 < num3)) {
        return (`El numero del medio es ${num2}`)
    } else if ((num1 > num2) == (num1 < num3)) {
        return (`El numero del medio es ${num1}`)
    } else {
        return (`El numero del medio es ${num3}`)
    }
}
console.log(medio(14, 3, 30))



const medio = (num1, num2, num3) => {
    if ((num2 > num1) == (num2 < num3)) {
        return `El numero del medio es ${num2}`
    } else
    if ((num1 > num2) == (num1 < num3)) {
        return `El numero del medio es ${num1}`
    } else {
        return `El numero del medio es ${num3}`
    }
}
console.log(medio(14, 3, 30))

/*Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo 
los cálculos así:
Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 
200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que 
permita calcular el costo de una llamada dados los minutos de duración. */

function telefono(min) {

    if (min <= 3) {
        return (`El costo es de 200 pesos`)
    } else if (min > 3) {
        var minp = 200
        var minutos = min - 3
        var minutos = ((minutos * 50) + minp)
        return (`El costo de los minutos es de ${minutos}`)
    }
}

console.log(telefono(5))

const telefono = (min) => {

    if (min <= 3) {
        return (`El costo es de 200 pesos`)
    } else if (min > 3) {
        var minp = 200
        var minutos = min - 3
        var minutos = ((minutos * 50) + minp)
        return (`El costo de los minutos es de ${minutos}`)
    }
}

console.log(telefono(5))






//CICLOS 

/* Encontrar un número natural n más pequeño tal que la suma 
de los n primeros números naturales (1 + 2 + 3 + 4…..) 
exceda de una cantidad (máximo) introducida por el teclado. 
Es decir cuantos números de la serie de los naturales debo 
sumar para superar el dato máximo.  */

function maximo(num) {
    var sum = 0
    var a = 1
    var b = 0
    while (sum < num) {
        sum = sum + a
        b = b + 1
        a = a + 1
    }
    return (`${b} numeros se necesitaron para superar a ${num}`)
}
console.log(maximo(6))

const maximo = (num) => {
    var sum = 0
    var a = 1
    var b = 0
    while (sum < num) {
        sum = sum + a
        b = b + 1
        a = a + 1
    }
    return (`${b} numeros se necesitaron para superar a ${num}`)
}
console.log(maximo(6))

/* Calcular la operación x n sin utilizar la función pow */
function potencia(num, p) {
    var total = 1
    for (let i = 0; i < p; i++) {
        total = total * num

    }
    return (`El resultado es ${total}`)

}
console.log(potencia(12, 3))



const potencia = (num, p) => {
    var total = 1
    for (let i = 0; i < p; i++) {
        total = total * num

    }
    return `El resultado es ${total}`

}
console.log(potencia(12, 3))

/*Determinar si un numero es o no es primo*/

function primo(num) {
    var cprimos = 0
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            var cprimos = cprimos + 1
        }
    }
    if (cprimos > 2) {
        return (`${num} No es primo`)
    } else {
        return (`${num} Es primo`)


    }

}
console.log(primo(67))



const primo = (num) => {
    var cprimos = 0
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            var cprimos = cprimos + 1
        }
    }
    if (cprimos > 2) {
        return `${num} No es primo`
    } else {
        return `${num} Es primo`


    }
}
console.log(primo(67))


/* Determinar los divisores de un número introducido por
teclado */

function divi(num) {
    var cdivisor = 0

    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            var cdivisor = cdivisor + 1
        }

    }
    return (`los numeros divisibles para ${num}  son:   ${cdivisor} `)
}
console.log(divi(66))


const divi = (num) => {
    var cdivisor = 0

    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            var cdivisor = cdivisor + 1
        }

    }
    return (`los numeros divisibles para ${num}  son:   ${cdivisor} `)
}
console.log(divi(66))

/*Solicitar 2 números al usuario e imprimir el cociente y el 
residuo del mayor en el menor sin utilizar la división ni el mod.  */
function ejercicio11(n1, n2) {

    var dividendo;
    var divisor;
    var multiplo = divisor;
    var cociente = 0
    var residuo
    if (n1 > n2) {
        dividendo = n1
        divisor = n2
    } else {
        dividendo = n2;
        divisor = n1;
    }

    for (multiplo; multiplo < dividendo; multiplo = multiplo + divisor) {
        cociente += 1
    }

    residuo = dividendo - (cociente * divisor);
    return `${dividendo}, ' / ', ${divisor}, '\ncociente: ', ${cociente}, '\nresiduo:', ${residuo}`
}
console.log(ejercicio11(63, 27))



const ejercicio11 = (n1, n2) => {

    var dividendo;
    var divisor;
    var multiplo = divisor;
    var cociente = 0
    var residuo
    if (n1 > n2) {
        dividendo = n1
        divisor = n2
    } else {
        dividendo = n2;
        divisor = n1;
    }

    for (multiplo; multiplo < dividendo; multiplo = multiplo + divisor) {
        cociente += 1
    }

    residuo = dividendo - (cociente * divisor);
    return `${dividendo}, ' / ', ${divisor}, '\ncociente: ', ${cociente}, '\nresiduo:', ${residuo}`
}
console.log(ejercicio11(63, 27))



/*DESVIACION ESTANDAR*/

function desviacion(t) {
    let v = []
    let sum = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 20)
        sum = sum + v[i]
    }
    var prom = sum / v.length
    for (let t = 0; t < v.length; t++) {
        var oper1 = ((v[t] - prom) ** 2)

    }

    let opr2 = Math.trunc(oper1 / v.length)
    v.sort();
    console.log('el arreglo es', v)
    console.log('La suma de todo es', sum)
    console.log('El promedio es', prom)
    console.log('la suma es ', oper1)
    console.log('al final la desviacion estandar', opr2)
}
desviacion(7)



const desviacion = (t) => {
    let v = []
    let sum = 0
    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 20)
        sum = sum + v[i]
    }
    var prom = sum / v.length
    for (let t = 0; t < v.length; t++) {
        var oper1 = ((v[t] - prom) ** 2)

    }

    let opr2 = Math.trunc(oper1 / v.length)
    v.sort();
    console.log('el arreglo es', v)
    console.log('La suma de todo es', sum)
    console.log('El promedio es', prom)
    console.log('la suma es ', oper1)
    console.log('al final la desviacion estandar', opr2)
}
desviacion(7)



/*MODA numero que mas se repite*/

function md(numeros) {
    var numeros = [1, 5, 2, 3, 3, 4, 5];
    var duplicados = [];

    var tamArray = [...numeros].sort();

    for (let i = 0; i < tamArray.length; i++) {
        if (tamArray[i + 1] == tamArray[i]) {
            duplicados.push(tamArray[i]);
        }
    }
    return duplicados
}

console.log(md())



const md = (numeros) => {
    var numeros = [1, 5, 2, 3, 3, 4, 5];
    var duplicados = [];

    var tamArray = [...numeros].sort();

    for (let i = 0; i < tamArray.length; i++) {
        if (tamArray[i + 1] == tamArray[i]) {
            duplicados.push(tamArray[i]);
        }
    }
    return duplicados
}

console.log(md())



/*MEDIANA numero del centro*/

function medianaArr(arr1) {
    var concat = arr1;
    concat = concat.sort(
        function(a, b) { return a - b });

    console.log(concat);
    var length = concat.length;

    if (length % 2 == 1) {

        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]
    } else {
        console.log((concat[length / 2] +
            concat[(length / 2) - 1]) / 2);

        return (concat[length / 2] +
            concat[(length / 2) - 1]) / 2;
    }
}
arr1 = [2, 4, 4, 3, 9, 18, 11]

medianaArr(arr1)


const medianaArr = (arr1) => {
    var concat = arr1;
    concat = concat.sort(
        function(a, b) { return a - b });

    console.log(concat);
    var length = concat.length;

    if (length % 2 == 1) {

        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]
    } else {
        console.log((concat[length / 2] +
            concat[(length / 2) - 1]) / 2);

        return (concat[length / 2] +
            concat[(length / 2) - 1]) / 2;
    }
}
arr1 = [2, 4, 5, 3, 9, 18, 11]

medianaArr(arr1)


/*EJMPLO DE NUMEROS PRIMOS */
function primo(num) {
    var cont = 0
    for (let i = 0; i < num; i++) {
        num % i == 0 ? cont++ : cont = cont

    }
    // cont>2 ? return `no es primo` :
    if (cont > 2) {
        return ('NO ES PRIMO')
    } else {
        return ('ES PRIMO')
    }
}
console.log(primo(101))



/*OPERADOR TERNARIO*/
/*condicion? valor si verdadero: valor si falso*/
var x = 10
x % 2 == 0 ? console.log('par') : console.log('Impar')



if (x % 2 == 0) {
    console.log('par')
} else {
    console.log('Impar')
}


/* crear una funcion que lea una cadena de texto y diga cuantas vocales, 
cuantas consonantes tiene y cuantos valores diferentes de vocaes 
y consonantes */

/*function vcd(cadena) {
    var cc = 0
    var cv = 0
    var x = 0

    string t = 'hola soy tatiana'
    while (cadena[x]) {
        if (vocal = (cadena[x])) {
            cc++
        } else {
            cv++

        }
        x++

    }
    return cv && cc
}

console.log(vcd())´
Á