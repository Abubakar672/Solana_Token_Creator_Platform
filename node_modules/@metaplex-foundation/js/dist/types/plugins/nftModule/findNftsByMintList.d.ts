import { PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { Nft } from './Nft';
declare const Key: "FindNftsByMintListOperation";
export declare const findNftsByMintListOperation: import("../../types").OperationConstructor<FindNftsByMintListOperation, "FindNftsByMintListOperation", PublicKey[], (Nft | null)[]>;
export declare type FindNftsByMintListOperation = Operation<typeof Key, PublicKey[], (Nft | null)[]>;
export declare const findNftsByMintListOnChainOperationHandler: OperationHandler<FindNftsByMintListOperation>;
export {};
