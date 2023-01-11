/// <reference types="node" />
import { Buffer } from 'buffer';
export declare type MetaplexFile = Readonly<{
    buffer: Buffer;
    fileName: string;
    displayName: string;
    uniqueName: string;
    contentType: string | null;
    extension: string | null;
    tags: MetaplexFileTag[];
}>;
export declare type MetaplexFileContent = string | Buffer | Uint8Array | ArrayBuffer;
export declare type MetaplexFileTag = {
    name: string;
    value: string;
};
export declare type MetaplexFileOptions = {
    displayName?: string;
    uniqueName?: string;
    contentType?: string;
    extension?: string;
    tags?: {
        name: string;
        value: string;
    }[];
};
export declare const useMetaplexFile: (content: MetaplexFileContent, fileName: string, options?: MetaplexFileOptions) => MetaplexFile;
export declare const useMetaplexFileFromBrowser: (file: File, options?: MetaplexFileOptions) => Promise<MetaplexFile>;
export declare const useMetaplexFileFromJson: <T extends object = object>(json: T, fileName?: string, options?: MetaplexFileOptions) => MetaplexFile;
export declare const parseMetaplexFileContent: (content: MetaplexFileContent) => Buffer;
export declare const getBytesFromMetaplexFiles: (...files: MetaplexFile[]) => number;
export declare const getBrowserFileFromMetaplexFile: (file: MetaplexFile) => File;
export declare const isMetaplexFile: (metaplexFile: any) => metaplexFile is Readonly<{
    buffer: Buffer;
    fileName: string;
    displayName: string;
    uniqueName: string;
    contentType: string | null;
    extension: string | null;
    tags: MetaplexFileTag[];
}>;
