var elementos = ['Leche', 'Huevos', 'Pan']
console.log(elementos)

do {
    var opcion = Math.round((Math.random() * 6 - 1) + 1)
    console.log('La opcion es: ', +opcion)
    if (opcion <= 1) {
        elementos.push('Avena', 'Arroz')
        console.log(elementos)
    } else if (opcion == 2) {
        elementos.pop()
        console.log(elementos)
    } else if (opcion == 3) {
        elementos.sort()
        console.log(elementos)
    } else if (opcion == 4) {
        elementos[1] = 'salchicha';
        console.log(elementos)
        console.log(elementos[1]);
    } else if (opcion == 5) {
        elementos = ['Leche', 'Huevos', 'Pan']
        let findIndex = elementos.indexOf('Leche')
        console.log('La ubicacion de Leche es: ', +findIndex)
    } else {
        console.log('The end')
    }
} while (opcion != 6);