import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Metaplex } from "../../../Metaplex";
import { GpaBuilder } from "../../../utils";
export declare class TokenGpaBuilder extends GpaBuilder {
    constructor(metaplex: Metaplex, programId?: PublicKey);
    selectMint(): this;
    whereMint(mint: PublicKey): this;
    selectOwner(): this;
    whereOwner(owner: PublicKey): this;
    selectAmount(): this;
    whereAmount(amount: number | BN): this;
    whereDoesntHaveDelegate(): this;
    whereHasDelegate(): this;
    whereDelegate(delegate: PublicKey): this;
}
