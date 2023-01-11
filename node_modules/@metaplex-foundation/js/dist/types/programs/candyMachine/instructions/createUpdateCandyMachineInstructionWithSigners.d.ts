import { CandyMachineData } from '@metaplex-foundation/mpl-candy-machine';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
import { PublicKey } from '@solana/web3.js';
export declare type CreateUpdateCandyMachineInstructionWithSignersParams = {
    candyMachine: PublicKey;
    authority: Signer;
    wallet: PublicKey;
    data: CandyMachineData;
    instructionKey?: string;
};
export declare function createUpdateCandyMachineInstructionWithSigners(params: CreateUpdateCandyMachineInstructionWithSignersParams): InstructionWithSigners;
