/*
 * This is a script to get your private key
 */

var keythereum = require("keythereum");
var datadir = "/Users/rohit/gethDataDir";
var address= "0x16411318ce764bf4c97a5c14874e581bf356039a";
const password = "123";

var keyObject = keythereum.importFromFile(address, datadir);
var privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString('hex'));

