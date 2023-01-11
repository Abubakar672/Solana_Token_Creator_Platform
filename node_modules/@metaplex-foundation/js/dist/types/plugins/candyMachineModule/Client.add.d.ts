import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import { Signer } from "../../types";
import { ConfigLine } from '@metaplex-foundation/mpl-candy-machine';
import type { CandyMachineClient } from './CandyMachineClient';
export declare type AddAssetsToCandyMachineParams = {
    candyMachineAddress: PublicKey;
    authoritySigner: Signer;
    assets: ConfigLine[];
    confirmOptions?: ConfirmOptions;
};
export declare function addAssets(this: CandyMachineClient, params: AddAssetsToCandyMachineParams): Promise<{
    transactionId: string;
    confirmResponse: import("@solana/web3.js").RpcResponseAndContext<import("@solana/web3.js").SignatureResult>;
    candyMachine: import("./CandyMachine").CandyMachine | null;
}>;
