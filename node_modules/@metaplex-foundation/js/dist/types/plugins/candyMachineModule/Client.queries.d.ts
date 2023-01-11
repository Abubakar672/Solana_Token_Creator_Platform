import { PublicKey } from '@solana/web3.js';
import type { CandyMachineClient } from './CandyMachineClient';
import { CandyMachine } from './CandyMachine';
export declare function findByAddress(this: CandyMachineClient, address: PublicKey): Promise<CandyMachine | null>;
export declare function findAllByWallet(this: CandyMachineClient, walletAddress: PublicKey): Promise<CandyMachine[]>;
export declare function findAllByAuthority(this: CandyMachineClient, authorityAddress: PublicKey): Promise<CandyMachine[]>;
export declare function findByAuthorityAndUuid(this: CandyMachineClient, authorityAddress: PublicKey, uuid: string): Promise<CandyMachine>;
