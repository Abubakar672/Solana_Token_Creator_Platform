import { MetaplexPlugin } from "../../types";
import { UtilsClient } from './UtilsClient';
export declare const utilsModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        utils(): UtilsClient;
    }
}
