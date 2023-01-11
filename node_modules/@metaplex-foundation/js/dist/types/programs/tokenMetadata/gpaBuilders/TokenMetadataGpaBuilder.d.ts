import { Key } from '@metaplex-foundation/mpl-token-metadata';
import { GpaBuilder } from "../../../utils";
import { PublicKey } from '@solana/web3.js';
import { Metaplex } from "../../../Metaplex";
export declare class TokenMetadataGpaBuilder extends GpaBuilder {
    constructor(metaplex: Metaplex, programId?: PublicKey);
    whereKey(key: Key): this;
}
