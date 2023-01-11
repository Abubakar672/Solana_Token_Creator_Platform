import { ConfirmOptions, PublicKey } from '@solana/web3.js';
import { Signer } from "../../types";
import { CandyMachineConfigWithoutStorage } from './config';
import { CreateCandyMachineInput, CreateCandyMachineOutput } from './createCandyMachine';
import { CandyMachine } from './CandyMachine';
import type { CandyMachineClient } from './CandyMachineClient';
export declare type CandyMachineInitFromConfigOpts = {
    candyMachineSigner?: Signer;
    authorityAddress?: PublicKey;
    confirmOptions?: ConfirmOptions;
};
export declare function create(this: CandyMachineClient, input: CreateCandyMachineInput): Promise<CreateCandyMachineOutput & {
    candyMachine: CandyMachine;
}>;
export declare function createFromConfig(this: CandyMachineClient, config: CandyMachineConfigWithoutStorage, opts: CandyMachineInitFromConfigOpts): Promise<CreateCandyMachineOutput & {
    candyMachine: CandyMachine;
}>;
