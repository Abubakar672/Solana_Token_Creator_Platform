import { HasDriver, Amount } from "../../types";
import { MetaplexFile } from './MetaplexFile';
import { StorageDriver } from './StorageDriver';
export declare class StorageClient implements HasDriver<StorageDriver> {
    private _driver;
    driver(): StorageDriver;
    setDriver(newDriver: StorageDriver): void;
    getUploadPriceForBytes(bytes: number): Promise<Amount>;
    getUploadPriceForFile(file: MetaplexFile): Promise<Amount>;
    getUploadPriceForFiles(files: MetaplexFile[]): Promise<Amount>;
    upload(file: MetaplexFile): Promise<string>;
    uploadAll(files: MetaplexFile[]): Promise<string[]>;
    uploadJson<T extends object = object>(json: T): Promise<string>;
    download(uri: string, options?: RequestInit): Promise<MetaplexFile>;
    downloadJson<T extends object = object>(uri: string, options?: RequestInit): Promise<T>;
}
