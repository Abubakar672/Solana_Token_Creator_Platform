import { Operation, OperationHandler, Signer } from "../../types";
import { ConfirmOptions, PublicKey, RpcResponseAndContext, SignatureResult } from '@solana/web3.js';
declare const Key: "UpdateAuthorityOperation";
export declare const updateAuthorityOperation: import("../../types").OperationConstructor<UpdateAuthorityOperation, "UpdateAuthorityOperation", UpdateAuthorityInput, UpdateAuthorityOutput>;
export declare type UpdateAuthorityOperation = Operation<typeof Key, UpdateAuthorityInput, UpdateAuthorityOutput>;
export declare type UpdateAuthorityInput = {
    candyMachineAddress: PublicKey;
    walletAddress: PublicKey;
    authoritySigner: Signer;
    newAuthorityAddress: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type UpdateAuthorityOutput = {
    transactionId: string;
    confirmResponse: RpcResponseAndContext<SignatureResult>;
};
export declare const updateAuthorityOperationHandler: OperationHandler<UpdateAuthorityOperation>;
export {};
