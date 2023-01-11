import { Operation, OperationHandler, Signer } from "../../types";
import { ConfirmOptions, PublicKey, RpcResponseAndContext, SignatureResult } from '@solana/web3.js';
import { ConfigLine } from '@metaplex-foundation/mpl-candy-machine';
declare const Key: "AddConfigLinesOperation";
export declare const addConfigLinesOperation: import("../../types").OperationConstructor<AddConfigLinesOperation, "AddConfigLinesOperation", AddConfigLinesInput, AddConfigLinesOutput>;
export declare type AddConfigLinesOperation = Operation<typeof Key, AddConfigLinesInput, AddConfigLinesOutput>;
export declare type AddConfigLinesInput = {
    candyMachineAddress: PublicKey;
    authoritySigner: Signer;
    index: number;
    configLines: ConfigLine[];
    confirmOptions?: ConfirmOptions;
};
export declare type AddConfigLinesOutput = {
    transactionId: string;
    confirmResponse: RpcResponseAndContext<SignatureResult>;
};
export declare const addConfigLinesOperationHandler: OperationHandler<AddConfigLinesOperation>;
export {};
