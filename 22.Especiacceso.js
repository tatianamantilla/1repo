class persona {
    #nombre
    #apellido
    constructor(nombre,apellido){
        this.#nombre=nombre
        this.#apellido=apellido
    }
    get nombre(){
        return this.#nombre
    }
    get apellido(){
        return this.#apellido
    }
}
let objeto= new persona ('Kevin','Martinez')
console.log(objeto.nombre)
console.log(objeto.apellido)