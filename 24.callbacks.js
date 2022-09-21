/* s*/
function receptora(cb1, cb2, parametros) {
    cb1()
    setTimeout(() => {
        console.log('Dentro de la funcion receptora')
    }, 0); //asi se ponga es 0 siempre se va a tardar un pco 
    cb2(parametros);
}

function funcionargumentos(parametros) {
    console.log(`${parametros} de la funcion argumento`)
}

receptora(() => console.log('Funcion anonima'), funcionargumentos, 200)

///////////////////////////////////////////////////////////////////////////////


function trabajoArreglos(cb1,cb2){
    let vec=[]
        setTimeout(() => {
        console.log(vec)
    }, 1000);
    vec=cb1(vec);
    console.log(cb2(vec));
    }
    
    // function cualquierFunction(vec){
    //     console.log(`El parametro es de tipo ${typeof(vec)}`)
    //     return [];
    // }
    
    function llenaArreglo(vec){
    for (let i = 0; i < 10; i++) {
        vec[i]=Math.round(Math.random()*100)    
        }
        return vec;
    }
    function sumarArreglo(vec){
        let suma=0
        for (let i = 0; i < vec.length; i++) {
            suma+=vec[i];
        }
           return suma;
    }   
    
    trabajoArreglos(llenaArreglo,sumarArreglo);

/////////////////////////////////////////////////////////////
// __________________________________________________________________________

function general(cb, cb2, cadena) {
    
            setTimeout(() => {
                console.log('--------------------------\n')
                console.log('Cadena original ')
                console.log(cadena)
                console.log('/////////////////////// \n ')
            }, 1000);

            cb(cadena)
            cb2(cadena)
            setTimeout(() => {
                console.log('Cadena en minuscula ')
                console.log(cadena.toLowerCase())
                console.log('--------------------------- \n ')
                console.log('Cadena en mayusculas')
                console.log(cadena.toUpperCase())
            }, 3000);
     
}

  

function contadormayus(cadena) {
    var contador = 0
    var may = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < may.length; i++) {
        for (var t = 0; t < cadena.length; t++)
            if (may[i] == cadena[t]) {
                contador += 1
            }

    }
    console.log(`${cadena}  tiene , ${contador},  Mayuscula`)
}

//contadormayus(cadena)

function contadorminu(cadena) {
    var contadorm = 0
    var min = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < min.length; i++) {
        for (var t = 0; t < cadena.length; t++)
            if (min[i] == cadena[t]) {
                contadorm += 1
            }

    }
    console.log(`${cadena}  tiene , ${contadorm},  Minusculas`)
}
//contadorminu(cadena)

general(contadormayus, contadorminu, 'Oh my God, its so amazing, Im super happy Woau')