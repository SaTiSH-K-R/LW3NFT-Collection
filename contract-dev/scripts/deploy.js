const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const whitelistContract = "0x6BB6b7b4cE62Ae9e73ada7772bDCA9cFe39dA30e";
  const metadataURL = "https://lw-3-nft-collection-psi.vercel.app/api/";
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });