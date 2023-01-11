import { PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { Nft } from './Nft';
declare const Key: "FindNftsByOwnerOperation";
export declare const findNftsByOwnerOperation: import("../../types").OperationConstructor<FindNftsByOwnerOperation, "FindNftsByOwnerOperation", PublicKey, Nft[]>;
export declare type FindNftsByOwnerOperation = Operation<typeof Key, PublicKey, Nft[]>;
export declare const findNftsByOwnerOnChainOperationHandler: OperationHandler<FindNftsByOwnerOperation>;
export {};
