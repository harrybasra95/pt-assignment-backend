<p align="center">
 <img width="100px" src="https://i.ibb.co/M6xX7np/assignment.png" align="center" alt="GitHub PT Assignment" />
 <h1 align="center">PT Assignment Server</h1>
 <p align="center">Node JS Server with Web3 Integration</p>
</p>

## Introduction

This `Node-Web3 Server` is a simple project build in Node JS using Express JS framework. It uses web3 library with redis database for storage purposes.

### Features

-   Smart contract interaction
-   Cron Jobs
-   Mailgun integration

## Getting Started

### Prerequisites

To run this project you need the following things installed in your computer

1. [Node JS](https://nodejs.org/en/download/)
2. [Redis](https://redis.io/docs/getting-started/installation/)

### Usage

Create an env file

```dosini
MNEOMONIC =
INFURA_ENDPOINT =
SERVER_PORT= 4000
CONTRACT_ADDRESS =
MAILGUN_API_KEY =
MAILGUN_DOMAIN =
MAILGUN_FROM =
```

Next install dependencies

```bash
npm install / yarn
```

Start server

```bash
npm start / yarn start
```

### Extra config files

1. Prettier
2. Eslint
3. Commitlint with husky
