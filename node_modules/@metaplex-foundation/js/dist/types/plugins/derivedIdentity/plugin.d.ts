import { MetaplexPlugin } from "../../types";
import { DerivedIdentityClient } from './DerivedIdentityClient';
export declare const derivedIdentity: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        derivedIdentity(): DerivedIdentityClient;
    }
}
