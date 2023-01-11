import BN from 'bn.js';
import { Amount } from "../../types";
import { MetaplexFile, StorageDriver } from '../storageModule';
export declare type MockStorageOptions = {
    baseUrl?: string;
    costPerByte?: BN | number;
};
export declare class MockStorageDriver implements StorageDriver {
    private cache;
    readonly baseUrl: string;
    readonly costPerByte: BN;
    constructor(options?: MockStorageOptions);
    getUploadPrice(bytes: number): Promise<Amount>;
    upload(file: MetaplexFile): Promise<string>;
    download(uri: string): Promise<MetaplexFile>;
}
