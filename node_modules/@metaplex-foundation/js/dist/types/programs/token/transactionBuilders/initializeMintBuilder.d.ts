import { PublicKey } from '@solana/web3.js';
import { Signer } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface InitializeMintBuilderParams {
    decimals: number;
    mint: Signer;
    mintAuthority: PublicKey;
    freezeAuthority?: PublicKey;
    tokenProgram?: PublicKey;
    instructionKey?: string;
}
export declare const initializeMintBuilder: (params: InitializeMintBuilderParams) => TransactionBuilder;
