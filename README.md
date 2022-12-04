# DVote - Decentralized Voting Platform

## Brief Description

The application I built as part of this hackathon is called DVote. DVote is a Decentralized voting system that accomodates correctness and is transparent, anonymous and secure. It can be used for voting by small, medium, and large organizations.

## Some of the advantages of DVote decentralized voting system compared to traditional centralized voting system are as follows:

1. It is `Secure`
2. Votes casted are `Immutable`
3. It streamlines the voting process and makes it `Faster` 
4. It is `Transparent`
5. You can vote anytime/anywhere (during Pandemics like COVID-19 where it’s impossible to hold elections physically
6. Free from `Human errors`
7. Can be used to mitigate `Corruption` in voting due to its immutable nature


## Tech Stack

1. `React` for frontend
2. `Ethers.js`
3. `IPFS` for file system using `Pinata` to create the votes
4. `Solidity` use to write smart contract
5. `Hardhat` is used for building and testing application
6. `Metamask` Connected and use for paying gas fees
7. `Polygon Mumbai Testnet`: Application is deployed to Mumbai Testnet 

## dApp Contract address on Polygon Mumbai Testnet

`0x76ebBA2798676cEaD522Adc1174591B706B8C6F2`



## Getting Started

To test and deploy the smart contract follow the steps below.

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone the repository: `git clone https://github.com/natsina/DVote.git`
3. `cd DVote`
4. `cd backend`
5. `npm install`
6. To test the contract run `npx hardhat test`
7. To deploy the contract to your `localhost` network do the following:
   - `npx hardhat node`
   - `npx hardhat run --network localhost ./script/deploy.js`

## Using the Frontend

1. `cd frontend`
2. `npm install`
3. `npm start`
