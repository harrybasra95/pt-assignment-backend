import Mailgun from 'mailgun-js';
import config from '../config';

export const sendMail = async () => {
    const data = {
        to: 'karthik@polytrade.finance,adam@polytrade.finance',
        subject: 'New data added',
        html: 'New data added',
        from: config.mailgun.from,
    };
    await new Mailgun({
        apiKey: config.mailgun.api_key,
        domain: config.mailgun.domain,
    })
        .messages()
        .send(data);
};
