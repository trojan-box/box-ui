const path = require('path')

module.exports = {
  contracts_build_directory: path.join(__dirname, "build/contracts"),
  networks: {
    // Development
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    // Integration tests
    e2e_test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        "https://goerli.infura.io/v3/".concat(process.env.INFURA_PROJECT_ID)
      ),
      network_id: 3,
      gas: 6000000
    },
    live: {
    }
  },
  mocha: {
    useColors: true
  },
  compilers: {
    solc: {
      version: "0.5.11",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
