var adrian = {
    nombre : 'Adrian',
    apellido : 'Bautista',
    edad : 24
}

var stefania = {
    nombre : 'Stefania',
    apellido : 'Hernandez',
    edad : 17
}

function imprimirNombreYEdad(persona){
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(adrian)
imprimirNombreYEdad(stefania)

var esMayorDeEdad = ({ edad }) => edad >= 18

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log("Si es mayor de edad");
    }else{
        console.log("No es mayor de edad");
    }
}

const permitirAcceso = ({ edad }) => {
    if(esMayorDeEdad({edad})){
        console.log('ACCESO PERMITIDO');
    }else{
        console.log('ACCESO DENEGADO');
    }
}