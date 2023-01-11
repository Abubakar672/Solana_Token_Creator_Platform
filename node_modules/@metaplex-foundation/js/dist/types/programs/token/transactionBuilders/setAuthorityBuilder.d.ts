import { PublicKey } from '@solana/web3.js';
import { AuthorityType } from '@solana/spl-token';
import { Signer, KeypairSigner } from "../../../types";
import { TransactionBuilder } from "../../../utils";
export interface SetAuthorityBuilderParams {
    mint: PublicKey;
    currentAuthority: PublicKey | Signer;
    authorityType: AuthorityType;
    newAuthority: PublicKey | null;
    multiSigners?: KeypairSigner[];
    tokenProgram?: PublicKey;
    instructionKey?: string;
}
export declare const setAuthorityBuilder: (params: SetAuthorityBuilderParams) => TransactionBuilder;
