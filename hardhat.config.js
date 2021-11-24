require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { API_URL, MNEMONIC } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: { mnemonic: MNEMONIC },
    },
  },
};
