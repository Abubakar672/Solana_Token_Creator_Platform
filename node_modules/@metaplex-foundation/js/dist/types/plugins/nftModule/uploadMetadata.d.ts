import { Operation, OperationHandler } from "../../types";
import { JsonMetadata } from './JsonMetadata';
import { MetaplexFile } from '../storageModule';
declare const Key: "UploadMetadataOperation";
export declare const uploadMetadataOperation: import("../../types").OperationConstructor<UploadMetadataOperation, "UploadMetadataOperation", UploadMetadataInput, UploadMetadataOutput>;
export declare type UploadMetadataOperation = Operation<typeof Key, UploadMetadataInput, UploadMetadataOutput>;
export declare type UploadMetadataInput = JsonMetadata<MetaplexFile | string>;
export interface UploadMetadataOutput {
    metadata: JsonMetadata;
    assetUris: string[];
    uri: string;
}
export declare const uploadMetadataOperationHandler: OperationHandler<UploadMetadataOperation>;
export declare const getAssetsFromJsonMetadata: (input: UploadMetadataInput) => MetaplexFile[];
export declare const replaceAssetsWithUris: (input: UploadMetadataInput, replacements: string[]) => JsonMetadata;
export {};
