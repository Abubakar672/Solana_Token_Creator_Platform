import { PublicKey } from '@solana/web3.js';
import { Operation, OperationHandler } from "../../types";
import { CandyMachine } from './CandyMachine';
declare const Key: "FindCandyMachinesByPublicKeyOperation";
export declare const findCandyMachinesByPublicKeyFieldOperation: import("../../types").OperationConstructor<FindCandyMachinesByPublicKeyFieldOperation, "FindCandyMachinesByPublicKeyOperation", FindCandyMachinesByPublicKeyFieldInput, CandyMachine[]>;
export declare type FindCandyMachinesByPublicKeyFieldInput = {
    type: 'authority' | 'wallet';
    publicKey: PublicKey;
};
export declare type FindCandyMachinesByPublicKeyFieldOperation = Operation<typeof Key, FindCandyMachinesByPublicKeyFieldInput, CandyMachine[]>;
export declare const findCandyMachinesByPublicKeyFieldOnChainOperationHandler: OperationHandler<FindCandyMachinesByPublicKeyFieldOperation>;
export {};
