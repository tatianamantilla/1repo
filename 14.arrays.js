/*Los arreglos pueden ser simples o estrcuturados 

cmpuestos o estructuradosun aregloe sun conjunto de datos que se alamcenan sobre la misma variables 
siempre se empeza con el indice 0, tambien tiene un tamaño, os arreglos en java son dinamicos 
sutamañose svariable y puedecrecer enelrecorrido del programa 
*/

// no es lamanera adecuada para crear arreglos
let vector = []
vector[0] = 100;
vector[1] = 50;
vector[2] = 'sena';
vector[4] = 3;

console.log(typeof(vector));

//
let vec = new Array
vec[0] = 'yo'
vec[1] = 'amo'
vec[2] = 'programar'
console.log(vec)
vec[3] = [1, 2, 3]
console.log(vec)





let vector = []
let tam = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam)
for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100)

}
console.log(vector)
console.log('Tamaño de vector', +vector.length);

for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 == 0) {
        console.log(+vector[i], 'es par')
    } else {
        console.log(+vector[i], 'es impar')
    }
}

let raiz = []
let cuadrado = []
for (let i = 0; i < vector.length; i++) {
    cuadrado[i] = Math.pow(vector[i], 2)
    raiz[i] = Math.sqrt(vector[i], 2)
}
console.log(cuadrado)
console.log(raiz)

/*OPERACIONES PARA DESARROLAR CON ARREGLOS */

/*1- Sumar todos los elementos de un arreglo*/
let suma = 0
let vector = []
let tam = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam)
for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100)

}
console.log(vector)
console.log('Tamaño de vector', +vector.length);

for (let i = 0; i < vector.length; i++) {
    suma = suma + vector[i]
}
console.log('La suma de todos los numeros es', +suma)


/*2- Promediar los elementos de un arreglo*/
let suma = 0
let promedio = 0
let vector = []
let tam = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam)
for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100)

}
console.log(vector)
console.log('Tamaño de vector', +vector.length);
for (let i = 0; i < vector.length; i++) {
    suma = suma + vector[i]
    promedio = suma / vector.length
}
console.log('La suma de todos los numeros es', +suma)
console.log('El promedio de todos los numeros es', +promedio)

/*3- Obtener el numero mayor de los elementos de un arreglo*/

let vector = [],
    tamaño = Math.round((Math.random() * 20 - 10) + 10),
    mayor = 1
console.log('valor de variables tam:', +tamaño)
for (let i = 0; i < tamaño; i++) {
    vector[i] = Math.round(Math.random() * 100)
    if (vector[i] > mayor) {
        mayor = vector[i]
    }
}
console.log(vector)
console.log('El numero menor de todos los anteriores es: ' + mayor)

/*4- Obtener el numero  menor de los elementos de un arreglo*/
let vector = [],
    tamaño = Math.round((Math.random() * 20 - 10) + 10),
    menor = 100
console.log('valor de variables tam:', +tamaño)
for (let i = 0; i < tamaño; i++) {
    vector[i] = Math.round(Math.random() * 100)
    if (vector[i] < menor) {
        menor = vector[i]
    }
}
console.log(vector)
console.log('El numero menor de todos los anteriores es: ' + menor)

/*5- Buscar un elemento dentro de un arreglo*/
let vector = [],
    p = Math.round(Math.random() * 5)
tamaño = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tamaño)
for (let i = 0; i < tamaño; i++) {
    vector[i] = Math.round(Math.random() * 100)
}
console.log(vector)
console.log(+p)
console.log('El numero de la posicion es', vector[(p)])


/*6- ordenar un arreglo de menor a mayor (algoritmo de la burbuja)*/
var auxiliar = 0
var vector = []
var com = 0
var pos = 0
var vector = []
var vector = []
var tamaño = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tamaño)
for (let i = 0; i < tamaño; i++) {
    vector[i] = Math.round(Math.random() * 100)


    for (let i = 1; i < vector.length; i++) {
        for (let j = vector.length - 1; j >= i; j--) {
            com = pos + 1
            if (vector[j - 1] > vector[j]) {
                pos = pos + 1
                auxiliar = vector[j - 1]
                vector[j - 1] = vector[j]
                vector[j] = auxiliar

            }
        }
    }
}
console.log('Los numeros de menor a mayor son')
console.log(vector)



/*8- ordenar un arreglo de mayor a menor (algoritmo de la burbuja)*/


var auxiliar = 0
var vector = []
var com = 0
var pos = 0
var vector = []
var vector = []
var tamaño = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tamaño)
for (let i = 0; i < tamaño; i++) {
    vector[i] = Math.round(Math.random() * 100)


    for (let i = 1; i < vector.length; i++) {
        for (let j = vector.length - 1; j >= i; j--) {
            com = pos + 1
            if (vector[j - 1] < vector[j]) {
                pos = pos + 1
                auxiliar = vector[j - 1]
                vector[j - 1] = vector[j]
                vector[j] = auxiliar

            }
        }
    }
}
console.log('Los numeros de mayor a menor son')
console.log(vector)




/*La media suma de todos los datos y division de ste resultado*/
let suma = 0
let media = 0
let vector = []
let tam = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam)
for (let i = 0; i < tam; i++) {
    vector[i] = Math.round(Math.random() * 100)

}
console.log(vector)
console.log('Tamaño de vector', +vector.length);
for (let i = 0; i < vector.length; i++) {
    suma = suma + vector[i]
    media = suma / vector.length
}
console.log(+suma, '/', +tam)
console.log('La media es ', +media)



/* La mediana si el numero de valores es par se tiene 
que hacer la media de esos dos pero si es impar se toma
 el valor central */


/*moda es el valor que mas se repite*/

let v=[],
t=Math.round((Math.random()*20-10)+10)
maxr = 0
console.log('Valor variable tam= ,'+t)
for (let i=0; i<t; i++){
     v[i]=Math.round(Math.random()*100)
}
console.log(v)
for (let l = 0; l < v.length; l++) {
var numr = 0
for (let ñ = l + 1; ñ < v.length; ñ++) 
{ if (v[1] == v[ñ]) {
numr = numr + 1}

if (numr>maxr) {
     moda = v[l]
     maxr = numr
}
}
}
console.log('la moda es:'+moda)

/*Desviacion estandar*/

let v=[],
t=Math.round((Math.random()*20-10)+10)
p = 0
pf = 0 
d = 0 
sd = 0
dese = 0
console.log(`variable tam= `+t);
for (let i=0; i<t; i++){
v[i]=Math.round(Math.random()*100)
p = p + v[i]
} pf =Math.trunc (p / v.length)
console.log(v)
for (let i = 0; i < v.length; i++) { 73
d =Math.pow((v[i]-pf), 5)
sd = sd + d
}
dese =sd / v.length
console.log('La desviacion estandar es: ',+dese)