import { PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { Nft } from './Nft';
declare const Key: "FindNftsByCreatorOperation";
export declare const findNftsByCreatorOperation: import("../../types").OperationConstructor<FindNftsByCreatorOperation, "FindNftsByCreatorOperation", FindNftsByCreatorInput, Nft[]>;
export declare type FindNftsByCreatorOperation = Operation<typeof Key, FindNftsByCreatorInput, Nft[]>;
export interface FindNftsByCreatorInput {
    creator: PublicKey;
    position?: number;
}
export declare const findNftsByCreatorOnChainOperationHandler: OperationHandler<FindNftsByCreatorOperation>;
export {};
