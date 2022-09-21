// generalizacion = es un_ triangulito 
// composicion y agregacion = tiene un _ rombito
// set modificar, get obtener
//agregacion desde afuera 
//composicion desde adentro
class persona {
    constructor(nombre, documento) {
        this._nombre = nombre;
        this._documento = documento
    }
    get _nombre() {
        return this._nombre
    }
    get _documento() {
        return this._documento
    }
    set _nombre(nombre) {
        this._nombre = nombre
    }
    set _documento(documento) {
        this._documento = documento
    }
}


class aprendiz extends persona {
    constructor(nombre, documento, ficha) {
        super(nombre, documento)
        this._ficha = ficha
    }
    get _ficha() {
        return this._ficha
    }
    set _ficha(ficha) {
        this._ficha = ficha
    }

}

let ob

let ob1 = new persona('Tatiana Martinez', 12345)
let ob2 = new aprendiz('Charlie Bautista', 76543, 'ADSI')
console.log(ob1)
console.log(ob2)

/*Ejercicios clase */
/*Una compañía editorial produce tanto libros impresos como audio-libros en discos compactos.
 Diseñe una clase denominada Publicación que almacene el título (cadena) y el precio (numérico real)
de una publicación. A partir de esta clase, derive dos clases: Libro a la cual le agregue el número 
de páginas (entero) y CD, a la cual le agregue eltiempo de reproducción en minutos (numérico real). 
Cada una de las clases debe tener propiedades para acceder a sus respectivos datos. Elabore un diagrama 
de clases UML indicando las relaciones de herencia y codifique un sistema mediante el cual se generen 

instancias de las clases Libro y CD, donde el usuario capture sus datos y se inserten en los respectivos 
objetos. Diseñe la forma que se muestra a continuación.*/

class editorial {
    _publicaciones = []
    constructor(nombre, nit) {
        this._nombre = nombre;
        this._nit = nit;
    }
    agregar(publicacion) {
        this._publicaciones.push(publicacion)

    }
    get publicaciones() {
        return this._publicaciones
    }
}

class publicacion {
    constructor(titulo, precio) {
        if (typeof(titulo) === 'string') {
            this._titulo = titulo;
        } else {
            console.log(`${titulo} no es admitido`)
        }
        if (typeof(precio) === 'number') {
            this._precio = precio;
        } else {
            console.log(`${precio} no es admitido`)
        }
    }
}


class libro extends publicacion {
    constructor(titulo, precio, num_pag) {
        super(titulo, precio);
        if (typeof(num_pag) === 'number') {
            this._num_pag = num_pag;
        }
    }
}


class cd extends publicacion {
    constructor(titulo, precio, tiempo) {
        super(titulo, precio);
        if (typeof(tiempo) === 'number') {
            this._tiempo = tiempo;
        }
    }
}
let obj = new editorial('Negrete', '12345');
let obj1 = new libro('Satanas', 20000, 260);
let obj2 = new libro('Un diablo en la botella', 4000, 50);
let obj3= new libro('A traves de mi ventana', 40000, 280)
let obj4= new libro('el principe', 50000,254)
obj.agregar(obj1);
obj.agregar(obj2);
obj.agregar(obj3);
obj.agregar(obj4);


console.log(obj.publicaciones)





/*Una agencia vendedora de autos desea un sistema computacional para administrar los datos de sus 
vehículos y clasificarlos por tipo. Todos los autos tienen los siguientes datos:
· Número de serie del motor.
· Marca.
· Año.
· Precio.
Los vehículos se clasifican en autos compactos, autos de lujo, camionetas y vagonetas. Para los 
autos y vagonetas, también es importante almacenar la cantidad de pasajeros; mientras que para 
las camionetas se debe controlar la capacidad de carga en kgs. y la cantidad de ejes y de rodadas.
Modele este sistema con diagramas de clases en UML e instancie cada una de las clases, asignándole
datos mediante sus respectivas propiedades. Agregue un constructor con parámetros a cada clase 
para inicializar sus datos e invoque el constructor de la clase base desde el constructor de 
cada clase derivada (no utilice constructores default).
Implemente la sobrescritura del método ToString() para mostrar los datos de cada tipo de auto.
NOTA: No se permiten componentes duplicados en las clases ni clases vacías (sin elementos).*/
// PARE AQUI¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡
class Vehiculo {
    constructor(Nro_serie, marca, año, precio) {
        this._Nro_serie = Nro_serie;
        this._marca = marca;
        this._año = año;
        this._precio = precio
    }

}

class camionetas extends Vehiculo {
    constructor(Nro_serie, marca, año, precio, Kilometraje, capacidad) {
        super(Nro_serie, marca, año, precio)
        this._kilometraje = Kilometraje;
        this._capacidad = capacidad;
    }
}


class autosCompactos extends Vehiculo {
    constructor(Nro_serie, marca, año, precio, cantidad_pasajeros) {
        super(Nro_serie, marca, año, precio)
        this._cantidad_pasajeros = cantidad_pasajeros;
    }
}

class autosLujos extends autosCompactos {
    constructor(Nro_serie, marca, año, precio, cantidad_pasajeros, caballo_fuerza) {
        super(Nro_serie, marca, año, precio, cantidad_pasajeros)
        this._caballo_fuerza = caballo_fuerza;

    }

}

class vagonetas extends autosCompactos {
    constructor(Nro_serie, marca, año, precio, cantidad_pasajeros, sistema_frenos) {
        super(Nro_serie, marca, año, precio, cantidad_pasajeros)
        this._sistema_frenos = sistema_frenos;
    }

}


let c = new camionetas(23, 'chebrolet', 2012, 2000, '2500km', '40kg')


camionetas.prototype.toString = function camioneString() {
    var retorno = "El numero de serie es: " + this._Nro_serie + " con marca " + this._marca +
        "del año " + this._año + " con precio de " + this._precio + "con un kilometraje de " + this._kilometraje +
        "con capacidad de  " + this._capacidad;
    return retorno;

}
console.log(c.toString())