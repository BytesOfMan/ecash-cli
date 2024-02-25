'use strict';
const { chronikInstances } = require('../../config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);


const tokenId = typeof process.argv[2] !== 'undefined' ? process.argv[2] : '50d8292c6255cda7afc6c8566fed3cf42a2794e9619740fe8f4c95431271410e';

/**
 * Print output from chronik.tokenId(tokenId).utxos() to console
 * @param {string} tokenId valid tokenId
 */
async function printUtxos(tokenId) {
    let response;
    try {
        response = await chronik.tokenId(tokenId).utxos();
    } catch (err) {
        console.log(`Error in printUtxos`, err);
    }

  console.log(JSON.stringify(response, null, 2))
  }

printUtxos(tokenId);
