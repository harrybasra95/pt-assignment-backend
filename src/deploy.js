import 'dotenv/config';
import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import contract from './compile';
import config from './config';

const provider = new HDWalletProvider(config.mneomonic, config.infuraEndpoint);
const INITIAL_MESSAGE = 'hello';

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const deployedContract = await new web3.eth.Contract(contract.abi)
        .deploy({
            data: contract.evm.bytecode.object,
            arguments: [INITIAL_MESSAGE],
        })
        .send({ from: accounts[0], gas: '1000000' });
    console.log(deployedContract.options.address);
    provider.engine.stop();
};
deploy();
