import type { CandyMachine } from './CandyMachine';
import { ConfigLine, Creator } from '@metaplex-foundation/mpl-candy-machine';
export declare function creatorsToJsonMetadataCreators(creators: Creator[]): {
    address: string;
    share: number;
    verified: boolean;
}[];
export declare function assertNotFull(candyMachine: CandyMachine, index: number): void;
export declare function assertCanAdd(candyMachine: CandyMachine, index: number, amount: number): void;
export declare function assertAllConfigLineConstraints(configLines: ConfigLine[]): void;
