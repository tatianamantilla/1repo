/*Escriba una funcion que llene un array con n numeros (n debe de ser minimo 5 y maximo 25) */
/*function op1() {

    let ar1 = []
    let tam1 = Math.round((Math.random() * 25 - 5) + 5)
    console.log('valor de variables tam1:', +tam1)
    for (let i = 0; i < tam1; i++) {
        ar1[i] = Math.round(Math.random() * 100)

    }
    console.log(ar1)
}
op1()*/


/*Escriba una funcion que reciba el arreglo con la diferencia del punto anteriro y diga de
 cada uno cuanto le falta o cuanto le sobra segun el caso con referencia a la media */

 /*Escriba una funcion que reciba el array lleno y retorne otro arreglo con la diferencia 
que hay entre el valor de cada elemento y la media del arreglo */


let ar1 = []
let tam1 = Math.round((Math.random() * 25 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
function op1(ar1,tam1) {

    for (let i = 0; i < tam1; i++) {
        ar1[i] = Math.round(Math.random() * 100)

    }
    console.log(ar1)
}
op1(ar1,tam1)

var media=0
var suma=0
function m(ar1,media) {
    for (var i = 0; i < ar1.length; i++) {
        suma = suma + ar1[i]
        media = (suma / ar1.length)

    }
    console.log('La media es ' + media)
}
m(ar1,tam1) 



var d = []
function diferencias(d,ar1,tam1,media) {
    var f = 0
    var s = 0
 
    for (let a = 0; a < tam1; a++) {
        if (media < ar1[a]) {
            f = ar1[a] - media
            d[a]=f
        } else {
            s = media - ar1[a]
            d[a]=s

        }
    }
 
    console.log('diferencias',+d,'faltante',+f,'sobrante',+s)
}
    diferencias(ar1,tam1,media,d)

/*

function op1() {
    
    
    let ar1 = []
    let suma = 0
    let tam1 = Math.round((Math.random() * 25 - 5) + 5)
    console.log('valor de variables tam1:', +tam1)
    for (let i = 0; i < tam1; i++) {
        ar1[i] = Math.round(Math.random() * 100)

    }
    console.log(ar1)
    
}




let ar1 = []
let suma = 0
let tam1 = Math.round((Math.random() * 25 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
for (let i = 0; i < tam1; i++) {
    ar1[i] = Math.round(Math.random() * 100)

}
console.log(ar1)
for (var i = 0; i < ar1.length; i++) {
    suma = suma + ar1[i]
    media = (suma / ar1.length)

}
console.log('La media es ' + media)

 
}



