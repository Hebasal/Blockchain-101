
class Block {
    hash
    data
    previousHash
    nonce
    height
    timestamp

    constructor(hash, data, previousHash, nonce, height) {

        this.hash = this.Hash(hash) // change it to the hash function
        this.data = data
        this.previousHash = previousHash
        this.nonce = nonce
        this.height = height
        this.timestamp = new Date()
        
    }
    

       Hash (string) {
       
        const crypto = require('crypto');

        const hash = crypto.createHmac('sha256', string)
                           .digest('hex');
        
        return hash;

    
    }
}
let block = new Block('heba', 'data', 'previousHash', 1, 1)
console.log(block);