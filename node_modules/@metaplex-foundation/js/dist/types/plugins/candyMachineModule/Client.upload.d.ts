import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import { Signer } from "../../types";
import { MetaplexFile } from "../storageModule";
import { JsonMetadata, UploadMetadataInput } from "../nftModule";
import type { CandyMachineClient } from './CandyMachineClient';
export declare type UploadAssetToCandyMachineParams = {
    candyMachineAddress: PublicKey;
    authoritySigner: Signer;
    metadata: UploadMetadataInput;
    addToCandyMachine?: boolean;
    confirmOptions?: ConfirmOptions;
};
export declare function uploadAssetForCandyMachine(this: CandyMachineClient, params: UploadAssetToCandyMachineParams): Promise<{
    metadata: JsonMetadata<string>;
    uri: string;
    addAssetsTransactionId: string | undefined;
}>;
export declare type UploadAssetsToCandyMachineParams = {
    candyMachineAddress: PublicKey;
    authoritySigner: Signer;
    assets: MetaplexFile[];
    parallel?: boolean;
    addToCandyMachine?: boolean;
    confirmOptions?: ConfirmOptions;
};
export declare type UploadedAsset = {
    uri: string;
    metadata: JsonMetadata<string>;
    name: string;
};
export declare function uploadAssetsForCandyMachine(this: CandyMachineClient, params: UploadAssetsToCandyMachineParams): Promise<{
    addAssetsTransactionId: string | undefined;
    uploadedAssets: UploadedAsset[];
    candyMachine: import("./CandyMachine").CandyMachine;
    errors: unknown[];
}>;
