import { ConfigLine } from '@metaplex-foundation/mpl-candy-machine';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
import { PublicKey } from '@solana/web3.js';
export declare type CreateAddConfigLinesInstructionWithSignersParams = {
    candyMachine: PublicKey;
    authority: Signer;
    index: number;
    configLines: ConfigLine[];
    instructionKey?: string;
};
export declare function createAddConfigLinesInstructionWithSigners(params: CreateAddConfigLinesInstructionWithSignersParams): InstructionWithSigners;
