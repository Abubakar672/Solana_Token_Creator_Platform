import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Metaplex } from "../../../Metaplex";
import { GpaBuilder } from "../../../utils";
export declare class MintGpaBuilder extends GpaBuilder {
    constructor(metaplex: Metaplex, programId?: PublicKey);
    whereDoesntHaveMintAuthority(): this;
    whereHasMintAuthority(): this;
    whereMintAuthority(mintAuthority: PublicKey): this;
    whereSupply(supply: number | BN): this;
}
