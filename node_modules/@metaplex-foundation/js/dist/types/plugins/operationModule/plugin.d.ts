import { MetaplexPlugin } from "../../types";
import { OperationClient } from './OperationClient';
export declare const operationModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        operations(): OperationClient;
    }
}
