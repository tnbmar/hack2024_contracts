import hardhat from "hardhat";

async function main() {
  try {
    // Get the ContractFactory of your SimpleContract
    const SimpleContract = await hardhat.viem.deployContract(
      "TableFootballTournament",
      [1_000_000n],
      {}
    );

    console.log(`SimpleContract deployed to: ${SimpleContract.address}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
