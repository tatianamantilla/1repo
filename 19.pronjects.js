/* PROGRAMACION ORIENTADA A OBJETOS
Se tienen que crear diferentes clases que son como un molde o plantilla,
se genera replicas que se llaman instancias con los mismos datos que se
llaman atributos, LOS OBJETOS SE CREAN APARTIR DE UNA CLASE
*Sirve par crear un tipo de dato personalizado

LAS CLASES DEBEN DE DETENER
  * Atributos datos propios de los elementos creados 
  * Funcionalidad, se realiza con una funcion (una funcion tiene ambito, 
   se determina por el bloque de una funcion determinado por los corchetes donde inicio y donde finaliza )  */

/* En java hay diferentes objetos a diferencia de otros porgramas
JAVASCRIPT= No tiene tipado, una variable no obliga a definir el tipo de dato
JAVA= Es fuertemente tipado, se calcula con bit 
las funciones ocupan memoria y son definidas en JAVASCRIPT como tipo de dato que se guarda */


class producto {}
var producto1 = new producto();
var producto2 = new producto();
var producto3 = new producto();
var producto4 = new producto();
var producto5 = new producto();
console.log(typeof(producto1))

/*OBJETOS LITERALES 
No son creados por clases, no tiene instancias, se necesita CONST, VAR OR LET
Datos que se identifican con claves
una clave es
las parejas se separan por comas 
Los valores tambien pueden ser funciones ya que son datos en javascript */

const x = []
var a = {}
console.log(typeof(a))



var persona = {
    nombre: 'Tatiana Martinez',
    id: 123456,
    datosCompletos: () => console.log(`${persona.nombre} ${persona.id}`)
}
console.log(persona.nombre)
console.log(persona['id'])
    //persona.datosCompletos();
    //añadir pareja
persona.direccion = 'calle 26b n° 3-20'
console.log(persona)
    //modificar 
persona.nombre = 'Diana'
console.log(persona)
    //eliminar
delete persona.id
console.log(persona)


/*4 objetos literales figuras geometricas area y perimetro */

/* PENTAGONO  */
var pentagono = {
    apotema: 3.4,
    lado: 5,
    nlado: 5,
    perimetro: function() {
        perimetro = pentagono.lado * pentagono.nlado
        return perimetro
    },
    area: function() {
        area = (pentagono.perimetro() * pentagono.apotema / 2)
        return area
    }

}
console.log(pentagono.perimetro())
console.log(pentagono.area())

/* CUADRADO */
var cuadrado = {
    lado: 12,
    nlado: 4,
    perimetro: function() {
        perimetro = cuadrado.lado * cuadrado.lado
        return perimetro
    },
    area: function() {
        area = cuadrado.lado * cuadrado.nlado
        return area
    }

}
console.log(cuadrado.perimetro())
console.log(cuadrado.area())

/* TRAPECIO ISOCELES */

var trapecio = {
    bmenor: 3.5,
    bmayor: 9.5,
    altura: 4,
    ladol: 3,
    ladosi: 4,
    nlado: 4,
    perimetro: function() {
        perimetro = (trapecio.ladol + trapecio.ladosi)
        return perimetro
    },
    area: function() {
        area = (((trapecio.bmayor + trapecio.bmenor) / 2) * trapecio.altura)
        return area
    }

}
console.log(trapecio.perimetro())
console.log(trapecio.area())

/* TRIANGULO*/

var triangulo = {
    altura: 15,
    lado1: 16.16,
    lado2: 16.16,
    base: 12,
    perimetro: function() {
        perimetro = triangulo.lado1 + triangulo.lado2 + triangulo.base
        return perimetro
    },
    area: function() {
        area = ((triangulo.base * triangulo.altura) / 2)
        return area
    }

}
console.log(triangulo.perimetro())
console.log(triangulo.area())


/*funcion que reciba como parametro un objeto debe de decir si es circunferencia o no */

/*function circun(object) {
    if (object.radio <= 1) {
        console.log('No tiene circunferencia')
    } else {
        var circun = object.radio ** 2 * 3.1416
        console.log('Si tiene circunferencia' + circun)
    }

}
circun(triangulo)*/

var triangulo = {
    altura: 15,
    lado1: 16.16,
    lado2: 16.16,
    base: 12,
    perimetro: function() {
        perimetro = triangulo.lado1 + triangulo.lado2 + triangulo.base
        return perimetro
    },
    area: function() {
        area = ((triangulo.base * triangulo.altura) / 2)
        return area
    }

}
console.log(triangulo.perimetro())
console.log(triangulo.area())


var circulo = {
    radio: 6,
    pi: 3.1416,
    rd: function() {
        return circulo.pi * Math.pow(circulo.radio, 2)

    }
}
console.log(circulo.rd())



function circunferencia(objeto) {
    if (objeto.hasOwnProperty('radio')) {
        console.log(`la circunferencia es: ${objeto.radio*3.1416*2}`)
    } else {
        console.log(`el objeto no puede generar una circunferencia`)
    }

}

circunferencia(circulo);