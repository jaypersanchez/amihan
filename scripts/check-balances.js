const { ethers } = require("hardhat");
require('dotenv').config();

async function main() {
  // Contract address on the Fantom testnet
  const contractAddress = '0xf1383d0aF1927BC1f4CE149933b09B33a12131f7'; // Replace with your deployed contract address

  // Retrieve addresses and private key from environment variables
  const walletAddress = process.env.FTMTESTA_WALLET;
  const privateKey = process.env.FTMTESTA_PRIVATE_KEY;

  // Setup provider and wallet
  const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/fantom_testnet/"); // Fantom testnet RPC URL
  const wallet = new ethers.Wallet(privateKey, provider);

  // Connect to the deployed contract
  const AmihanToken = await ethers.getContractAt("AmihanToken", contractAddress, wallet);

  // Fetch balances of Amihan tokens
  const balanceOwner = await AmihanToken.balanceOf(contractAddress);
  const balanceAddr1 = await AmihanToken.balanceOf(walletAddress); // Replace with the actual address you want to check

  // Fetch balance of FTM
  console.log(`\n\n`)
  const ftmBalanceOwner = await provider.getBalance(walletAddress);
  const ftmBalanceAddr1 = await provider.getBalance(contractAddress);

  // Output balances
  console.log(`Amihan Balance of Wallet Address: ${ethers.formatUnits(balanceAddr1, 18)} AMIHAN`);
  console.log(`\n\n`)
  console.log(`FTM Balance of Owner (${walletAddress}): ${ethers.formatUnits(ftmBalanceOwner, 18)} FTM`);
  


}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
