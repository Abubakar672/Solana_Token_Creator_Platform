import { PublicKey } from '@solana/web3.js';
import { Cluster, Program, Currency } from "../types";
import { MetaplexError, MetaplexErrorInputWithoutSource } from './MetaplexError';
export declare class SdkError extends MetaplexError {
    constructor(input: MetaplexErrorInputWithoutSource);
}
export declare class OperationHandlerMissingError extends SdkError {
    constructor(operationKey: string, cause?: Error);
}
export declare class DriverNotProvidedError extends SdkError {
    constructor(driver: string, cause?: Error);
}
export declare class UnexpectedCurrencyError extends SdkError {
    actual: Currency;
    expected: Currency;
    constructor(actual: Currency, expected: Currency, cause?: Error);
}
export declare class CurrencyMismatchError extends SdkError {
    left: Currency;
    right: Currency;
    operation?: string;
    constructor(left: Currency, right: Currency, operation?: string, cause?: Error);
}
export declare class InvalidJsonVariableError extends SdkError {
    constructor(cause?: Error);
}
export declare class InvalidJsonStringError extends SdkError {
    constructor(cause?: Error);
}
export declare class OperationUnauthorizedForGuestsError extends SdkError {
    constructor(operation: string, cause?: Error);
}
export declare class UninitializedWalletAdapterError extends SdkError {
    constructor(cause?: Error);
}
export declare class OperationNotSupportedByWalletAdapterError extends SdkError {
    constructor(operation: string, cause?: Error);
}
export declare class TaskIsAlreadyRunningError extends SdkError {
    constructor(cause?: Error);
}
export declare class AssetNotFoundError extends SdkError {
    constructor(location: string, cause?: Error);
}
export declare class AccountNotFoundError extends SdkError {
    constructor(address: PublicKey, accountType?: string, solution?: string, cause?: Error);
}
export declare class UnexpectedAccountError extends SdkError {
    constructor(address: PublicKey, accountType: string, cause?: Error);
}
export declare class ProgramNotRecognizedError extends SdkError {
    nameOrAddress: string | PublicKey;
    cluster: Cluster;
    constructor(nameOrAddress: string | PublicKey, cluster: Cluster, cause?: Error);
}
export declare class MissingGpaBuilderError extends SdkError {
    program: Program;
    constructor(program: Program, cause?: Error);
}
export declare class NotYetImplementedError extends SdkError {
    constructor(cause?: Error);
}
export declare class UnreachableCaseError extends SdkError {
    constructor(value: never, cause?: Error);
}
