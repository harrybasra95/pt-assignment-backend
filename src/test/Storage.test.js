import ganache from 'ganache';
import assert from 'assert';
import { beforeEach, describe, it } from 'mocha';
import Web3 from 'web3';
import output from '../compile';

const web3 = new Web3(ganache.provider());
let accounts;
let contract;
let latestStoreEvent;
beforeEach(async () => {
    // get a list of all account
    accounts = await web3.eth.getAccounts();

    // Use one of those to deploy the contract
    contract = await new web3.eth.Contract(output.abi)
        .deploy({
            data: output.evm.bytecode.object,
        })
        .send({ from: accounts[0], gas: '1000000' });
    contract.events.Store({}, (error, event) => {
        latestStoreEvent = event;
    });
});

describe('Storage contract', () => {
    it('deploys a contract', () => {
        assert.ok(contract.options.address);
    });

    it('store and retrieve are working', async () => {
        const newMessage = 'new message';
        await contract.methods.store(newMessage).send({ from: accounts[0] });
        const updatedMessageArr = await contract.methods.retrieve().call();
        assert.equal(newMessage, updatedMessageArr[0]);
    });

    it('checks store event is working', async () => {
        const newMessage = 'new message';
        await contract.methods.store(newMessage).send({ from: accounts[0] });
        assert(latestStoreEvent.returnValues['0'], accounts[0]);
        assert(latestStoreEvent.returnValues['1'], newMessage);
    });
});
