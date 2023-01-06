import Web3 from 'web3';
import output from '../compile';
import config from '../config';
import { getData, saveData } from './redis';
import { sendMail } from './mailgun';

const web3 = new Web3(
    new Web3.providers.WebsocketProvider(config.infuraEndpoint)
);

let contract;

// First function to be called before accessing any other functions from web3
export const onLoad = async () => {
    contract = new web3.eth.Contract(output.abi, config.contractAddress);
};

export const handleEvents = () => {
    contract.events.Store({}, async (error, event) => {
        if (!event) return;
        const newData = event.returnValues['1'];
        const prevData = await getData();
        await saveData([...prevData, newData]);
        sendMail(newData);
    });
};

export const getContractData = () => contract.methods.retrieve().call();
