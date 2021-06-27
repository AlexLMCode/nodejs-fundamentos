const http = require('http');

const listener = (req, res) => {

    console.log('Nueva peticion');
    console.log(req.url);
    res.writeHead(201, { 'Content-Type': 'text/plain' })
    res.write('Hola, ya se usar http en nodejs')

    res.end();
};

http.createServer(listener).listen(3000);
console.log('Escuchando http en el puerto 3000');