/*una clase me permite crea un nuevo tipo de dato tienen estados 
y comportamientos, las variables normales solo tiene estados en si es el 
valor que puede guardar espacio de memoria donde se guarda ese valor, 
el comportamiento es atraves deuna funcion*/

/*Tres tipos de funciones, no se escribe fuction debido a que esta delimitado por los corchetes
como metodo no se usa la funciones flecha, solo las clasicas */

/* FUNCION CONSTRUCTOR: Siempre esta activado por predeterminacion el constructor default */
// Para crear un constructor se pone la palbra reservada constructor
// java script no fue creado para programacion hacia objetos
// NEW = objeto nuevo
// se usa this._ para evitar duplicidad


class animal {
    constructor(nombre) {
            this._nombre = nombre
                //console.log('Hiiii, se activo el constructor')
        }
        // camell case
        //getnombre (){
        //  return this.nombre
        //}

    get nombre() {
            return this._nombre
        }
        /* setnombre (nombre){
            this.nombre=nombre
        }*/
    set nombre(nombre) {
        this._nombre = nombre
    }
    mensaje() {
        console.log('Hiiii, soy un mesaje')

    }
}

var objeto1 = new animal('coneja');
console.log(typeof(objeto1))
    //objeto1.setNombre('Liebre)
objeto1nombre = 'Conejito domestico'
    //console.log(objeto1.getNombre())
console.log(objeto1.nombre)
    //console.log(typeof(objeto1))

/*function suma(num1,num2) {
    return num1+num2
}*/

class Numeros {
    constructor(vector) {
        this._vector = vector;
    }
    llenarVector(tam) {
        for (let i = 0; i < tam; i++) {
            this._vector[i] = Math.round(Math.random() * 100)

        }
    }

    get vector() {
        return this._vector;
    }

}

let vec = []
let ob = new Numeros(vec);
ob.llenarVector(10);
console.log(ob.vector);

/*Escriba métodos para suma, promedio, mayor, menor*/
/*Suma */
class suma {
    constructor(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;

    }
    sumar(_num1, _num2) {
        return new suma(console.log('Suma es=', this._num1 + this._num2));
    }
}
let objecta = new suma(Math.round(Math.random() * 20), Math.round(Math.random() * 20))
console.log(objecta._num1)
console.log(objecta._num2)
objecta.sumar();

/*Promedio*/
class prom {
    constructor(num1, num2, num3, num4, num5) {
        this._num1 = num1;
        this._num2 = num2;
        this._num3 = num3;
        this._num4 = num4;
        this._num5 = num5;
    }
    promedio(_num1, _num2, _num3, _num4, _num5) {
        return new prom(console.log('El promedio es=', (this._num1 + this._num2 + this._num3 + this._num4 + this._num5) / 5));
    }
}
let objectb = new prom(Math.round(Math.random() * 20), Math.round(Math.random() * 20), Math.round(Math.random() * 20), Math.round(Math.random() * 20), Math.round(Math.random() * 20))
console.log(objectb._num1)
console.log(objectb._num2)
console.log(objectb._num3)
console.log(objectb._num4)
console.log(objectb._num5)

objectb.promedio();




/*Menor */
class maymen {
    constructor(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;

    }
    mamn(_num1, _num2) {


        if (this._num1 < this._num2) {
            console.log('El numero menor es ' + this._num1)
        } else {
            console.log('El numero menor es ' + this._num2)

        }


    }
}

let objecte = new maymen(Math.round(Math.random() * 20), Math.round(Math.random() * 20))
console.log(objecte._num1)
console.log(objecte._num2)
objecte.mamn();




/*MAYOR */
class maymen {
    constructor(num1, num2) {
        this._num1 = num1;
        this._num2 = num2;

    }
    mamn(_num1, _num2) {


        if (this._num1 > this._num2) {
            console.log('El numero mayor es ' + this._num1)
        } else {
            console.log('El numero mayor es ' + this._num2)

        }


    }
}

let objectd = new maymen(Math.round(Math.random() * 20), Math.round(Math.random() * 20))
console.log(objectd._num1)
console.log(objectd._num2)
objectd.mamn();



/*Escriba una clase que represente un producto comercial de cualquier área. Debe tener constructor, setters, getters y un método para calcular el valor despues de IVA*/

class impuesto {
    constructor(producto, prproducto) {
        this._producto = producto;
        this._prproducto = prproducto
        this._ivaaplicado = 1.19

    }
    coniva(prproducto) {
        return new impuesto(console.log('el precio con iva es de ', this._prproducto * this._ivaaplicado))

    }
    siniva(prproducto) {
        return new impuesto(console.log('el precio SIN iva es de ', this._prproducto / this._ivaaplicado))
    }
    get producto() {
        return this._producto;

    }
    set producto(producto) {
        return this._producto = producto;
    }
}

var objecto = new impuesto('Arroz', 1800)
objecto.coniva()
objecto.siniva()



/*LIBRO */

class Persona {
    constructor(pnombre, papellido, pnombre1, papellido1) {
        this.pnombre = pnombre;
        this.papellido = papellido;
        this.pnombre1 = pnombre1;
        this.papellido1 = papellido1;
    }
    saludar() {
        console.log("hola mi nombre es ", this.pnombre);
        console.log('Hola Soy la amiga de', this.pnombre, 'y mi nombre es', this.pnombre1, this.papellido1)
    }
}
let P = new Persona('Tatiana', ' Martinez', 'Laura', 'Guarin');
P.saludar();



class Persona {
    constructor(pnombre, papellido, pnombre1, papellido1) {
        this.pnombre = pnombre;
        this.papellido = papellido;
        this.pnombre1 = pnombre1;
        this.papellido1 = papellido1;
    }
    saludar() {
        console.log("hola mi nombre es ", this.pnombre, this.papellido1);

    }
}
let t = new Persona('Tatiana', 'Martinez', 'Laura', 'Guarin');
t.saludar();





class persona {
    constructor(pnombre, papellido) {
        this.pnombre = pnombre;
        this.papellido = papellido;
    }
    saludar() {
        console.log("Hola hermosos, mi nombre es ", this.pnombre, this.papellido);
    }
    compliment(nombre, objecto) {
        return "Es muy lidno el " + objecto + " de " + nombre;
    }
}

let p = new persona("Tatiana", "Martinez");
p.saludar();
let compliment = p.compliment('Tatiana', "Celular");
console.log(compliment);