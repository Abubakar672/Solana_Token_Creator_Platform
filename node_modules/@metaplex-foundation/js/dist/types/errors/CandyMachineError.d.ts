import { bignum } from '@metaplex-foundation/beet';
import { ConfigLine } from '@metaplex-foundation/mpl-candy-machine';
import { PublicKey } from '@solana/web3.js';
import { MetaplexError, MetaplexErrorInputWithoutSource } from './MetaplexError';
export declare class CandyMachineError extends MetaplexError {
    constructor(input: MetaplexErrorInputWithoutSource);
}
export declare class CandyMachineNotFoundError extends CandyMachineError {
    constructor(candyMachineAddress: PublicKey, cause?: Error);
}
export declare class CreatedCandyMachineNotFoundError extends CandyMachineError {
    constructor(candyMachineAddress: PublicKey, cause?: Error);
}
export declare class CandyMachineToUpdateNotFoundError extends CandyMachineError {
    constructor(candyMachineAddress: PublicKey, cause?: Error);
}
export declare class UpdatedCandyMachineNotFoundError extends CandyMachineError {
    constructor(candyMachineAddress: PublicKey, cause?: Error);
}
export declare class CandyMachinesNotFoundByAuthorityError extends CandyMachineError {
    constructor(authorityAddress: PublicKey, cause?: Error);
}
export declare class NoCandyMachineFoundForAuthorityMatchesUuidError extends CandyMachineError {
    constructor(authorityAddress: PublicKey, uuid: string, candyMachineAddresses: PublicKey[], cause?: Error);
}
export declare class MoreThanOneCandyMachineFoundByAuthorityAndUuidError extends CandyMachineError {
    constructor(authorityAddress: PublicKey, uuid: string, candyMachineAddresses: PublicKey[], cause?: Error);
}
export declare class CandyMachineAlreadyHasThisAuthorityError extends CandyMachineError {
    constructor(authorityAddress: PublicKey, cause?: Error);
}
export declare class CandyMachineIsFullError extends CandyMachineError {
    constructor(index: number, maxSupply: bignum, cause?: Error);
}
export declare class CandyMachineCannotAddAmountError extends CandyMachineError {
    constructor(index: number, amount: number, maxSupply: bignum, cause?: Error);
}
export declare class CandyMachineAddConfigConstraintsViolatedError extends CandyMachineError {
    constructor(index: number, configLine: ConfigLine, cause?: Error);
}
