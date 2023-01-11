import { PublicKey, Transaction } from '@solana/web3.js';
export declare type Signer = KeypairSigner | IdentitySigner;
export declare type KeypairSigner = {
    publicKey: PublicKey;
    secretKey: Uint8Array;
};
export declare type IdentitySigner = {
    publicKey: PublicKey;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    signTransaction(transaction: Transaction): Promise<Transaction>;
    signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
};
export declare const isKeypairSigner: (signer: Signer) => signer is KeypairSigner;
export declare const isIdentitySigner: (signer: Signer) => signer is IdentitySigner;
export interface SignerHistogram {
    all: Signer[];
    keypairs: KeypairSigner[];
    identities: IdentitySigner[];
}
export declare const getSignerHistogram: (signers: Signer[]) => SignerHistogram;
