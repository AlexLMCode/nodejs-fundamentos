const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log(err, 'No se ah podidoe scribir');
        } else {
            cb('Escrito correctamente')
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', console.log);

// leer(__dirname + '/archivo.txt', console.log)
// escribir(__dirname + '/archivo1.txt', 'Soy un nuevo archivp', console.log)