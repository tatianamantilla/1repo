/*Es una forma para crear promesas, forma mas limpia,  */



function saysomething(x) {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Little Something ' + x)
        }, 2000);
    })

}

async function talk(x) {
    const words = await saysomething(x);
    console.log(words)

}
talk(2)
talk(4)
talk(8)

//-------------------------------
//FUNCION CLASICA 
function saysomething(x) {

    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve('Little Something ' + x)
        }, 2000);
    })


}

async function talk(x) {
    const words = await saysomething(x);
    console.log(words)

}
talk(2)
talk(4)
talk(8)

/*Este ejercicio demostrará cómo usar await para esperar una promesa dentro de un asíncrono
función. Usando await y async, cree un contador con timeout() e incremente un
contravalor global.
1. Cree un valor global para un contador.
2. Cree una función que tome un argumento. Devolver el resultado de una nueva
Promesa, establecer una función setTimeout() que contendrá la resolución
instancia.
3. Incremente el contador dentro de setTimeout(), agregando uno cada segundo.
Resolver la Promesa con el valor de la ficha y el valor de la
variable que estaba en el argumento de la función.
4. Cree una función asíncrona que envíe a la consola el valor de
el contador global y el valor del argumento de la función.
5. Cree una variable para capturar el valor de resolución devuelto de la espera
función. Envíe ese resultado a la consola.
6. Cree un ciclo para iterar 10 veces, incrementando el valor e invocando el
función asíncrona, pasando el valor de la variable de incremento como parámetro
en la función.
Los resultados deberían ser similares a los siguientes:*/


var contador = 0

function t(elemento) {
    return new Promise(resolve => {
        setTimeout(() => {
            contador = contador + 1
            resolve('x cuenta ' + contador)
        }, 1000);
    })

}

async function a(elemento) {
    console.log('se repite', contador)
    const al = await t(elemento)
    console.log(al)
}

for (let i = 1; i <= 10; i++) {
    a(i);
}


//----------------------------------------------------------------
// ASYN Y AWAIT 

var cadena = 'Oh my God, its so amazing, Im super happy Woau'

function general(cadena) {
    return new Promise((resolve => {
                resolve()
                console.log('--------------------------\n')
                console.log('Cadena original ')
                console.log(cadena)


            }),


            async function contadormayus(cadena) {
                console.log('Se esta contando mayusculas segun un then ')
                var contador = 0
                var may = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                for (var i = 0; i < may.length; i++) {
                    for (var t = 0; t < cadena.length; t++)
                        if (may[i] == cadena[t]) {
                            contador += 1

                        }
                    console.log(`${cadena}  tiene , ${contador},  Mayusculas \n`)
                }


            },


            async function contadorminu(cadena) {
                console.log('Se esta contando minusculas segun un then ')
                var contadorm = 0
                var min = 'abcdefghijklmnopqrstuvwxyz'
                for (var i = 0; i < min.length; i++) {
                    for (var t = 0; t < cadena.length; t++)
                        if (min[i] == cadena[t]) {
                            contadorm += 1

                        }

                }
                const contadorx = await contadormayus(cadena)
                console.log(`${cadena}  tiene , ${contadorm},  Minusculas \n `)
                console.log(contadorx)
            },



            async function mimaor(cadena) {
                setTimeout(() => {


                    console.log('Cadena en minuscula ')
                    console.log(cadena.toLowerCase())
                    console.log('--------------------------- \n ')
                    console.log('Cadena en mayusculas')
                    console.log(cadena.toUpperCase())
                    const contadorc = await contadorminu(cadena)
                }, 1000);
            },


            //-------------------------------------------------

            let vector = []

            function llenaArreglo() {

                return new Promise(resolve => {
                    resolve()
                    reject(new Error('Hay un error'))
                    let tamaño = Math.round(Math.random() * 100)
                    for (let i = 0; i < tamaño; i++) {
                        vector[i] = Math.round(Math.random() * 100)
                    }
                    console.log(vector, '\n')
                    console.log('El tamaño del arreglo es de', tamaño, '\n')
                })
            }



            async function sumarArreglo() {
                let suma = 0
                console.log('Se esta sumando apartir de un then')
                for (let i = 0; i < vector.length; i++) {
                    suma += vector[i]
                    const suma1 = await sumarArreglo()
                    console.log(suma1)
                }


                console.log('la suma del arreglo es = ', suma, '\n')
            }

            async function promedioarreglo() {
                console.log('Se esta haciedo el promedio segun un then ')
                suma = 0;
                for (let i = 0; i < vector.length; i++) {
                    suma += vector[i];

                }
                let promedio = suma / vector.length
                console.log('El promedio es= ', promedio, '\n')

            }