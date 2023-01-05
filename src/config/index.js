const config = {
    mneomonic: process.env.MNEOMONIC,
    infuraEndpoint: process.env.INFURA_ENDPOINT,
    serverPort: process.env.SERVER_PORT,
    contractAddress: process.env.CONTRACT_ADDRESS,
    mailgun: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,
        from: process.env.MAILGUN_FROM,
    },
};

export default config;
