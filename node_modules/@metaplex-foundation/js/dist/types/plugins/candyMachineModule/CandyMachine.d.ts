/// <reference types="node" />
import { PublicKey } from '@solana/web3.js';
import { bignum } from '@metaplex-foundation/beet';
import { CandyMachineData, ConfigLine, Creator, EndSettings, GatekeeperConfig, HiddenSettings, WhitelistMintSettings } from '@metaplex-foundation/mpl-candy-machine';
import { CandyMachineAccount } from "../../programs";
import { Model } from "../../types";
export declare class CandyMachine extends Model {
    readonly candyMachineAccount: CandyMachineAccount;
    readonly rawData: Buffer;
    readonly uuid: string;
    readonly price: bignum;
    readonly symbol: string;
    readonly sellerFeeBasisPoints: number;
    readonly maxSupply: bignum;
    readonly isMutable: boolean;
    readonly retainAuthority: boolean;
    readonly goLiveDate?: bignum;
    readonly itemsAvailable: bignum;
    readonly endSettings?: EndSettings;
    readonly hiddenSettings?: HiddenSettings;
    readonly whitelistMintSettings?: WhitelistMintSettings;
    readonly gatekeeper?: GatekeeperConfig;
    readonly creators: Creator[];
    readonly itemsRedeemed: bignum;
    readonly authorityAddress: PublicKey;
    readonly walletAddress: PublicKey;
    readonly tokenMintAddress?: PublicKey;
    /**
     * Address at which the Candy Machine is stored on chain.
     */
    readonly candyMachineAddress: PublicKey;
    private constructor();
    get assetsCount(): number;
    get assets(): ConfigLine[];
    get isFull(): boolean;
    get candyMachineData(): CandyMachineData;
    updatedCandyMachineData(update: Partial<CandyMachineData> & Record<string, any>): CandyMachineData;
    static fromAccount(candyMachineAccount: CandyMachineAccount, rawData: Buffer): CandyMachine;
}
