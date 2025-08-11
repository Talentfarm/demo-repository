const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CropInsurance = await hre.ethers.getContractFactory("CropInsurance");
  const cropInsurance = await CropInsurance.deploy();

  await cropInsurance.waitForDeployment(); 

  const contractAddress = await cropInsurance.getAddress();
  console.log("CropInsurance deployed to:", contractAddress);

  
  console.log("Contract ABI (part of artifacts/contracts/CropInsurance.sol/CropInsurance.json):");

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});