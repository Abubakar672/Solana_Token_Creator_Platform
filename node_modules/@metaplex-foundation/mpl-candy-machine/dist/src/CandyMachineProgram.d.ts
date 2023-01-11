/// <reference types="@solana/web3.js" />
import { Program } from '@metaplex-foundation/mpl-core';
import * as errors from './generated/errors';
import * as instructions from './generated/instructions';
import * as accounts from './generated/accounts';
export declare class CandyMachineProgram extends Program {
    static readonly PREFIX = "metaplex";
    static readonly CONFIG = "config";
    static readonly TOTALS = "totals";
    static readonly PUBKEY: import("@solana/web3.js").PublicKey;
    static readonly instructions: typeof instructions;
    static readonly errors: typeof errors;
    static readonly accounts: typeof accounts;
}
