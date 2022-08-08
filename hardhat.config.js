/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
 mumbai: {
   url: "https://rpc-mumbai.maticvigil.com",
    accounts: ["ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}