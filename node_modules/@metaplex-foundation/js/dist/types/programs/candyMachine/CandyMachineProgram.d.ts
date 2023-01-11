import { CandyMachineGpaBuilder } from './gpaBuilders';
import { Metaplex } from "../../Metaplex";
export declare const CandyMachineProgram: {
    publicKey: import("@solana/web3.js").PublicKey;
    accounts(metaplex: Metaplex): CandyMachineGpaBuilder;
};
