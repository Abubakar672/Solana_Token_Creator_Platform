/// <reference types="node" />
import { AccountInfo, Commitment, PublicKey, Connection } from '@solana/web3.js';
import { AnyPublicKey } from '../types';
import { Buffer } from 'buffer';
export declare type AccountConstructor<T> = {
    new (pubkey: AnyPublicKey, info: AccountInfo<Buffer>): T;
};
export declare class Account<T = unknown> {
    readonly pubkey: PublicKey;
    readonly info?: AccountInfo<Buffer>;
    data?: T;
    constructor(pubkey: AnyPublicKey, info?: AccountInfo<Buffer>);
    static from<T>(this: AccountConstructor<T>, account: Account<unknown>): Account<T>;
    static load<T>(this: AccountConstructor<T>, connection: Connection, pubkey: AnyPublicKey): Promise<T>;
    static isCompatible(_data: Buffer): boolean;
    static getInfo(connection: Connection, pubkey: AnyPublicKey): Promise<{
        data: Buffer;
        executable: boolean;
        owner: PublicKey;
        lamports: number;
        rentEpoch?: number | undefined;
    }>;
    static getInfos(connection: Connection, pubkeys: AnyPublicKey[], commitment?: Commitment): Promise<Map<AnyPublicKey, AccountInfo<Buffer>>>;
    private static getMultipleAccounts;
    assertOwner(pubkey: AnyPublicKey): boolean | undefined;
    toJSON(): {
        pubkey: string;
        info: {
            executable: boolean;
            owner: PublicKey | null;
            lamports: number | undefined;
            data: {
                type: "Buffer";
                data: number[];
            } | undefined;
        };
        data: T | undefined;
    };
    toString(): string;
}
