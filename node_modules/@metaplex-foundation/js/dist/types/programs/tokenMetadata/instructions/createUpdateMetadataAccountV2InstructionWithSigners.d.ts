import { PublicKey } from '@solana/web3.js';
import { DataV2 } from '@metaplex-foundation/mpl-token-metadata';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
export interface CreateUpdateMetadataAccountV2InstructionWithSignersParams {
    data: DataV2;
    newUpdateAuthority: PublicKey;
    primarySaleHappened: boolean;
    isMutable: boolean;
    metadata: PublicKey;
    updateAuthority: Signer;
    instructionKey?: string;
}
export declare const createUpdateMetadataAccountV2InstructionWithSigners: (params: CreateUpdateMetadataAccountV2InstructionWithSignersParams) => InstructionWithSigners;
