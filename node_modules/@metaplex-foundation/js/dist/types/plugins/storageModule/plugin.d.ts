import { MetaplexPlugin } from "../../types";
import { StorageClient } from './StorageClient';
export declare const storageModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        storage(): StorageClient;
    }
}
