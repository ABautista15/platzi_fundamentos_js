var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    libros: 20
    
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 30
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 15
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    libros: 50
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 5
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 10
}

var personas = [sacha,alan,martin,dario,vicky,paula]

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => !esAlta({ altura })
const pasarAlturaACms = (persona) => ({
    ...persona,
    altura : persona.altura * 100
})
const totalDeLibros = (acum, {libros}) => acum + libros

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
var personasCms = personas.map(pasarAlturaACms)
var cantidadLibros = personas.reduce(totalDeLibros,0)


console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)
console.log(cantidadLibros)

