import BN from 'bn.js';
import { Opaque } from "../utils";
export declare type Amount = {
    basisPoints: BasisPoints;
    currency: Currency;
};
export declare type BasisPoints = Opaque<BN, 'BasisPoints'>;
export declare type Currency = {
    symbol: string;
    decimals: number;
    namespace?: 'spl-token';
};
export declare const SOL: {
    symbol: string;
    decimals: number;
};
export declare const USD: {
    symbol: string;
    decimals: number;
};
export declare const amount: (basisPoints: number | BN, currency: Currency) => Amount;
export declare const lamports: (lamports: number | BN) => Amount;
export declare const sol: (sol: number) => Amount;
export declare const usd: (usd: number) => Amount;
export declare const toBasisPoints: (value: number | BN) => BasisPoints;
export declare const isSol: (currencyOrAmount: Currency | Amount) => boolean;
export declare const sameCurrencies: (left: Currency | Amount, right: Currency | Amount) => boolean;
export declare const assertCurrency: (actual: Currency | Amount, expected: Currency) => void;
export declare const assertSol: (actual: Currency | Amount) => void;
export declare const assertSameCurrencies: (left: Currency | Amount, right: Currency | Amount, operation?: string | undefined) => void;
export declare const addAmounts: (left: Amount, right: Amount) => Amount;
export declare const subtractAmounts: (left: Amount, right: Amount) => Amount;
export declare const multiplyAmount: (left: Amount, multiplier: number) => Amount;
export declare const divideAmount: (left: Amount, divisor: number) => Amount;
export declare const compareAmounts: (left: Amount, right: Amount) => -1 | 0 | 1;
export declare const isEqualToAmount: (left: Amount, right: Amount) => boolean;
export declare const isLessThanAmount: (left: Amount, right: Amount) => boolean;
export declare const isLessThanOrEqualToAmount: (left: Amount, right: Amount) => boolean;
export declare const isGreaterThanAmount: (left: Amount, right: Amount) => boolean;
export declare const isGreaterThanOrEqualToAmount: (left: Amount, right: Amount) => boolean;
export declare const isZeroAmount: (value: Amount) => boolean;
export declare const isPositiveAmount: (value: Amount) => boolean;
export declare const isNegativeAmount: (value: Amount) => boolean;
export declare const formatAmount: (value: Amount) => string;
