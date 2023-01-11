import type { Metaplex } from "../../Metaplex";
import { Amount } from "../../types";
export declare class UtilsClient {
    protected readonly metaplex: Metaplex;
    protected cachedRentPerEmptyAccount: Amount | null;
    protected cachedRentPerByte: Amount | null;
    constructor(metaplex: Metaplex);
    estimate(bytes: number, numberOfAccounts?: number, numberOfTransactions?: number, useCache?: boolean): Promise<Amount>;
    estimateRent(bytes: number, numberOfAccounts?: number, useCache?: boolean): Promise<Amount>;
    estimateTransactionFee(numberOfTransactions?: number): Amount;
}
