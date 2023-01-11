import { PublicKey } from '@solana/web3.js';
import { Signer } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface CreateAccountBuilderParams {
    space: number;
    lamports: number;
    payer: Signer;
    newAccount: Signer;
    program?: PublicKey;
    instructionKey?: string;
}
export declare const createAccountBuilder: (params: CreateAccountBuilderParams) => TransactionBuilder;
