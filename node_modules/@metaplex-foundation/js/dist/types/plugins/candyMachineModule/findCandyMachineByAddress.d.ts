import { PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { CandyMachine } from './CandyMachine';
declare const Key: "FindCandyMachineByAdddressOperation";
export declare const findCandyMachineByAdddressOperation: import("../../types").OperationConstructor<FindCandyMachineByAdddressOperation, "FindCandyMachineByAdddressOperation", PublicKey, CandyMachine | null>;
export declare type FindCandyMachineByAdddressOperation = Operation<typeof Key, PublicKey, CandyMachine | null>;
export declare const findCandyMachineByAdddressOperationHandler: OperationHandler<FindCandyMachineByAdddressOperation>;
export {};
