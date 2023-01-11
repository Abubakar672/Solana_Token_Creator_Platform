import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { Pda } from "../../../types";
export declare const findEditionMarkerPda: (mint: PublicKey, edition: BN, programId?: PublicKey) => Pda;
