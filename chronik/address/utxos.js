'use strict';
const { chronikInstances } = require('../../config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);

const address = typeof process.argv[2] !== 'undefined' ? process.argv[2] : 'ecash:prfhcnyqnl5cgrnmlfmms675w93ld7mvvqd0y8lz07';

/**
 * Print output from chronik.address(address).utxos() to console
 * @param {string} address valid eCash address
 */
async function printUtxos(address) {
    let response;
    try {
        response = await chronik.address(address).utxos();
    } catch (err) {
        console.log(`Error in printHistory`, err);
    }

  console.log(JSON.stringify(response, null, 2))
  }

printUtxos(address);
