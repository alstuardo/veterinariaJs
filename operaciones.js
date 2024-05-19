const fs = require('fs')

const listaCitas = './citas.json'

const agregar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync(listaCitas))
    const id = Math.floor(Math.random() * 100).toString()
    if(!nombre || ! edad || ! tipo || !color || !enfermedad) {
        console.warn('Ingresa todos los datos requeridos')
        return    
    }
    citas.push({id, nombre, edad, tipo, color, enfermedad})
    fs.writeFileSync(listaCitas, JSON.stringify(citas))
    console.log(citas)
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync(listaCitas, 'utf8'))
    console.log(citas)
}
module.exports = {agregar, leer}