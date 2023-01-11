import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
import { Signer } from "../../../types";
import { InstructionWithSigners } from "../../../utils";
export interface CreateMintNewEditionFromMasterEditionViaVaultProxyInstructionWithSignersParams {
    edition: number | BN;
    newMetadata: PublicKey;
    newEdition: PublicKey;
    masterEdition: PublicKey;
    newMint: Signer;
    editionMarkPda: PublicKey;
    newMintAuthority: Signer;
    payer: Signer;
    vaultAuthority: Signer;
    safetyDepositStore: PublicKey;
    safetyDepositBox: PublicKey;
    vault: PublicKey;
    newMetadataUpdateAuthority: PublicKey;
    metadata: PublicKey;
    tokenVaultProgram?: PublicKey;
    instructionKey?: string;
}
export declare const createMintNewEditionFromMasterEditionViaVaultProxyInstructionWithSigners: (params: CreateMintNewEditionFromMasterEditionViaVaultProxyInstructionWithSignersParams) => InstructionWithSigners;
