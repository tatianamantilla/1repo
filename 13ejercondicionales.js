/* 1. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el 
valor del medio es 11. No use operadores lógicos*/

var num1= Math.round(Math.random() * 30)
var num2= Math.round(Math.random() * 30)
var num3= Math.round(Math.random() * 30)
console.log(+num1,+num2,+num3)

if ((num2>num1)==(num2<num3)) {
    console.log ('El numero del medio es',+num2)
} else if ((num1>num2)==(num1<num3)) {
    console.log ('El numero del medio es',+num1)
} else {
console.log('El numero del medio es',+num3)
}

/* 2. Escribe un programa que pida tres números y que escriba si son los tres 
iguales, si hay dos iguales o si son los tres distintos */

var num1= Math.round(Math.random() * 2)
var num2= Math.round(Math.random() * 2)
var num3= Math.round(Math.random() * 2)
console.log(+num1,+num2,+num3)

if (num1==num2 && num1==num3) {
    console.log ('Los tres valores son iguales')
} else if (num1!=num2 && num1!=num3) {
    console.log ( 'Los tres valores son diferentes')
} else {
console.log('Dos valores son iguales ')
}


/* 3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número 
exceda los límites emita un mensaje y finalice el programa */

var max = 100000000000
var min = 1
var n = Math.floor(Math.random() * (max - min) + min)

if (n<10) {
    console.log ('El numero',+n,'tiene una cifra')
} else if (n<100) {
    console.log ('El numero',+n,'tiene dos cifra')
} else if (n<1000) {
    console.log ('El numero',+n,'tiene tres cifra')
} else if (n<10000) {
    console.log ('El numero',+n,'tiene cuatro cifra')
} else if (n<100000) {
    console.log ('El numero',+n,'tiene cinco cifra')
} else if (n<1000000) {
    console.log ('El numero',+n,'tiene seis cifra')
} else if (n<10000000) {
    console.log ('El numero',+n,'tiene siete cifra')
} else if (n<100000000) {
    console.log ('El numero',+n,'tiene ocho cifra')
} else if (n<1000000000) {
    console.log ('El numero',+n,'tiene nueve cifra')
} else if (n<10000000000) {
    console.log ('El numero',+n,'tiene diez cifra')
} else {
    console.log ('El numero',+n,'excede los limites')
} 


/* 4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, 
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores */

var nota= Math.round(Math.random() * 11)
console.log('su nota es',+nota)

if (nota<2) {
    console.log('La nota ingresada es Deficiente')  
} else if (nota<4) {
    console.log('La nota ingresada es Insuficiente')  
} else if (nota<6) {
    console.log('La nota ingresada es Aceptable') 
} else if (nota<8) {
    console.log('La nota ingresada es Buena') 
} else if (nota<10) {
    console.log('La nota ingresada es Excelente') 
} else { 
    console.log('La nota es incorrecta') 
}


/* 5. En un juego de preguntas a las que se responde “Si” o “No” gana quien 
responda correctamente las tres preguntas. Si se responde mal a cualquiera de 
ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810?
3. The Doors fue un grupo de rock Americano? */

var si=0
var no=1
console.log('Este es un juego que consta de tres preguntas, las cuales tendras que responder correctamente para finalizar el juego, donde el SI va a ser 0 y el NO va a ser 1, buena suerte')
console.log('')
console.log ('')
console.log('¿Cristobal Colon descubrio America?')
var rta= Math.round(Math.random() * 1)
console.log('Tu respuesta fue', +rta)

if (rta==0) {
    console.log('Tu respuesta es correcta, puedes continuar con la sigueinte pregunta')
    console.log ('')
    console.log ('¿La independencia de Colombia fue en el año 1910?')
    var rta= Math.round(Math.random() * 1)
    console.log('Tu respuesta fue', rta)
    
    if (rta==0) {
        console.log('Tu respuesta es correcta, puedes continuar con la sigueinte pregunta')
        console.log ('')
        console.log ('¿The Doors fue un grupo de rock Americano?')
        var rta= Math.round(Math.random() * 1)
        console.log('Tu respuesta fue', +rta)
        
        
        
        if (rta==0) {
            console.log('Tu respuesta es correcta, felicitaciones, has pasado este juego')
             console.log ('')
             } else {
            console.log('Lo sentimos has perdido debido a que tu respuesta es incorrecta ')
        }
    } else {
       console.log( 'Lo sentimos has perdido debido a que tu respuesta es incorrecta '  )
    }
         
} else {
    console.log('Lo sentimos has perdido debido a que tu respuesta es incorrecta ')
}

/*6. Pida un numero al usuario que representa días del año. Diga a que mes del año 
corresponde así. Si el número es menor o igual a 31 indica que esta en enero, 
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en 
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días. */

var dia= Math.round(Math.random() * 365)
console.log(+dia)

if (dia<31) {
    console.log('El dia',+dia,'corresponde a el mes Enero')
} else if (dia<59) {
    dia=dia-31
    console.log('El numero ingresado correponde al',+dia,' del mes de febrero')
}  else if (dia<90) {
    dia=dia-59
    console.log('El numero ingresado correponde al',+dia,' del mes de marzo')
}  else if (dia<120) {
    dia=dia-90
    console.log('El numero ingresado correponde al',+dia,' del mes de  abril')
}  else if (dia<151) {
    dia=dia-120
    console.log('El numero ingresado correponde al',+dia,' del mes de  mayo')
}else if (dia<181) {
    dia=dia-151
    console.log('El numero ingresado correponde al',+dia,' del mes de  junio')
}else if (dia<212) {
    dia=dia-181
    console.log('El numero ingresado correponde al',+dia,' del mes de ')
}else if (dia<243) {
    dia=dia-212
    console.log('El numero ingresado correponde al',+dia,' del mes de  de agosto')
}else if (dia<270) {
    dia=dia-243
    console.log('El numero ingresado correponde al',+dia,' del mes de  septiembre')
}else if (dia<304) {
    dia=dia-270
    console.log('El numero ingresado correponde al',+dia,' del mes de octubre')
}else if (dia<334) {
    dia=dia-304
    console.log('El numero ingresado correponde al',+dia,' del mes de  noviembre')
}else if (dia<365) {
    dia=dia-334
    console.log('El numero ingresado correponde al',+dia,' del mes de diciembre')
}

/* 7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig. 
manera:
Si trabaja 40 horas o menos se le paga $2600 por hora
Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40 
horas y $5000 por cada hora extra*/

var horas= Math.round(Math.random() * 50)
console.log ('La cantidad de horas ingresada fue',+horas)
if (horas<=40) {
    var sueldo=horas*2600
    console.log ('Su sueldo es de',+sueldo)
} else if (horas>40) {
        var sueldo= 40*2600
        var extras=horas-40
        var extras=((extras*5000)+sueldo)
        console.log ('Su sueldo es de',+extras)
} else { 
    console.log('')
}

/* 8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo 
los cálculos así:
Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan 
200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que 
permita calcular el costo de una llamada dados los minutos de duración. */

var min= Math.round(Math.random() * 10)
console.log ('La cantidad de minutos ingresados fue',+min)
if (min<=3) {
    console.log ('El costo es de 200 pesos')
} else if (min>3) {
        var minp= 200
        var minutos=min-3
        var minutos=((minutos*50)+minp)
        console.log ('El costo de los minutos es de',+minutos)
} else { 
    console.log('')
}


/* 9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo 
ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es 
posterior */

var d1= Math.round(Math.random() * 31)
var m1= Math.round(Math.random() * 12)
var a1= Math.round(Math.random() * 2050)
console.log(+d1,'/',+m1,'/',+a1)

var d2= Math.round(Math.random() * 31)
var m2= Math.round(Math.random() * 12)
var a2= Math.round(Math.random() * 2050)
console.log(+d2,'/',+m2,'/',+a2)
 if (a2>a1) {
    p=(a2-a1)
   console.log( 'Desde el año' ,+a1 , 'han pasado',+p)
 }
 if (a2<a1) {
    p=(a1-a2)
   console.log( 'faltan',+p, 'años')
 }

/* 10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El 
programa debe responder que hora será un segundo después. Ej: ingreso 
11:59:59, el programa responde 12:00:00.  */

var h= Math.round(Math.random() * 24)
var m= Math.round(Math.random() * 60)
var s= Math.round(Math.random() * 60)
console.log (+h,':',+m,':',+s)
s=s+1
if (s > 59) {
    s = 0
    m = m + 1
    if (m > 59) {
         m = 0
         h = h + 1
         if (h > 23) {
            h = 0 
           }
    } 

if (m > 60) {
     m= 0
}

if (h > 24) {
    h = 0
}

 
 }
console.log('La hora en un segundo despues sera: ',+h, ':',+m, ':',+s)


/* 11. Escribir un algoritmo que pida un valor entero que equivale a una cantidad de 
DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y 
1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco 
billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de 
dos mil. */

var d= Math.round(Math.random() * 100000)
console.log(+d)
i=0
ii=0
iii=0
iv=0
v=0
vi=0
if (d>= 50000) {
    i= Math.round(d/50000) 
    d=d-(i*50000)
    console.log('Hay',+i,'billetes de 50000')
} else {
    console.log('no hay ningun billete de 50000')
}
if (d>= 20000) {
    ii=Math.round(d/20000)
    d=d-(ii*20000)
    console.log('Hay',+ii,'billetes de 20000')
} else {
    console.log('no hay ningun billete de 20000')
}
if (d>= 10000) {
    iii=Math.round(d/10000)
    d=d-(i*10000)
    console.log('Hay',+iii,'billetes de 10000')
} else {
    console.log('no hay ningun billete de 10000')
}
if (d>= 5000) {
    iv= Math.round(d/5000)
    d=d-(iv*5000)
    console.log('Hay',+iv,'billetes de 5000')
} else {
    console.log('no hay ningun billete de 5000')
}
if (d>= 2000) {
    v= Math.round(d/2000)
    d=d-(v*2000)
    console.log('Hay',+v,'billetes de 2000')
} else {
    console.log('no hay ningun billete de 2000')
}
if (d>= 1000) {
    vi= Math.round(d/1000)
    d=d-(v*1000)
    console.log('Hay',+vi,'billetes de 5000')
} else {
    console.log('no hay ningun billete de 1000')
}

/* 12. Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la 
hora que será dentro de 1 segund */

var h= Math.round(Math.random() * 24)
var m= Math.round(Math.random() * 60)
var s= Math.round(Math.random() * 60)
console.log (+h,':',+m,':',+s)
s=s+1
if (s > 59) {
    s = 0
    m = m + 1
    if (m > 59) {
         m = 0
         h = h + 1
         if (h > 23) {
            h = 0 
           }
    } 

if (m > 60) {
     m= 0
}

if (h > 24) {
    h = 0
}

 
 }
console.log('La hora en un segundo despues sera: ',+h, ':',+m, ':',+s)


/* 13. Solicite al usuario una cantidad numérica que expresa segundos (medida de 
tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso */

var num= Math.round(Math.random() * 1000)
console.log(+num)
if (num>=0) {
    hor= Math.round(num/ 3600)
    min= Math.round ((num -  hor*3600)/60)
    seg= (num - (hor*3600 + min*60))
    console.log(+hor, ':', +min, ':', +seg)
} else {
    console.log('El valor ingresado es incorrecto')
}

/* 14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga 
además en que vuelta está sabiendo que cada 360 grados se completa una 
vuelta a la circunferencia. Además diga el resultado en radianes. */
var G= Math.round(Math.random() * 500)
console.log(+G)
if (G<=90) {
    radian=Math.round(G*3.1416)/180
    console.log ('Se encuntra en el primer cuadrante sus grados convertidos en radianes es de',+radian)
} else if (G<=180) {
    radian=Math.round(G*3.1416)/180
     console.log ('Se encuntra en el segundo cuadrante sus grados convertidos en radianes es de',+radian)
} else if (G<=270) {
    radian=Math.round(G*3.1416)/180
     console.log ('Se encuntra en el trcer cuadrante sus grados convertidos en radianes es de',+radian)
} else if (G<=360) {
    radian=Math.round(G*3.1416)/180
     console.log ('Se encuntra en el cuarto cuadrante sus grados convertidos en radianes es de',+radian)
}else if (G>360) {
    sobrante=(360-G)
    radian= Math.round(sobrante*3.1416)/180
     console.log ('Se encuntra en el cuadrante que corresponde a',+sobrante,'grados','sus grados convertidos en radianes es de' ,+radian)

}

/* 15. La fecha de Pascua corresponde al primer domingo después de la primera luna 
llena que sigue al equinoccio de primavera, y se calcula con las siguientes 
expresiones:
A= año MOD 19
B= año MOD 4
C= año MOD 7
D= (19*A+24) MOD 30
E= (2*B+4*C+6*D+5) MOD 7
N= (22+D+E)
En el que N indica el número de día del mes de marzo (o abril si N es superior a 
31) correspondiente al domingo de Pascua. Realizar un programa que 
determine esta fecha para un año ingresado por teclado.*/

var año= Math.round(Math.random() * 2060)
console.log(+año)
var A= año % 19
var B= año %  4
var C= año %  7
var D= (19*A+24) % 30
var E= (2*B+4*C+6*D+5) %  7
var N= (22+D+E)
var mes= N
var mn=0

if (mes>31) {
    mes=(N-31)
    console.log('Fecha ingresada fue',+mes,'de Abril y es domingo de pascua')
} else{
    console.log('Fecha ingresada fue',+mes,'de Marzo y es domingo de pascua')
    
}
