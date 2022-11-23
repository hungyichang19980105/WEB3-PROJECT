require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/y5lGAe3zBBW0WyL6FdX2SpoiaCgakkch",
      accounts: ['d1954f498559b407a24a266fc5082ecb8cacb4534a086f923a17dffb5f475afc']
    }
  }
}