/*
 * This is a test script, modified from https://medium.com/cybermiles/diving-into-ethereums-world-state-c893102030ed
 * This helps understand the basic datastructures used by ethereum
 */
//Just importing the requirements
var Trie = require('merkle-patricia-tree');
//import { BaseTrie as Trie } from 'merkle-patricia-tree'
const Buffer = require('buffer').Buffer
var levelup = require('levelup');
var leveldown = require('leveldown');
var RLP = require('rlp');
var assert = require('assert');

//Connecting to the leveldb database
var db = levelup(leveldown('/Users/rohit/gethDataDir/geth/chaindata'));

//Adding the "stateRoot" value from the block so that we can inspect the state root at that block height.
var root = '99f23c3963e3179da4639477a40ecb2d176291814b02cde15d440584dc7aad98';
var rootBuffer = Buffer.from(root, 'hex')

//Creating a trie object of the merkle-patricia-tree library
var trie = new Trie.SecureTrie(db, rootBuffer);

//Creating a nodejs stream object so that we can access the data
var stream = trie.createReadStream()

//Turning on the stream (because the node js stream is set to pause by default)
stream.on('data', function (data){
  //printing out the keys of the "state trie"
  console.log(data.key);
});
