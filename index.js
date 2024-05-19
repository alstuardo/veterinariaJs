const {agregar, leer} = require('./operaciones.js')

const [operacion, id, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

if (operacion === 'agregar') {
    agregar(id, nombre, edad, tipo, color, enfermedad)
}

if (operacion === 'leer') {
    leer()
}
