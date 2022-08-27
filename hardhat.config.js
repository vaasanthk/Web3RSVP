require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("hardhat-tracer")
require("@nomiclabs/hardhat-etherscan")

const POLYGONSCAN_API_KEY = process.env.POLYGON_API_KEY || ""

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mumbai: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [process.env.STAGING_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },

  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
    },
  },
}
