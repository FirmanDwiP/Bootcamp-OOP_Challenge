const CryptoJS = require('crypto-js') // need to npm i crypto-js

class Chiper {
    static encrypt (x , y) { // untuk encrypt
        return CryptoJS.AES.encrypt(x,y).toString()
    }

    static decrypt (x, y) { // untuk decrypt
        return CryptoJS.AES.decrypt(x,y).toString(CryptoJS.enc.Utf8)
    }
}

const message = Chiper.encrypt('Ini tulisan rahasia', 'p4$$w0rd');
console.log(message);

const decryptMessage = Chiper.decrypt(message, 'p4$$w0rd')
console.log(decryptMessage);