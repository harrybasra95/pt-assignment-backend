import fs from 'fs';
import path from 'path';
import solc from 'solc';

const StoragePath = path.resolve(__dirname, 'contracts', 'Storage.sol');
const source = fs.readFileSync(StoragePath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        input: {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

/**
 * @typedef {Object} Output
 * @property {any} abi
 * @property {any} devdoc
 * @property {any} evm
 * @property {any} ewasm
 * @property {any} metadata
 * @property {any} storageLayout
 * @property {any} userdoc
 */

/**
 * @type {Output}
 */
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts.input
    .Storage;

export default output;
