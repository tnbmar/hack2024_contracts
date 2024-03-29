import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const privateKey =
  "984b8c440bc81e038f2b9d52bb2f26306eb5bcb4a53a37e8e73985cb4599a43c" ??
  process.env.ADMIN_PRIVATE_KEY;

// if (!privateKey) {
//   throw new Error("Отсутствует приватный ключ");
// }

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    sepoliaEth: {
      url: "https://eth-sepolia.g.alchemy.com/v2/-7pLjp8X_YT_XTLl40XTeaIbMulH5hMu",
      accounts: [privateKey],
    },
  },
};

export default config;
