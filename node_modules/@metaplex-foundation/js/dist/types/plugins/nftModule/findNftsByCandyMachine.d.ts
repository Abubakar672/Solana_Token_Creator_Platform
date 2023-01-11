import { PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { Nft } from './Nft';
declare const Key: "FindNftsByCandyMachineOperation";
export declare const findNftsByCandyMachineOperation: import("../../types").OperationConstructor<FindNftsByCandyMachineOperation, "FindNftsByCandyMachineOperation", FindNftsByCandyMachineInput, Nft[]>;
export declare type FindNftsByCandyMachineOperation = Operation<typeof Key, FindNftsByCandyMachineInput, Nft[]>;
export interface FindNftsByCandyMachineInput {
    candyMachine: PublicKey;
    version?: 1 | 2;
}
export declare const findNftsByCandyMachineOnChainOperationHandler: OperationHandler<FindNftsByCandyMachineOperation>;
export {};
