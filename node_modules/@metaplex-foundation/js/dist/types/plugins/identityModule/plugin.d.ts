import { MetaplexPlugin } from "../../types";
import { IdentityClient } from './IdentityClient';
export declare const identityModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        identity(): IdentityClient;
    }
}
