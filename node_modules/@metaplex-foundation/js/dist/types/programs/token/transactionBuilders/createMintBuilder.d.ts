import { PublicKey } from '@solana/web3.js';
import { Signer } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface CreateMintBuilderParams {
    lamports: number;
    decimals: number;
    mint: Signer;
    payer: Signer;
    mintAuthority: PublicKey;
    freezeAuthority?: PublicKey;
    tokenProgram?: PublicKey;
    createAccountInstructionKey?: string;
    initializeMintInstructionKey?: string;
}
export declare const createMintBuilder: (params: CreateMintBuilderParams) => TransactionBuilder;
