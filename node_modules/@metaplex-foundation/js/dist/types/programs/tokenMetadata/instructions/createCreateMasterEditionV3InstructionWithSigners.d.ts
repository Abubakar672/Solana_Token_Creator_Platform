import { PublicKey } from '@solana/web3.js';
import { bignum } from '@metaplex-foundation/beet';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
export interface CreateCreateMasterEditionV3InstructionWithSignersParams {
    maxSupply?: bignum;
    payer: Signer;
    mintAuthority: Signer;
    updateAuthority: Signer;
    mint: PublicKey;
    metadata: PublicKey;
    masterEdition: PublicKey;
    instructionKey?: string;
}
export declare const createCreateMasterEditionV3InstructionWithSigners: (params: CreateCreateMasterEditionV3InstructionWithSignersParams) => InstructionWithSigners;
