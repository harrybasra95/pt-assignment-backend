import Web3 from 'web3';
import ganache from 'ganache';
import output from '../compile';
import config from '../config';
import { getData, saveData } from './redis';

const web3 = new Web3(ganache.provider());

let contract;
export const onLoad = async () => {
    contract = new web3.eth.Contract(output.abi, config.contractAddress);
};

export const handleEvents = () => {
    contract.events.Store({}, async (error, event) => {
        const newData = event.returnValues['1'];
        const prevData = await getData();
        await saveData([...prevData, newData]);
    });
};

export const getContractData = () => contract.methods.retrieve().call();
