import { Chain } from "viem";
import { megaethTestnet, baseSepolia, monadTestnet, riseTestnet, somniaTestnet, seiTestnet, base, sei, sonic, arbitrum, arbitrumSepolia, optimism, optimismSepolia } from "viem/chains";
import { solanaChains, type SolanaChainConfig } from "@/solana/config";
import { sonicBlaze } from "./sonicblaze";
import { fuelChains, type FuelChainConfig } from "@/fuel/config";
import { aptosChains, type AptosChainConfig } from "@/aptos/config";
import { soonChains, type SoonChainConfig } from "@/soon/config";
import { starknetChains, type StarknetChainConfig } from "@/starknet/config";

export interface ChainConfig extends Chain {
  testnet: boolean;
  color: string; // For UI styling
  logo: string; // For logo path
  faucetUrl?: string; // Faucet URL for testnet chains
  layer: 'L1' | 'L2'; // Layer classification
}

function getRpcUrls(chain: Chain, url: string | undefined) {
  return {
    ...chain.rpcUrls,
    default: {
      http: [url || chain.rpcUrls.default.http[0]]
    },
  }
}

export const hydraChainTestnet_ = {
  id: 8844,
  name: "Hydra Chain",
  nativeCurrency: {
    name: "Hydra Chain",
    symbol: "HYDRA",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://rpc-testnet.hydrachain.org"] },
    public: { http: ["https://rpc-testnet.hydrachain.org"] },
  },
  blockExplorers: {
    default: {
      name: "Skynet",
      url: "https://skynet.hydrachain.org",
    },
  },
  testnet: true,
  color: "#0C8F8F",
  logo: "/logos/hydra.png",
  faucetUrl: "https://testnetapp.hydrachain.org/faucet/", // Mainnet has no faucet; leave empty or omit if not used
  layer: 'L1' as const,
} as const as ChainConfig;

const riseTestnet_ = {
  ...riseTestnet,
  rpcUrls: getRpcUrls(riseTestnet, process.env.NEXT_PUBLIC_RISE_TESTNET_RPC_URL),
  testnet: true,
  color: "#7967E5",
  logo: "/logos/rise.png",
  faucetUrl: "https://faucet.testnet.riselabs.xyz/",
  layer: 'L2' as const,
} as const as ChainConfig;

const monadTestnet_ = {
  ...monadTestnet,
  rpcUrls: getRpcUrls(monadTestnet, process.env.NEXT_PUBLIC_MONAD_TESTNET_RPC_URL),
  testnet: true,
  color: "#200053", // Purple color for Monad
  logo: "/logos/monad.png",
  faucetUrl: "https://faucet.monad.xyz/",
  layer: 'L1' as const,
} as const as ChainConfig;

const megaethTestnet_ = {
  ...megaethTestnet,
  rpcUrls: getRpcUrls(megaethTestnet, process.env.NEXT_PUBLIC_MEGAETH_TESTNET_RPC_URL),
  color: "#8e8d8f", // Blue color for MegaETH
  logo: "/logos/megaeth.png",
  faucetUrl: "https://testnet.megaeth.com/",
  layer: 'L2' as const,
} as const as ChainConfig;

const sonicBlaze_ = {
  ...sonicBlaze,
  rpcUrls: getRpcUrls(sonicBlaze, process.env.NEXT_PUBLIC_SONIC_BLAZE_RPC_URL),
  testnet: true,
  color: "#00AEE9",
  logo: "/logos/sonic.png",
  faucetUrl: "https://testnet.soniclabs.com/account",
  layer: 'L1' as const,
} as const as ChainConfig;

const baseSepolia_ = {
  ...baseSepolia,
  rpcUrls: getRpcUrls(baseSepolia, process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL),
  testnet: true,
  color: "#0052FF", // Blue color for Base
  logo: "/logos/base.png",
  faucetUrl: "https://www.alchemy.com/faucets/base-sepolia",
  layer: 'L2' as const,
} as const as ChainConfig;

const somniaTestnet_ = {
  ...somniaTestnet,
  rpcUrls: getRpcUrls(somniaTestnet, process.env.NEXT_PUBLIC_SOMNIA_TESTNET_RPC_URL),
  color: "#FF6B9D",
  logo: "/logos/somnia.png",
  faucetUrl: "https://testnet.somnia.network/",
  layer: 'L1' as const,
} as const as ChainConfig;

const seiTestnet_ = {
  ...seiTestnet,
  rpcUrls: getRpcUrls(seiTestnet, process.env.NEXT_PUBLIC_SEI_TESTNET_RPC_URL),
  color: "#8B1538",
  logo: "/logos/sei.svg",
  faucetUrl: "https://www.docs.sei.io/learn/faucet",
  layer: 'L1' as const,
} as const as ChainConfig;

// Mainnet chain configurations
const sonicMainnet = {
  ...sonic,
  rpcUrls: getRpcUrls(sonic, process.env.NEXT_PUBLIC_BASE_MAINNET_RPC_URL),
  testnet: false,
  color: "#00AEE9",
  logo: "/logos/sonic.png",
  layer: 'L1' as const,
} as const as ChainConfig;

const baseMainnet_ = {
  ...base,
  rpcUrls: getRpcUrls(base, process.env.NEXT_PUBLIC_BASE_MAINNET_RPC_URL),
  testnet: false,
  color: "#0052FF",
  logo: "/logos/base.png",
  layer: 'L2' as const,
} as const as ChainConfig;

const seiMainnet_ = {
  ...sei,
  rpcUrls: getRpcUrls(sei, process.env.NEXT_PUBLIC_SEI_MAINNET_RPC_URL),
  testnet: false,
  color: "#8B1538",
  logo: "/logos/sei.svg",
  layer: 'L1' as const,
} as const as ChainConfig;

const arbitrumSepolia_ = {
  ...arbitrumSepolia,
  rpcUrls: getRpcUrls(arbitrumSepolia, process.env.NEXT_PUBLIC_ARBITRUM_SEPOLIA_RPC_URL),
  testnet: true,
  color: "#28A0F0",
  logo: "/logos/arbitrum.png",
  faucetUrl: "https://www.alchemy.com/faucets/arbitrum-sepolia",
  layer: 'L2' as const,
} as const as ChainConfig;

const arbitrumMainnet_ = {
  ...arbitrum,
  rpcUrls: getRpcUrls(arbitrum, process.env.NEXT_PUBLIC_ARBITRUM_MAINNET_RPC_URL),
  testnet: false,
  color: "#28A0F0",
  logo: "/logos/arbitrum.png",
  layer: 'L2' as const,
} as const as ChainConfig;

const optimismSepolia_ = {
  ...optimismSepolia,
  rpcUrls: getRpcUrls(optimismSepolia, process.env.NEXT_PUBLIC_OPTIMISM_SEPOLIA_RPC_URL),
  testnet: true,
  color: "#FF0420",
  logo: "/logos/optimism.png",
  faucetUrl: "https://www.alchemy.com/faucets/optimism-sepolia",
  layer: 'L2' as const,
} as const as ChainConfig;

const optimismMainnet_ = {
  ...optimism,
  rpcUrls: getRpcUrls(optimism, process.env.NEXT_PUBLIC_OPTIMISM_MAINNET_RPC_URL),
  testnet: false,
  color: "#FF0420",
  logo: "/logos/optimism.png",
  layer: 'L2' as const,
} as const as ChainConfig;

// Add the EVM chains we want to include in the race (both testnet and mainnet)
export const evmChains = [
  // Testnets
  riseTestnet_, 
  monadTestnet_, 
  megaethTestnet_, 
  sonicBlaze_, 
  baseSepolia_, 
  somniaTestnet_,
  seiTestnet_,
  hydraChainTestnet_, 
  arbitrumSepolia_,
  optimismSepolia_,
  // Mainnets
  sonicMainnet,
  baseMainnet_,
  seiMainnet_,
  arbitrumMainnet_,
  optimismMainnet_
];

// All chains (EVM + Solana + Fuel + Aptos + SOON + Starknet)
export const allChains = [...evmChains, ...solanaChains, ...fuelChains, ...aptosChains, ...soonChains, ...starknetChains];

// Backward compatibility - rename raceChains to evmChains
export const raceChains = evmChains;

// Export chain type union
export type AnyChainConfig = ChainConfig | SolanaChainConfig | FuelChainConfig | AptosChainConfig | SoonChainConfig | StarknetChainConfig;