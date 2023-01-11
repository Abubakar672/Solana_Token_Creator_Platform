import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
export interface CreateMintNewEditionFromMasterEditionViaTokenInstructionWithSignersParams {
    edition: number | BN;
    newMetadata: PublicKey;
    newEdition: PublicKey;
    masterEdition: PublicKey;
    newMint: Signer;
    editionMarkPda: PublicKey;
    newMintAuthority: Signer;
    payer: Signer;
    tokenAccountOwner: Signer;
    tokenAccount: PublicKey;
    newMetadataUpdateAuthority: PublicKey;
    metadata: PublicKey;
    instructionKey?: string;
}
export declare const createMintNewEditionFromMasterEditionViaTokenInstructionWithSigners: (params: CreateMintNewEditionFromMasterEditionViaTokenInstructionWithSignersParams) => InstructionWithSigners;
