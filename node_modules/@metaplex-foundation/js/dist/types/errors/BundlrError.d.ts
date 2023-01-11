import { MetaplexError, MetaplexErrorInputWithoutSource } from './MetaplexError';
export declare class BundlrError extends MetaplexError {
    constructor(input: MetaplexErrorInputWithoutSource);
}
export declare class FailedToInitializeBundlrError extends BundlrError {
    constructor(cause: Error);
}
export declare class FailedToConnectToBundlrAddressError extends BundlrError {
    constructor(address: string, cause?: Error);
}
export declare class AssetUploadFailedError extends BundlrError {
    constructor(status: number, cause?: Error);
}
export declare class BundlrWithdrawError extends BundlrError {
    constructor(status: number, cause?: Error);
}
