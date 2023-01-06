import Mailgun from 'mailgun-js';
import config from '../config';

export const sendMail = async (newData) => {
    const data = {
        to: 'karthik@polytrade.finance,adam@polytrade.finance,harry.basra95@gmail.com',
        subject: `New data added - ${newData}`,
        html: `New data added - ${newData}`,
        from: config.mailgun.from,
    };
    await new Mailgun({
        apiKey: config.mailgun.api_key,
        domain: config.mailgun.domain,
    })
        .messages()
        .send(data);
};
