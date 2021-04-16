const colors = require('colors');
const { describe } = require('yargs');


const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de Multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe : 'Lista la tabla creada en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Indica hasta que numero va a multiplicar la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        // Si no exite algun error regresar true
        return true;
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'El argumento hasta tiene que ser un numero';
        }
        // Si no exite algun error regresar true
        return true;
    })
    .argv;

module.exports = argv;