import { PublicKey } from '@solana/web3.js';
import { Metaplex } from "../../../Metaplex";
import { TokenMetadataGpaBuilder } from './TokenMetadataGpaBuilder';
export declare class MetadataV1GpaBuilder extends TokenMetadataGpaBuilder {
    constructor(metaplex: Metaplex, programId?: PublicKey);
    selectUpdatedAuthority(): this;
    whereUpdateAuthority(updateAuthority: PublicKey): this;
    selectMint(): this;
    whereMint(mint: PublicKey): this;
    selectName(): this;
    whereName(name: string): this;
    selectSymbol(): this;
    whereSymbol(symbol: string): this;
    selectUri(): this;
    whereUri(uri: string): this;
    selectCreator(position: number): this;
    whereCreator(position: number, creator: PublicKey): this;
    selectFirstCreator(): this;
    whereFirstCreator(firstCreator: PublicKey): this;
}
