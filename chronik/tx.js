'use strict';
const { chronikInstances } = require('../config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);


const DEFAULT_TXID = 'a34c8b092081667f858a4a73c116e6c95dcbbe7fdb0e59ed0c3141ed8ada5d2b'
// Get input from bash terminal if available
// e.g. `node chronik/tx.js <txid>`
const txid = typeof process.argv[2] !== 'undefined' ? process.argv[2] : DEFAULT_TXID

/**
 * Call a given chronik methjod
 * @param {string} txid name of chronik method, e.g. 'tx'
 * @param {string} inputParamOne first input param, e.g. a txid for tx
 */
async function printChronikTxOutput(txid) {
    let response;
    try {
        response = await chronik.tx(txid);
    } catch (err) {
        console.log(`chronik error`, err);
    }

    console.log(JSON.stringify(response, null, 2));
}

printChronikTxOutput(txid);
