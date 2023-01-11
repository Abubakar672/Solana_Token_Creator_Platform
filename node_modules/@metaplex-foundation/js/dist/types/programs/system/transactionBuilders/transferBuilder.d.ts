import { PublicKey } from '@solana/web3.js';
import { Signer } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface transferBuilderParams {
    from: Signer;
    to: PublicKey;
    lamports: number | bigint;
    basePubkey?: PublicKey;
    seed?: string;
    program?: PublicKey;
    instructionKey?: string;
}
export declare const transferBuilder: (params: transferBuilderParams) => TransactionBuilder;
