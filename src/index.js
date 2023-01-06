import 'dotenv/config';
import express from 'express';
import config from './config';
import { handleEvents, onLoad } from './helpers/web3';
import { everyHourJob } from './helpers/cron';
import { connectDB } from './helpers/redis';

const app = express();

app.listen(config.serverPort, async () => {
    // This onLoad is for connecting with blockchain and loading up the contract
    await onLoad();

    // This makes the connection to the redis db
    await connectDB();

    // After Db connnection we can start the cronjob and event handlers because it requires the connects
    everyHourJob.start();
    handleEvents();

    console.log(`Server is running at ${config.serverPort}`);
});
