import cron from 'node-cron';
import { getData, saveData } from './redis';
import { getContractData } from './web3';
import { sendMail } from './mailgun';

const everyHourJob = cron.schedule('0 * * * *', async () => {
    const prevData = await getData();
    const newData = await getContractData();
    if (prevData.length !== newData.length);
    await saveData(newData);

    // Here we are removing the duplicate data and creating string with newly added data
    const newDataString = newData
        .slice(prevData.length, newData.length)
        .join(', ');
    sendMail(newDataString);
});

export { everyHourJob };
