/* llenar tres arreglos con numeros aleatorios, el tamaño de los areglos estara entre mminimo 5 y maximo 20 elmentos */

let ar1 = []
let tam1 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
for (let i = 0; i < tam1; i++) {
    ar1[i] = Math.round(Math.random() * 100)

}
console.log(ar1)
console.log('')

let ar2 = []
let tam2 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam2:', +tam2)
for (let i = 0; i < tam2; i++) {
    ar2[i] = Math.round(Math.random() * 100)

}
console.log(ar2)
console.log('')

let ar3 = []
let tam3 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam3:', +tam3)
for (let i = 0; i < tam3; i++) {
    ar3[i] = Math.round(Math.random() * 100)

}
console.log(ar3)
console.log('')





/*1. Cual de los tres arreglos es el mas grande */
let ar1 = []
let tam1 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
for (let i = 0; i < tam1; i++) {
    ar1[i] = Math.round(Math.random() * 100)

}
console.log(ar1)
console.log('')

let ar2 = []
let tam2 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam2:', +tam2)
for (let i = 0; i < tam2; i++) {
    ar2[i] = Math.round(Math.random() * 100)

}
console.log(ar2)
console.log('')

let ar3 = []
let tam3 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam3:', +tam3)
for (let i = 0; i < tam3; i++) {
    ar3[i] = Math.round(Math.random() * 100)

}
console.log(ar3)
console.log('')

if ((tam1 > tam2) == (tam2 < tam3)) {
    console.log(tam1, +tam2, +tam3, 'El arreglo mayor es', +tam2)
} else if ((tam1 > tam2) == (tam2 < tam3)) {
    console.log(tam1, +tam2, +tam3, 'El arreglo mayor es', +tam3)
} else
    console.log(tam1, +tam2, +tam3, 'El arreglo mayor es', +tam1)





/*2. De cada uno diga qeu cantidad de numeros pares y que cantidad de numeros impares hay */
let ar1 = []
let tam1 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam1:', +tam1)
for (let i = 0; i < tam1; i++) {
    ar1[i] = Math.round(Math.random() * 100)

}
console.log(ar1)
console.log('')
var contadorpar1 = 0
var contadorimpar1 = 0
for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] % 2 == 0) {
        var contadorpar1 = contadorpar1 + 1

    } else {
        var contadorimpar1 = contadorimpar1 + 1


    }
}
console.log('Total numeros pares arreglo 1  de:', +contadorpar1)
console.log('Total numeros impares arreglo 1  de:', +contadorimpar1)
console.log('')
console.log('')



let ar2 = []
let tam2 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam2:', +tam2)
for (let i = 0; i < tam2; i++) {
    ar2[i] = Math.round(Math.random() * 100)

}
console.log(ar2)
console.log('')
var contadorpar2 = 0
var contadorimpar2 = 0
for (let i = 0; i < ar2.length; i++) {
    if (ar2[i] % 2 == 0) {
        var contadorpar2 = contadorpar2 + 1

    } else {
        var contadorimpar2 = contadorimpar2 + 1


    }
}
console.log('Total numeros pares arreglo 2  de:', +contadorpar2)
console.log('Total numeros impares arreglo 2  de:', +contadorimpar2)
console.log('')
console.log('')



let ar3 = []
let tam3 = Math.round((Math.random() * 20 - 5) + 5)
console.log('valor de variables tam3:', +tam3)
for (let i = 0; i < tam3; i++) {
    ar3[i] = Math.round(Math.random() * 100)
}
console.log(ar3)
console.log('')
var contadorpar3 = 0
var contadorimpar3 = 0
for (let i = 0; i < ar3.length; i++) {
    if (ar3[i] % 2 == 0) {
        var contadorpar3 = contadorpar3 + 1
    } else {
        var contadorimpar3 = contadorimpar3 + 1
    }
}
console.log('Total numeros pares arreglo 3  de:', +contadorpar3)
console.log('Total numeros impares arreglo 3  de:', +contadorimpar3)

/*3. RELLENAR LOS ARREGLOS MAS PEQUEÑOS CON LOS DATOS QUE LE SOBRAN AL ARREGLOS MAS GRANDE*/