import { PublicKey } from '@solana/web3.js';
import { Signer } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface CreateAssociatedTokenAccountBuilderParams {
    payer: Signer;
    associatedToken: PublicKey;
    owner: PublicKey;
    mint: PublicKey;
    tokenProgram?: PublicKey;
    associatedTokenProgram?: PublicKey;
    instructionKey?: string;
}
export declare const createAssociatedTokenAccountBuilder: (params: CreateAssociatedTokenAccountBuilderParams) => TransactionBuilder;
