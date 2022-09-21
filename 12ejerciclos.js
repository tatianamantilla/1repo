/*1. Determinar los divisores de un número introducido por
teclado */
var cdivisor = 0
var num = Math.round(Math.random() * 80)
console.log(num)
for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        console.log(+num, 'Es divisible para: ', +i)
        var cdivisor = cdivisor + 1
            //console.log (+num,'Es divisible para: ')
    }

}
console.log('los numeros divisibles para ', +num, ' son: ', +cdivisor)

/*2. Determinar si un numero es o no es primo*/
/*Un numero primo es el cual solo tiene dos divisores unicamente*/
var cprimos = 0
var num = Math.round(Math.random() * 80)
console.log(num)
for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        var cprimos = cprimos + 1
            //console.log (+num,'Es divisible para: ')
    }
}
if (cprimos > 2) {
    console.log('El numero', +num, 'NO es primo')
} else {
    console.log('El numero', +num, 'Es primo')

}


/*3. Determinar si un número es o no es perfecto. Un numero es
perfecto si la suma de sus divisores sin incluir el propio
número es igual a este*/

var divisor = 1
var suma = 0
var num = Math.round(Math.random() * 8)
console.log(num)
while (divisor < num) {
    if (num % divisor == 0) {
        var suma = suma + divisor
    }
    divisor = divisor + 1
}

if (suma != num) {
    console.log(+num, 'NO es un numero perfecto')

} else {
    console.log(+num, 'Es un numero perfecto')
}

/* 4 Determinar cuales y cuantos números perfectos hay entre 1 y 
1000?  */

var totalper = 0
for (num = 1; num <= 1000; num++) {
    var contador = 0
    for (var i = 1; i < num; i++) {
        var residuo = (num % i)
        if (residuo == 0) {
            contador = contador + i

        }
    }

    if (contador == num) {
        console.log('El numero', +num, 'es un numero perfecto')
        var totalper = totalper + 1
    }
}

console.log('Hay un total de numeros perfectos de', +totalper)

/* 5 ¿Cuáles y cuántos son los números primos comprendidos 
entre 1 y 1000? */

var total = 0
for (let a = 0; a <= 1000; a++) {
    var contador = 0
    for (let i = 1; i <= a; i++) {
        var res = (a % i)
        if (res == 0) {
            contador = contador + 1
        }
    }
    if (contador == 2) {
        console.log(+a, 'Es un numero primo')
        var total = total + 1
    }
}
console.log('')
console.log('El total de numeros primos es de', +total)

/*6. Calcular el máximo de números positivos introducidos por 
teclado, sabiendo que metemos números hasta que 
introduzcamos uno negativo. El negativo no cuenta. */

contador = 0
num = 1
while (num > 0) {
    var max = 4
    var min = -5
    var num = Math.floor(Math.random() * (max - min) + min)
    console.log(+num)

    if (num > 0) {
        contador = contador + 1
    }
}
console.log('La cantidad de numeros positivos ingresados es ' + contador)

/*7. Encontrar un número natural n más pequeño tal que la suma 
de los n primeros números naturales (1 + 2 + 3 + 4…..) 
exceda de una cantidad (máximo) introducida por el teclado. 
Es decir cuantos números de la serie de los naturales debo 
sumar para superar el dato máximo.  */

var num = Math.round(Math.random() * 20)
console.log(+num)
var sum = 0
var a = 1
var b = 0
while (sum < num) {
    sum = sum + a
    b = b + 1
    console.log(+sum, '+', a)
    a = a + 1
}
console.log(+b, 'Numeros se necesitaron para superar a', +num)

/* 8. Determinar cuales son los múltiplos de 5 comprendidos entre 
1 y N */

var n = 0
var num = Math.round(Math.random() * 200)
console.log(+num, 'es el rango mayor')
for (var i = 1; i <= num; i++) {
    if (i % 5 == 0) {
        console.log(+i, 'Es multiplo de 5')

    }
}

/* 9. Calcular la operación x n sin utilizar la función pow */
var total = 1
var nume = Math.round(Math.random() * 20)

var potencia = Math.round(Math.random() * 5)
console.log(+nume, 'elevado a', +potencia)
for (let i = 0; i < potencia; i++) {
    total = total * nume
}
console.log(+total)

/* 10. Algoritmo para hallar el m.c.d de dos números m y n por 
el algoritmo de Euclides.*/

var dividendo = 24
var divisor = 18
var x = [];
var residuo = dividendo % divisor
while (residuo != 0) {
    x.push(residuo);
    dividendo = divisor
    divisor = residuo
    residuo = dividendo % divisor

}
console.log(x[x.length - 1]);

/*11. Solicitar 2 números al usuario e imprimir el cociente y el 
residuo del mayor en el menor sin utilizar la división ni el mod.  */
var n1 = Math.round(Math.random() * (100 + 100) - 100);
var n2 = Math.round(Math.random() * (100 + 100) - 100);
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

console.log(dividendo, ' / ', divisor, '\ncociente: ', cociente, '\nresiduo:', residuo)



/*12. Escribir un programa que visualice la siguiente figura, 
utilizando ciclos. El usuario decide cuantas líneas quiere 
imprimir*/
var numf = Math.round(Math.random() * 30)
console.log(+numf, 'Lineas')

for (i = 0; i <= numf; i++) {
    var s = ''
    var contador = 0
    while (contador < i) {
        contador = contador + 1
        s = s + '*'
    }
    console.log(s)
}

/*13. Solicitar al usuario un número de hasta 9 dígitos e 
imprimirlo en orden contrario. Ej. digito 6754 imprimo 4576*/

var num = 1000
var d = 10;
var c;
var al = [];


do {
    c = Math.trunc(num / d);
    d = d * 10;
} while (c > 10);


do {
    c = Math.trunc(num / d);
    al.push(c)
    num = num % d;
    d = d / 10

} while (num != 0);

var i = al.length;
var rev = [];

for (i; i >= 0; i--) {
    rev.push(al[i])
}
console.log(rev.join(''));

/*14. Calcular todos los números de 3 cifras tales que la suma 
de los cubos de las cifras es igual al valor del número. */

var num;
var al;
var list = [];
var d;
var n;
var c;

for (num = 100; num <= 1000; num++) {
    al = 0;
    d = 100;
    n = num
    c = 0;
    do {
        c = Math.trunc(n / d);
        al += c ** 3
        n = n % d;
        d = d / 10


    } while (d != 0);
    if (al == num) {
        list.push(num);
    }
}
console.log('estos son los numeros cuya suma de los cubos de sus digitos equivale a su mismo numero: \n', list)


/*15. Diseñar e implementar un programa que solicite a su 
usuario un valor no negativo n y visualice la siguiente salida: 
1 2 3 ........ n-1 n 
1 2 3 ........ n-1 
......... 
1 2 3 
1 2 
1*/

var num = Math.round(Math.random() * (46 + 46) - 46);
var list = [];
var cadena = '';

console.log('el numero es igual a: ', num)
if (num > 0) {
    for (var i = 1; i <= num; i++) {
        cadena = cadena + ' ' + String(i);
        list.push(cadena)
    }
} else {
    console.log('numero negativo no funciona')
}

for (num -= 1; num >= 0; num--) {
    console.log(list[num])
}