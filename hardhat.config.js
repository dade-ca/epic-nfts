require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const { API_URL, MNEMONIC, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: { mnemonic: MNEMONIC },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
