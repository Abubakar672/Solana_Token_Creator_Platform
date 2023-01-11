/// <reference types="node" />
/// <reference types="node" />
import { DataItem } from "arbundles";
import { AxiosResponse } from "axios";
import Utils from "./utils";
import Api from "./api";
import { Currency, Manifest } from "./types";
import { Readable } from "stream";
export declare const sleep: (ms: number) => Promise<void>;
export default class Uploader {
    protected readonly api: Api;
    protected currency: string;
    protected currencyConfig: Currency;
    protected utils: Utils;
    protected contentTypeOverride: string;
    protected forceUseChunking: boolean;
    constructor(api: Api, utils: Utils, currency: string, currencyConfig: Currency);
    /**
     * Uploads data to the bundler
     * @param data
     * @param tags
     * @returns the response from the bundler
     */
    upload(data: Buffer, tags?: {
        name: string;
        value: string;
    }[]): Promise<AxiosResponse<any>>;
    /**
     * Uploads a given transaction to the bundler
     * @param transaction
     */
    transactionUploader(transaction: DataItem): Promise<AxiosResponse<any>>;
    concurrentUploader(data: (DataItem | Buffer | string)[], concurrency?: number, resultProcessor?: (res: any) => Promise<any>, logFunction?: (log: string) => Promise<any>): Promise<{
        errors: Array<any>;
        results: Array<any>;
    }>;
    protected processItem(item: string | Buffer | DataItem): Promise<any>;
    /**
     * geneates a manifest JSON object
     * @param config.items mapping of logical paths to item IDs
     * @param config.indexFile optional logical path of the index file for the manifest
     * @returns
     */
    generateManifest(config: {
        items: Map<string, string>;
        indexFile?: string;
    }): Promise<Manifest>;
    /**
     * Chunking data uploader
     * @param dataStream - Readble of a pre-signed dataItem
     * @param id - the ID of the dataItem
     * @param size - the size of the dataItem
     * @param chunkSize - optional size to chunk the file - min 100_000, max 190_000_000 (in bytes)
     * @param batchSize - number of chunks to concurrently upload
     */
    chunkedTransactionUploader(dataStream: Readable | Buffer, id: string, size: number, chunkSize?: number, batchSize?: number): Promise<any>;
    set useChunking(state: boolean);
    set contentType(type: string);
}
