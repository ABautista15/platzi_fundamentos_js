const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const fullURL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opst = { crossDomain : true}

function obtenerPersonaje(id){

    return new Promise((resolve,reject)=> {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

        $.get(url, opst, function(data){
            resolve(data)
        }).fail(()=> reject(id))
    })   
}

function onError (id) {
    console.log(`Hubo un error al obtener al personaje ${id}`)
}

var ids = [1,2,3,4,5,6,7]
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personaje=> console.log(personaje))
    .catch(onError)
// obtenerPersonaje(1)
//     .then(function(personaje){
//         console.log(`Hola, yo soy ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(function(personaje){
//         console.log(`Hola, yo soy ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(function(personaje){
//         console.log(`Hola, yo soy ${personaje.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(function(personaje){
//         console.log(`Hola, yo soy ${personaje.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(function(personaje){
//         console.log(`Hola, yo soy ${personaje.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(function(personaje){
//         console.log(`Hola, yo soy ${personaje.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(function(personaje){
//         console.log(`Hola, yo soy ${personaje.name}`)
//         return obtenerPersonaje(8)
//     })
//     .catch(onError)