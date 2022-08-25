require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  scripts: {
    script: "node scripts/run.js",
  },
  solidity: "0.8.4",
}
