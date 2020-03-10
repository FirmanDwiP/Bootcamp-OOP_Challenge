const crypto = require('crypto')
class Hash {
    md5(strings) { //md5
        console.log(crypto.createHash('md5').update(data).digest('hex'))
    }
    sha1(strings) { //sha1
        console.log(crypto.createHash('sha1').update(strings).digest('hex'));
    }
    sha256(strings) { //sha256
        console.log(crypto.createHash('sha256').update(strings).digest('hex'))
    }
    sha512(strings) { //sha512
        console.log(crypto.createHash('sha512').update(strings).digest('hex'))
    }
}
let data = `secret` // just example
const hash = new Hash() //class Hash
hash.md5('secret')
hash.sha1('secret')
hash.sha256('secret')
hash.sha512('secret')