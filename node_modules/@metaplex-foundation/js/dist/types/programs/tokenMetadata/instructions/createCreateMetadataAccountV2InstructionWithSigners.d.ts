import { PublicKey } from '@solana/web3.js';
import { DataV2 } from '@metaplex-foundation/mpl-token-metadata';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
export interface CreateCreateMetadataAccountV2InstructionWithSignersParams {
    data: DataV2;
    isMutable?: boolean;
    mintAuthority: Signer;
    payer: Signer;
    mint: PublicKey;
    metadata: PublicKey;
    updateAuthority: PublicKey;
    instructionKey?: string;
}
export declare const createCreateMetadataAccountV2InstructionWithSigners: (params: CreateCreateMetadataAccountV2InstructionWithSignersParams) => InstructionWithSigners;
