import { PublicKey } from '@solana/web3.js';
import { CandyMachineData } from '@metaplex-foundation/mpl-candy-machine';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
export declare type CreateInitializeCandyMachineInstructionWithSignersParams = {
    data: CandyMachineData;
    candyMachine: Signer;
    payer: Signer;
    wallet: PublicKey;
    authority: PublicKey;
    instructionKey?: string;
};
export declare const createInitializeCandyMachineInstructionWithSigners: (params: CreateInitializeCandyMachineInstructionWithSignersParams) => InstructionWithSigners;
