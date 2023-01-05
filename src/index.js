import 'dotenv/config';
import express from 'express';
import config from './config';
import { onLoad } from './helpers/web3';
import { everyHourJob } from './helpers/cron';
import { connectDB } from './helpers/redis';

const app = express();

app.listen(config.serverPort, async () => {
    await onLoad();
    await connectDB();
    everyHourJob.start();
    console.log(`Server is running at ${config.serverPort}`);
});
