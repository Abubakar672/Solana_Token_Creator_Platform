import { Keypair, PublicKey, Transaction } from '@solana/web3.js';
import { KeypairSigner } from "../../types";
import { IdentityDriver } from '../identityModule';
export declare class KeypairIdentityDriver implements IdentityDriver, KeypairSigner {
    readonly keypair: Keypair;
    readonly publicKey: PublicKey;
    readonly secretKey: Uint8Array;
    constructor(keypair: Keypair);
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
}
