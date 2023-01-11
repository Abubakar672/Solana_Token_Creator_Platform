/// <reference types="node" />
import { CandyMachineData, ConfigLine, Creator } from '@metaplex-foundation/mpl-candy-machine';
export declare function getSpaceForCandy(data: CandyMachineData): number;
export declare function getConfigLinesCount(rawData: Buffer): number;
export declare function getConfigLines(rawData: Buffer): ConfigLine[];
export declare function assertName(name: string): void;
export declare function assertSymbol(symbol: string): void;
export declare function assertUri(uri: string): void;
export declare function assertCreators(creators: Creator[]): void;
export declare function assertConfigLineConstraints({ name, uri, }: {
    name: string;
    uri: string;
}): void;
