'use strict';
const { chronikInstances } = require('./config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);

let method, inputParamOne;
if (process.argv.length < 4) {
    // default
    method = 'tx';
    inputParamOne = 'a34c8b092081667f858a4a73c116e6c95dcbbe7fdb0e59ed0c3141ed8ada5d2b';
} else {
    // user input if available
    // e.g.
    // npm run getTxDetails a34c8b092081667f858a4a73c116e6c95dcbbe7fdb0e59ed0c3141ed8ada5d2b
    method = process.argv[2];
    inputParamOne = process.argv[3];
}
const inputParamTwo = typeof process.argv[4] !== 'undefined' ? process.argv[4] : undefined
const inputParamThree = typeof process.argv[5] !== 'undefined' ? process.argv[5] : undefined

/**
 * Call a given chronik methjod
 * @param {string} method name of chronik method, e.g. 'tx'
 * @param {string} inputParamOne first input param, e.g. a txid for tx
 */
async function callChronikMethod(method, inputParamOne, inputParamTwo, inputParamThree) {
    let response;
    try {
        response = await chronik[method](inputParamOne, inputParamTwo, inputParamThree);
    } catch (err) {
        console.log(`chronik error`, err);
    }

    console.log(`response`, JSON.stringify(response, null, 2));
}

callChronikMethod(method, inputParamOne, inputParamTwo, inputParamThree);
