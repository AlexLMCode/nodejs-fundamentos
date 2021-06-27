function hola(miCallback, nombre) {
    setTimeout(() => {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log('Adios', nombre);
    }, 1000);
}

console.log('Iniciando proceso');
hola(function () {
    adios('Mario', function () {
        console.log('Terminando proceso');
    })
}, 'Pedro')

let x = 'pene';

let locas = 20 - x;
console.log(locas);