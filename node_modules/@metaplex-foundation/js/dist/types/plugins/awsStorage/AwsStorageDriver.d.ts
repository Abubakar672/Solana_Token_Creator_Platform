import { S3Client } from '@aws-sdk/client-s3';
import { Amount } from "../../types";
import { MetaplexFile, StorageDriver } from '../storageModule';
export declare class AwsStorageDriver implements StorageDriver {
    protected client: S3Client;
    protected bucketName: string;
    constructor(client: S3Client, bucketName: string);
    getUploadPrice(_bytes: number): Promise<Amount>;
    upload(file: MetaplexFile): Promise<string>;
    getUrl(key: string): Promise<string>;
}
