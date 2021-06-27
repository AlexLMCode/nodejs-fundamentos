const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//     if (sterr) {
//         console.error(sterr);
//         return false;
//     } else {
//         console.log(stdout)
//     }
// });

let proceso = spawn('ls', ['-la']);
proceso.stdout.on('data', (data) => {

    console.log(data.toString());
})