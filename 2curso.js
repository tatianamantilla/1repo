//definicion de varibles
var nombre = 'Tatiana';
console.log(nombre);
/*typeof nos muestra que tipo de 
datos es, es decir, si es boleano, 
entero string etc.*/
console.log(typeof(nombre));


var edad = 16;
console.log(edad);
console.log(typeof(edad));
edad = 'cinco'
console.log(edad);
console.log(typeof(edad))


/* java no lee , para los 
numeros decimales, para estos
necesitamos . */
var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tienetrabajo = false;
console.log(tienetrabajo)
console.log(typeof(tienetrabajo))
    /*aparece undefined cuando 
    definimos la variables mas 
    no el valor de esta misma */
var puestodetrabajo;
console.log(puestodetrabajo);

puestodetrabajo = null;
console.log(puestodetrabajo)

/*Los ayudan a comentar una seccion
esto nos ayuda ser un poco mas
organizados con nuestros codigos
como por ejemplo explicar para 
que sirve una linea o un bloque 
especifico para comentar una sola linea 
se empieza con dos / y para comentar 
varias lineas se pone /* y se cierra
de igual manera*/

/* operadores matematicos +, -,*,/ */
var edadTatiana, edadLaura, diferenciaEdad;
var SumaEdades, yearTatiana, yearLaura, yearactual;

edadTatiana = 24;
edadLaura = 11;
yearactual = 2022;

diferenciaEdad = edadTatiana - edadLaura;
SumaEdades = edadTatiana + edadLaura;

yearTatiana = yearactual - yearTatiana;
yearLaura = yearactual - yearLaura;

/*une los valores ya que tiene tipado
automatico al momento de eso concatena
y eso es unir basicamnete los 
dos valores*/
console.log(diferenciaEdad);
console.log(SumaEdades);
console.log('Año en que nacio Tatiana' + yearTatiana);
console.log('Año en que nacio Laura' + yearLaura);
console.log(yearactual * 5)
console.log(yearactual / 2)

/*Operadores logicos, unarios y de asignacion */

//operadores logicos son comparativos
var edadTatiana, edadLaura, diferenciaEdad;
var SumaEdades, yearTatiana, yearLaura, yearactual;

edadTatiana = 24;
edadLaura = 11;
yearactual = 2022;

var mayortatiana = !(edadTatiana == edadLaura);
console.log(mayortatiana);

/*operadores unarios, ++incremento y
--decremento toca ponerlo antes debido
a que el programa realiza las operaciones
segun el orden*/

console.log(++edadTatiana);

//asigancion, +=,-=,*=,/=, %=
// %= es igual que el mod 
var a = 12;
var b = 5;
var c = a % 5;
console.log(c);
a += b;
console.log(a)

