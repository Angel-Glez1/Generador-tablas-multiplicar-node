const fs = require('fs');
const colors = require('colors');


const createFile =  async (base = 5, listar = false, hasta = 10) => {
    
    
    try {
        let salida = '';
        let consola = '';

        // Algoritmo.
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        // Crear el Archivo
        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if (listar) {
            console.log('==================='.rainbow);
            console.log(' Tabla del ', String(base).underline.green);
            console.log('==================='.rainbow);
            console.log(consola)
        };
        return `tabla-${base}.txt`.bold.yellow;
    } catch (error) {
        return error;
    }

}

// Exportar Archivos de node
module.exports = {
    createFile
}