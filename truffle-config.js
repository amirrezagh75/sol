const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    loc_development_development: {
      network_id: "*",
      port: 8545,
      host: "127.0.0.1"
    },
    "inf_dev_near-testnet": {
      network_id: 0,
      gasPrice: 25000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\admin\\Desktop\\Binex\\Code\\solidity\\.env', 'utf-8'), "https://near-testnet.infura.io/v3/7344ad57c2c449b48f37a3fe58eb8d50")
    },
    "inf_dev_aurora-testnet": {
      network_id: 1313161555,
      gasPrice: 25000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\admin\\Desktop\\Binex\\Code\\solidity\\.env', 'utf-8'), "https://aurora-testnet.infura.io/v3/7344ad57c2c449b48f37a3fe58eb8d50")
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
