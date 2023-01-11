import { PublicKey } from '@solana/web3.js';
import { MetaplexError, MetaplexErrorInputWithoutSource } from './MetaplexError';
export declare class NftError extends MetaplexError {
    constructor(input: MetaplexErrorInputWithoutSource);
}
export declare class NftNotFoundError extends NftError {
    constructor(mint: PublicKey, cause?: Error);
}
