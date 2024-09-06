const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

const INITIAL_SUPPLY = ethers.parseUnits("1000000", 18); // 1 million tokens with 18 decimals

module.exports = buildModule("AmihanTokenModule", (m) => {
    // Deploy the AmihanToken contract
    const amihanToken = m.contract("AmihanToken", [INITIAL_SUPPLY]);
    return { amihanToken };
});
