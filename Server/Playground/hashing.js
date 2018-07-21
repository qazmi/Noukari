console.log('hashing');
const bcrypt = require('bcryptjs')


var password = 'alikazmi';

// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     })
// })

var hashedPassword = '$2a$10$PkOiII1qtvaUuyO.N141tOn16xrf8g/f.8a0ix5PCbxaurc3qkRiC';

bcrypt.compare(password,hashedPassword).then((value)=>{
    console.log(value);
})