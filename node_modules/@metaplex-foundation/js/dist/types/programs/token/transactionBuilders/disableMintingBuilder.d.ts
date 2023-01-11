import { PublicKey } from '@solana/web3.js';
import { Signer, KeypairSigner } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface DisableMintingBuilderParams {
    mint: PublicKey;
    mintAuthority: PublicKey | Signer;
    multiSigners?: KeypairSigner[];
    tokenProgram?: PublicKey;
    instructionKey?: string;
}
export declare const disableMintingBuilder: (params: DisableMintingBuilderParams) => TransactionBuilder;
