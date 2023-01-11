import { MetaplexPlugin } from "../../types";
import { RpcClient } from './RpcClient';
export declare const rpcModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        rpc(): RpcClient;
    }
}
