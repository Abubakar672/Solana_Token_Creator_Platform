import { GpaBuilder } from "../../../utils";
import { PublicKey } from '@solana/web3.js';
declare type AccountDiscriminator = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export declare class CandyMachineGpaBuilder extends GpaBuilder {
    whereDiscriminator(discrimator: AccountDiscriminator): this;
    candyMachineAccounts(): this;
    candyMachineAccountsForWallet(wallet: PublicKey): this;
    candyMachineAccountsForAuthority(authority: PublicKey): this;
}
export {};
