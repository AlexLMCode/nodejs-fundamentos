console.log(global);

let i = 0;

let interval = setInterval(() => {
    console.log('Hola');
    console.log(__filename);
    if (i > 2) {
        clearInterval(interval);
    }
    i++;
}, 1000);