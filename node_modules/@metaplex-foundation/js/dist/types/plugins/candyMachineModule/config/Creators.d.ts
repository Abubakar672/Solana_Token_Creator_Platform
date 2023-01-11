import { Creator } from '@metaplex-foundation/mpl-token-metadata';
import { PublicKeyString } from "../../../types";
export declare type CreatorConfig = Omit<Creator, 'address'> & {
    address: PublicKeyString;
};
export declare type CreatorsConfig = CreatorConfig[];
export declare function creatorsConfigDefault(owner: string): CreatorsConfig;
