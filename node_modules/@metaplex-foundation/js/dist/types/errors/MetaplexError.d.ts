export declare type MetaplexErrorSource = 'sdk' | 'network' | 'rpc' | 'plugin' | 'program';
export declare type MetaplexErrorInput = {
    key: string;
    title: string;
    problem: string;
    solution: string;
    source: MetaplexErrorSource;
    sourceDetails?: string;
    cause?: Error;
    logs?: string[];
};
export declare type MetaplexErrorInputWithoutSource = Omit<MetaplexErrorInput, 'source' | 'sourceDetails'>;
export declare class MetaplexError extends Error {
    readonly name: 'MetaplexError';
    readonly key: string;
    readonly title: string;
    readonly problem: string;
    readonly solution: string;
    readonly source: MetaplexErrorSource;
    readonly sourceDetails?: string;
    readonly cause?: Error;
    readonly logs?: string[];
    constructor(input: MetaplexErrorInput);
    getCapitalizedSource(): string;
    getFullSource(): string;
    toString(withName?: boolean): string;
}
