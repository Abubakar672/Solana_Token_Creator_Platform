import { PublicKey, Transaction } from '@solana/web3.js';
import { IdentityDriver } from '../identityModule';
export declare class GuestIdentityDriver implements IdentityDriver {
    readonly publicKey: PublicKey;
    constructor();
    signMessage(_message: Uint8Array): Promise<Uint8Array>;
    signTransaction(_transaction: Transaction): Promise<Transaction>;
    signAllTransactions(_transactions: Transaction[]): Promise<Transaction[]>;
}
