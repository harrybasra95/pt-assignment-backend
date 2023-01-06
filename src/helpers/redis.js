import { createClient } from 'redis';

const KEY = 'contractData';
const client = createClient();

export const connectDB = async () => {
    await client.connect();
};

export const saveData = async (data) => {
    await client.set(KEY, data.join(','));
};

export const getData = async () => {
    const data = await client.get(KEY);
    return data ? data.split(',') : [];
};
