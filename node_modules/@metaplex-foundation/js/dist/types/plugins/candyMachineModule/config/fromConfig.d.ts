import { CandyMachine, CandyMachineData } from '@metaplex-foundation/mpl-candy-machine';
import { PublicKey } from '@solana/web3.js';
import { CandyMachineConfigWithoutStorage } from './CandyMachineConfig';
export declare type CandyMachineAddresses = {
    candyMachineAddress: PublicKey;
    authorityAddress: PublicKey;
    walletAddress: PublicKey;
    tokenMintAddress?: PublicKey;
};
export declare function candyMachineDataFromConfig(config: CandyMachineConfigWithoutStorage, candyMachineAddress: PublicKey): CandyMachineData;
export declare function candyMachineAccountDataFromConfig(config: CandyMachineConfigWithoutStorage, addresses: CandyMachineAddresses): CandyMachine;
