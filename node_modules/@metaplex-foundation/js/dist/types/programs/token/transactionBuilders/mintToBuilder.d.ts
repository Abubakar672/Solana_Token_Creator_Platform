import { PublicKey } from '@solana/web3.js';
import { Signer, KeypairSigner } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface MintToBuilderParams {
    mint: PublicKey;
    destination: PublicKey;
    mintAuthority: PublicKey | Signer;
    amount: number | bigint;
    multiSigners?: KeypairSigner[];
    tokenProgram?: PublicKey;
    instructionKey?: string;
}
export declare const mintToBuilder: (params: MintToBuilderParams) => TransactionBuilder;
