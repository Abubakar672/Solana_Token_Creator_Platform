import type { CandyMachineClient } from './CandyMachineClient';
import { CandyMachine } from './CandyMachine';
import { UpdateCandyMachineInputWithoutCandyMachineData, UpdateCandyMachineOutput } from './updateCandyMachine';
import { CandyMachineData } from '@metaplex-foundation/mpl-candy-machine';
import { UpdateAuthorityInput, UpdateAuthorityOutput } from './updateAuthority';
export declare type UpdateCandyMachineParams = UpdateCandyMachineInputWithoutCandyMachineData & Partial<CandyMachineData>;
export declare type UpdateCandyMachineAuthorityParams = UpdateAuthorityInput;
export declare function update(this: CandyMachineClient, input: UpdateCandyMachineParams): Promise<UpdateCandyMachineOutput & {
    candyMachine: CandyMachine;
}>;
export declare function updateAuthority(this: CandyMachineClient, input: UpdateCandyMachineAuthorityParams): Promise<UpdateAuthorityOutput & {
    candyMachine: CandyMachine;
}>;
