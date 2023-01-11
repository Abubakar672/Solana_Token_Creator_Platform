import { SendTransactionError, TransactionError } from '@solana/web3.js';
import type { ConfirmTransactionResponse } from "../plugins/rpcModule";
import { MetaplexError, MetaplexErrorInputWithoutSource } from './MetaplexError';
export declare class RpcError extends MetaplexError {
    constructor(input: MetaplexErrorInputWithoutSource);
}
export declare class FailedToSendTransactionError extends RpcError {
    constructor(cause: Error);
    asSendTransactionError(): SendTransactionError;
    get error(): string;
    get errorLogs(): string[];
}
export declare class FailedToConfirmTransactionError extends RpcError {
    constructor(cause: Error);
}
export declare class FailedToConfirmTransactionWithResponseError extends FailedToConfirmTransactionError {
    readonly response: ConfirmTransactionResponse;
    constructor(response: ConfirmTransactionResponse);
    get error(): TransactionError;
}
