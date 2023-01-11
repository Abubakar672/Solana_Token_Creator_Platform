import { ConfirmOptions, PublicKey, RpcResponseAndContext, SignatureResult } from '@solana/web3.js';
import { CandyMachineData } from '@metaplex-foundation/mpl-candy-machine';
import { Operation, Signer, OperationHandler, HasMetaplex } from "../../types";
import { TransactionBuilder } from "../../utils";
declare const Key: "CreateCandyMachineOperation";
export declare const createCandyMachineOperation: import("../../types").OperationConstructor<CreateCandyMachineOperation, "CreateCandyMachineOperation", CreateCandyMachineInput, CreateCandyMachineOutput>;
export declare type CreateCandyMachineOperation = Operation<typeof Key, CreateCandyMachineInput, CreateCandyMachineOutput>;
export declare type CreateCandyMachineInput = CandyMachineData & {
    candyMachineSigner?: Signer;
    payerSigner?: Signer;
    walletAddress?: PublicKey;
    authorityAddress?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare type CreateCandyMachineOutput = {
    candyMachineSigner: Signer;
    payerSigner: Signer;
    walletAddress: PublicKey;
    authorityAddress: PublicKey;
    transactionId: string;
    confirmResponse: RpcResponseAndContext<SignatureResult>;
};
export declare const createCandyMachineOperationHandler: OperationHandler<CreateCandyMachineOperation>;
export declare type CreateCandyMachineBuilderParams = HasMetaplex & CandyMachineData & {
    candyMachineSigner: Signer;
    payerSigner: Signer;
    walletAddress: PublicKey;
    authorityAddress: PublicKey;
    createAccountInstructionKey?: string;
    initializeCandyMachineInstructionKey?: string;
    confirmOptions?: ConfirmOptions;
};
export declare const createCandyMachineBuilder: (params: CreateCandyMachineBuilderParams) => Promise<TransactionBuilder>;
export {};
