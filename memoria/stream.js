const fs = require('fs');
const stream = require('stream');
const util = require('util');
let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', (chunk) => {
//     data += chunk;
// });

// readableStream.on('end', () => {
//     console.log(data)
// });

// process.stdout.write('Hola')
// process.stdout.write('Que tal')

const transform = stream.Transform;

function mayus() {
    transform.call(this);
}

util.inherits(Mayus, transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);