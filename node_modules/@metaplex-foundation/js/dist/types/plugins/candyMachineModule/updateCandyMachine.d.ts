import { CandyMachineData } from '@metaplex-foundation/mpl-candy-machine';
import { ConfirmOptions, PublicKey, RpcResponseAndContext, SignatureResult } from '@solana/web3.js';
import { Operation, OperationHandler, Signer } from "../../types";
declare const Key: "UpdateCandyMachineOperation";
export declare const updateCandyMachineOperation: import("../../types").OperationConstructor<UpdateCandyMachineOperation, "UpdateCandyMachineOperation", UpdateCandyMachineInput, UpdateCandyMachineOutput>;
export declare type UpdateCandyMachineOperation = Operation<typeof Key, UpdateCandyMachineInput, UpdateCandyMachineOutput>;
export declare type UpdateCandyMachineInputWithoutCandyMachineData = {
    candyMachineAddress: PublicKey;
    walletAddress: PublicKey;
    authoritySigner: Signer;
    confirmOptions?: ConfirmOptions;
};
export declare type UpdateCandyMachineInput = UpdateCandyMachineInputWithoutCandyMachineData & CandyMachineData;
export declare type UpdateCandyMachineOutput = {
    transactionId: string;
    confirmResponse: RpcResponseAndContext<SignatureResult>;
};
export declare const updateCandyMachineOperationHandler: OperationHandler<UpdateCandyMachineOperation>;
export {};
