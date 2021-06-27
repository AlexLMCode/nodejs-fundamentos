const bcrypt = require('bcrypt');

const pass = '123456Segura!';

bcrypt.hash(pass, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare('pass', hash, (err, result) => {
        // console.log(err);
        console.log(result);
    })
});