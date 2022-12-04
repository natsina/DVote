require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/olqqFsSr-Uty6gVS6qyvQY5y3UFsqlWO",
      accounts: [
        `0x${"71aa3c1030a553bd71adce576d6e2986bd16432e30b4aad4f1aa0301bc4d9629"}`,
      ],
    },
  },
};
