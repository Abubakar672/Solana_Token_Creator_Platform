import { Blockhash, PublicKey, SignaturePubkeyPair, Transaction, TransactionInstruction } from '@solana/web3.js';
import { Signer } from "../types";
export interface InstructionWithSigners {
    key?: string;
    instruction: TransactionInstruction;
    signers: Signer[];
}
declare type TransactionOptions = {
    /** The transaction fee payer */
    feePayer?: PublicKey | null;
    /** One or more signatures */
    signatures?: Array<SignaturePubkeyPair>;
    /** A recent blockhash */
    blockhash: Blockhash;
    /** the last block chain can advance to before tx is exportd expired */
    lastValidBlockHeight: number;
};
export declare class TransactionBuilder {
    /** The list of all instructions and their respective signers. */
    private records;
    /** Options used when building the transaction. */
    private transactionOptions?;
    /** The signer to use to pay for transaction fees. */
    private feePayer;
    constructor(transactionOptions?: TransactionOptions);
    static make(transactionOptions?: TransactionOptions): TransactionBuilder;
    prepend(...txs: (InstructionWithSigners | TransactionBuilder)[]): TransactionBuilder;
    append(...txs: (InstructionWithSigners | TransactionBuilder)[]): TransactionBuilder;
    add(...txs: (InstructionWithSigners | TransactionBuilder)[]): TransactionBuilder;
    splitUsingKey(key: string, include?: boolean): [TransactionBuilder, TransactionBuilder];
    splitBeforeKey(key: string): [TransactionBuilder, TransactionBuilder];
    splitAfterKey(key: string): [TransactionBuilder, TransactionBuilder];
    getInstructionsWithSigners(): InstructionWithSigners[];
    getInstructions(): TransactionInstruction[];
    getSigners(): Signer[];
    setTransactionOptions(transactionOptions: TransactionOptions): TransactionBuilder;
    getTransactionOptions(): TransactionOptions | undefined;
    setFeePayer(feePayer: Signer): TransactionBuilder;
    getFeePayer(): PublicKey | undefined;
    when(condition: boolean, callback: (tx: TransactionBuilder) => TransactionBuilder): TransactionBuilder;
    unless(condition: boolean, callback: (tx: TransactionBuilder) => TransactionBuilder): TransactionBuilder;
    toTransaction(): Transaction;
}
export {};
