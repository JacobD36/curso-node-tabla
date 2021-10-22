/*jshint esversion:6 */
/*jshint -W033 */
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false) => {
    try {
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('==========='.green);
            console.log(`TABLA DEL ${base}`.green);
            console.log('==========='.green);
            console.log(salida.blue);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}