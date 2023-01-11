import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
import { PublicKey } from '@solana/web3.js';
export declare type CreateUpdateAuthorityInstructionWithSignersParams = {
    candyMachine: PublicKey;
    authority: Signer;
    wallet: PublicKey;
    newAuthority: PublicKey;
    instructionKey?: string;
};
export declare function createUpdateAuthorityInstructionWithSigners(params: CreateUpdateAuthorityInstructionWithSignersParams): InstructionWithSigners;
