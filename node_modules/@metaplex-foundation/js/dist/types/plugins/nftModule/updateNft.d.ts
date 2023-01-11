import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import { Collection, Creator, DataV2, Uses } from '@metaplex-foundation/mpl-token-metadata';
import { Operation, Signer, OperationHandler } from "../../types";
import { Nft } from './Nft';
import { TransactionBuilder } from "../../utils";
declare const Key: "UpdateNftOperation";
export declare const updateNftOperation: import("../../types").OperationConstructor<UpdateNftOperation, "UpdateNftOperation", UpdateNftInput, UpdateNftOutput>;
export declare type UpdateNftOperation = Operation<typeof Key, UpdateNftInput, UpdateNftOutput>;
export interface UpdateNftInput {
    nft: Nft;
    name?: string;
    symbol?: string;
    uri?: string;
    sellerFeeBasisPoints?: number;
    creators?: Creator[];
    collection?: Collection;
    uses?: Uses;
    newUpdateAuthority?: PublicKey;
    primarySaleHappened?: boolean;
    isMutable?: boolean;
    updateAuthority?: Signer;
    confirmOptions?: ConfirmOptions;
}
export interface UpdateNftOutput {
    transactionId: string;
}
export declare const updateNftOperationHandler: OperationHandler<UpdateNftOperation>;
export interface UpdateNftBuilderParams {
    data: DataV2;
    newUpdateAuthority: PublicKey;
    primarySaleHappened: boolean;
    isMutable: boolean;
    updateAuthority: Signer;
    metadata: PublicKey;
    instructionKey?: string;
}
export declare const updateNftBuilder: (params: UpdateNftBuilderParams) => TransactionBuilder;
export {};
