var n = Math.round((Math.random() * 10000 - 1000) + 1000)
console.log('Valor original de conejos', n)
    // var nacimiento = 5 //Math.round((Math.random() * (n * 10) / 100))
    // console.log('Nacimiento=', nacimiento)
    // var muertes = 2 //Math.round((Math.random() * (n * 3) / 100))
    // console.log('Muertes=', muertes)



// var a = n * (1 + r) ** t
// console.log(a)

for (let t = 0; t <= 10; t++) {

    var nacimiento = Math.round((Math.random() * (n * 10) / 100))
    console.log('Nacimiento=', nacimiento)
    var muertes = Math.round((Math.random() * (n * 3) / 100))
    console.log('Muertes=', muertes)
    var r = (nacimiento - muertes) / n
    console.log('Tasa de crecimiento', r) //'\n')

    var a = Math.round(n * (1 + r) ** t)
    console.log('Solucion formula algebraica', a, '\n')

}

/*una promesa es que el 10% de la poblacion final se le entregara una casa, calcular la cantidad de personas que tendra casa 
se debe imprimir 5 segundos */

function promesa(a) {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
            a = (a * 10) / 100

            resolve()
            console.log('El diez porciento de la ultima poblacion es de', a)
        }, 5000);

    })
}

promesa(a)


/*calcular el crecimiento neto de la poblacion en los 10 periodos teniendo de referencia el primero y el ultimo 5 segundos*/


function p2() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            var neto = (a * 100) / n
            neto = neto - 100
            resolve()
            console.log('El total neto es', neto)
        }, 5000);

    })
}

p2()