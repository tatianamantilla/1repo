/*La promesa es una funcion, resolve va ser un callback  */
function base() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve()
            setTimeout(() => {
                console.log('Linea de codigo en la funcion promesa')
            }, 500)
        } else {
            reject()
        }
    });
}

base()
    .then(() => {
        console.log('Estamos en el .then')
        return 'Hiiii '

    })
    .then((dato) => {

        console.log('En el then 2, recibo:', dato)
    })
    .then(auxiliar)
    .catch(error => console.log('se activo el reject'))

function auxiliar() {
    console.log('Funcion auxuliar')
}


//Esos dos ejemplosutilizando .then y promise

var cadena= 'Oh my God, its so amazing, Im super happy Woau'
function general(cadena) {
    return new Promise((resolve,reject)=>{
    
    
    resolve()
        reject (new Error('Hay un error'))
  


})}
   
general()
.then(() => {
    console.log('Se esta contando mayusculas segun un then ')
    var contador = 0
    var may = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < may.length; i++) {
    for (var t = 0; t < cadena.length; t++)
        if (may[i] == cadena[t]) {
            contador += 1
        }
    
    }
    console.log(`${cadena}  tiene , ${contador},  Mayusculas \n`)
    })
  

    .then(() => {
        console.log('Se esta contando minusculas segun un then ')
        var contadorm = 0
        var min = 'abcdefghijklmnopqrstuvwxyz'
        for (var i = 0; i < min.length; i++) {
        for (var t = 0; t < cadena.length; t++)
            if (min[i] == cadena[t]) {
                contadorm += 1
            }
        }
        console.log(`${cadena}  tiene , ${contadorm},  Minusculas \n `)
        }
    )  
    


    .then(() => {
        setTimeout(() => {
            console.log('--------------------------\n')
            console.log('Cadena original ')
            console.log(cadena)
            
    
        }, 1000);
        console.log('Cadena en minuscula ')
        console.log(cadena.toLowerCase())
    console.log('--------------------------- \n ')
    console.log('Cadena en mayusculas')
    console.log(cadena.toUpperCase())
}
    )  


//-------------------------------------------------

let vector=[]
function llenaArreglo(){{
    
    return new Promise((resolve,reject)=>{
        resolve()
        reject (new Error('Hay un error'))
        let tamaño =Math.round( Math.random()*100)
    for (let i = 0; i < tamaño; i++) {
        vector[i]=Math.round(Math.random()*100)}
        console.log(vector,'\n')
        console.log('El tamaño del arreglo es de',tamaño,'\n')
        })
    

}}
llenaArreglo()
.then(sumararreglo)
.then(promedioarreglo)

function sumararreglo(){
    let suma = 0
    console.log('Se esta sumando apartir de un then')
        for (let i = 0; i < vector.length; i++) {
            suma+=vector[i] }
        console.log('la suma del arreglo es = ',suma,'\n')
    }

    function  promedioarreglo(){
    console.log('Se esta haciedo el promedio segun un then ')
        suma=0;
        for (let i = 0; i < vector.length; i++) {
         suma+=vector[i];
                
        }
        let promedio = suma/vector.length
        console.log ('El promedio es= ',promedio,'\n')

}










