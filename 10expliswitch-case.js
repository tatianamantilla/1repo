/*Genrere aleatorimente un valor entre 0 y 100000
aplique 4 tipos de descuento según el estrato social
El estrato también encuentrelo aleatoriamente */
var estrato = Math.round(Math.random() * 6)
console.log(+estrato)

switch (estrato) {
    case 1:
        console.log('Su estrato es 1 y tiene un descuento de 50%')
        break;
    case 2:
        console.log('Su estrato es 2 y tiene un descuento de 40%')
        break;
    case 3:
        console.log('Su estrato es 3 y tiene un descuento de 30%')
        break;
    case 4:
        console.log('Su estrato es 4 y tiene un descuento de 20%')
        break;
    case 5:
        console.log('Su estrato es 5 y tiene un descuento de 10%')
        break;
    case 6:
        console.log('Su estrato es 6 y tiene un descuento de 5%')
        break;
    default:
        console.log('Estrato no existente')

}

/*SOLUCION CORRECTA */
var V = Math.round(Math.random() * 100000)
var E = Math.round(Math.random() * 6)
console.log(V)
switch (E) {
    case 1:
        V = V * 0.50
        break;
    case 2:
        V = V * 0.40
        break;
    case 3:
        V = V * 0.30
        break;
    case 4:
        V = V * 0.20
        break;
    case 5:
        V = V * 0.10
        break;
    case 6:
        V = V * 0.05
        break;
}
console.log("su estrato es: " + E + " despues del descuento el valor total es de: " + V)



/*Switch case es una estructura de control
que solo evalua igualdad 
el selectro es elvque esta dentro de 
a los parentesis y de el depende que 
se cumppla o no el caso */
var key = 31
switch (key) {
    case 1:
        console.log('UNO')
        break;
    case 2:
        console.log('DOS')
        break;
    case 3:
        console.log('TRES')
        break;
    case 4:
        console.log('CUATRO')
        break;
    case 5:
        console.log('CINCO')
        break;
    default:
        console.log('Opcion no valida')
        break;
}