class Persona {
    constructor(nombre, apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre, this.apellido, false)
        }
    }

    esAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura, edad){
        super(nombre, apellido, altura)
        this.edad = edad
    }

    saludar(fn){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }

    esMayorDeEdad(){
        if(this.edad >= 18){
            console.log(`${this.nombre} es mayor de edad`)
        }
    }
}

function saludarADesarrollador(nombre, apellido, dev){
    if(dev){
        console.log(`No sabia que tambien eras desarrollador`)
    }
}

var adrian = new Persona('adrian','bautista', 1.62)
var lupita = new Persona('lupita','orozco', 1.55)
var fernando = new Persona('fernando','orellana',1.85)
var arturo =  new Desarrollador('Arturo','Perez', 1.70,33)


adrian.saludar()
lupita.saludar()
fernando.saludar()
arturo.saludar(saludarADesarrollador)
arturo.esMayorDeEdad()