import { MetaplexPlugin } from "../../types";
import { NftClient } from './NftClient';
export declare const nftModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        nfts(): NftClient;
    }
}
