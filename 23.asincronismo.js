/*Settimeout: sirve para tner un retardo, se manipula el tiempo en el que se va a dar una respuesta
puede tener funcion clasica o flecha*/

/*Setinterval: Se repite como un bucle es decir se repitira mucha veces hasta ell imite que se halla puesto, 
tiene una funcion para detenerlo, se tiene que pasar el interval que se quiere detener valga la redundancia */

function externa() {
    console.log('Funcion externa al serTimeOut')
}
const funcionext = () => {
    console.log('Funcion externa flecha')
}
setTimeout(() => {
    console.log(' I love the town call soacha')
}, 2000);

setTimeout(() => {
    console.log(' Function classic')
}, 3000);

setTimeout(externa, 5000)
setTimeout(funcionext, 6000)

setInterval(() => {
    console.log('Se repite')
}, 3000);

let tomeID = setinterval(() => console.log('I love SENA'), 2000)

//despues de 5 segundos parar
setTimeout(() => {
    clearInterval(timerId)
        //Console.log(timerID)
}, 7000);

/*Escriba un programa que muestre un contador desde uno hasta 10 donde cada numero se muestre cada 2 segundos*/
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, (i * 2000));
}