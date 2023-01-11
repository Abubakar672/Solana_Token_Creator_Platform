import { Edition, MasterEditionV1, MasterEditionV2 } from '@metaplex-foundation/mpl-token-metadata';
import { Account } from "../../../types";
export declare type OriginalEditionAccountData = MasterEditionV1 | MasterEditionV2;
export declare type OriginalEditionAccount = Account<OriginalEditionAccountData>;
export declare type PrintEditionAccountData = Edition;
export declare type PrintEditionAccount = Account<PrintEditionAccountData>;
export declare type OriginalOrPrintEditionAccountData = OriginalEditionAccountData | PrintEditionAccountData;
export declare type OriginalOrPrintEditionAccount = Account<OriginalOrPrintEditionAccountData>;
export declare const parseOriginalOrPrintEditionAccount: import("../../../types").AccountParsingFunction<OriginalOrPrintEditionAccountData>;
export declare const parseOriginalEditionAccount: import("../../../types").AccountParsingFunction<OriginalEditionAccountData>;
export declare const parsePrintEditionAccount: import("../../../types").AccountParsingFunction<Edition>;
export declare const isOriginalEditionAccount: (account: OriginalOrPrintEditionAccount) => account is Readonly<{
    publicKey: import("@solana/web3.js").PublicKey;
    executable: boolean;
    owner: import("@solana/web3.js").PublicKey;
    lamports: number;
    data: OriginalEditionAccountData;
    rentEpoch?: number | undefined;
}>;
export declare const isPrintEditionAccount: (account: OriginalOrPrintEditionAccount) => account is Readonly<{
    publicKey: import("@solana/web3.js").PublicKey;
    executable: boolean;
    owner: import("@solana/web3.js").PublicKey;
    lamports: number;
    data: Edition;
    rentEpoch?: number | undefined;
}>;
