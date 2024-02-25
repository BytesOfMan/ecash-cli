'use strict';
const { chronikInstances } = require('../config')
const { ChronikClientNode } = require('chronik-client');
const chronik = new ChronikClientNode(chronikInstances);


const DEFAULT_TOKEN_ID = 'b132878bfa81cf1b9e19192045ed4c797b10944cc17ae07da06aed3d7b566cb7'

// Get input from bash terminal if available
// e.g. `node chronik/tx.js <txid>`
const tokenId = typeof process.argv[2] !== 'undefined' ? process.argv[2] : DEFAULT_TOKEN_ID

/**
 * Call chronik.token(<tokenId>) and log output to console
 * @param {string} tokenId name of chronik method, e.g. 'tx'
 */
async function printChronikTokenOutput(tokenId) {
    let response;
    try {
        response = await chronik.token(tokenId);
    } catch (err) {
        console.log(`chronik error`, err);
    }

    console.log(JSON.stringify(response, null, 2));
}

printChronikTokenOutput(tokenId);
