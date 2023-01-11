/// <reference types="node" />
import { Buffer } from 'buffer';
import { AccountInfo, Blockhash, Commitment, ConfirmOptions, GetProgramAccountsConfig, PublicKey, RpcResponseAndContext, SendOptions, SignatureResult, Transaction, TransactionSignature } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Signer, UnparsedAccount, UnparsedMaybeAccount, Amount } from "../../types";
import { TransactionBuilder } from "../../utils";
import { MetaplexError } from "../../errors";
export declare type ConfirmTransactionResponse = RpcResponseAndContext<SignatureResult>;
export declare type SendAndConfirmTransactionResponse = {
    signature: TransactionSignature;
    confirmResponse: ConfirmTransactionResponse;
};
export declare class RpcClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    sendTransaction(transaction: Transaction | TransactionBuilder, signers?: Signer[], sendOptions?: SendOptions): Promise<TransactionSignature>;
    confirmTransaction(signature: TransactionSignature, commitment?: Commitment): Promise<ConfirmTransactionResponse>;
    sendAndConfirmTransaction(transaction: Transaction | TransactionBuilder, signers?: Signer[], confirmOptions?: ConfirmOptions): Promise<SendAndConfirmTransactionResponse>;
    getAccount(publicKey: PublicKey, commitment?: Commitment): Promise<UnparsedMaybeAccount>;
    getMultipleAccounts(publicKeys: PublicKey[], commitment?: Commitment): Promise<UnparsedMaybeAccount[]>;
    getProgramAccounts(programId: PublicKey, configOrCommitment?: GetProgramAccountsConfig | Commitment): Promise<UnparsedAccount[]>;
    airdrop(publicKey: PublicKey, amount: Amount, commitment?: Commitment): Promise<SendAndConfirmTransactionResponse>;
    getBalance(publicKey: PublicKey, commitment?: Commitment): Promise<Amount>;
    getRent(bytes: number, commitment?: Commitment): Promise<Amount>;
    getLatestBlockhash(): Promise<Blockhash>;
    protected getDefaultFeePayer(): PublicKey | undefined;
    protected getUnparsedMaybeAccount(publicKey: PublicKey, accountInfo: AccountInfo<Buffer> | null): UnparsedMaybeAccount;
    protected parseProgramError(error: unknown, transaction: Transaction): MetaplexError;
}
