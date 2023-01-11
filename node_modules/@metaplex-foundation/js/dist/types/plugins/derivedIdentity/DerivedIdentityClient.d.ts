import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Amount, IdentitySigner, KeypairSigner, Signer } from "../../types";
export declare class DerivedIdentityClient implements IdentitySigner, KeypairSigner {
    protected readonly metaplex: Metaplex;
    protected originalSigner: Signer | null;
    protected derivedKeypair: Keypair | null;
    constructor(metaplex: Metaplex);
    get publicKey(): PublicKey;
    get secretKey(): Uint8Array;
    get originalPublicKey(): PublicKey;
    deriveFrom(message: string | Uint8Array, originalSigner?: IdentitySigner): Promise<void>;
    fund(amount: Amount): Promise<void>;
    withdraw(amount: Amount): Promise<void>;
    withdrawAll(): Promise<void>;
    close(): void;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
    verifyMessage(message: Uint8Array, signature: Uint8Array): boolean;
    equals(that: Signer | PublicKey): boolean;
    assertInitialized(): asserts this is {
        originalSigner: Signer;
        derivedKeypair: Keypair;
    };
}
