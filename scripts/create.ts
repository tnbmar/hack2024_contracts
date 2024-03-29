import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, http, parseEther } from "viem";
import { sepolia } from "viem/chains";
import { abi } from "../abi/tournament";
import hardhat from "hardhat";

const address = "0x5E1a290d299e71eB988bAd553742BccE35776E06";

const main = async () => {
  const account = privateKeyToAccount(
    "0x984b8c440bc81e038f2b9d52bb2f26306eb5bcb4a53a37e8e73985cb4599a43c"
  );

  const client = createWalletClient({
    account,
    chain: sepolia,
    transport: http(),
  });

  // const res = await client.writeContract({
  //   address: "0x5E1a290d299e71eB988bAd553742BccE35776E06",
  //   abi,
  //   functionName: "createTournament",
  //   args: ["test"],
  //   value: BigInt("1000000"),
  // });

  // const res = await client.writeContract({
  //   address,
  //   abi,
  //   functionName: "addParticipant",
  //   args: [1n, "0xfAD7B23D8C14838ACb4a23E3274Ed9a9091892a0"],
  // });

  // const res = await client.writeContract({
  //   address,
  //   abi,
  //   functionName: "sponsorTournament",
  //   args: [1n],
  //   value: BigInt("1000000"),
  // });

  const res = await client.writeContract({
    address,
    abi,
    functionName: "distributePrizes",
    args: [1n, ["0xfAD7B23D8C14838ACb4a23E3274Ed9a9091892a0"]],
  });

  console.log(res);
};

main();
