import { PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { Nft } from './Nft';
declare const Key: "FindNftByMintOperation";
export declare const findNftByMintOperation: import("../../types").OperationConstructor<FindNftByMintOperation, "FindNftByMintOperation", PublicKey, Nft>;
export declare type FindNftByMintOperation = Operation<typeof Key, PublicKey, Nft>;
export declare const findNftByMintOnChainOperationHandler: OperationHandler<FindNftByMintOperation>;
export {};
