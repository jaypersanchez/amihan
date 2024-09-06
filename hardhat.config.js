require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
      hardhat: {
        // Configuration specific to the Hardhat network
        chainId: 1337 // Common chain ID for local Hardhat network
      },
      fantomtest: {
        url: process.env.FANTOM_TESTNET_URL,
        // Replace with your wallet's private key
        accounts: [`0x${process.env.FTMTESTA_PRIVATE_KEY}`], 
        gasPrice: 1000000000, // 1 Gwei
        gas: 500000 // Example gas limit
      }
  }
};
