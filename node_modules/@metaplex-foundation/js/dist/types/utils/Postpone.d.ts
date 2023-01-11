declare type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
declare type AsArray<T> = ArrayElement<T>[];
declare type ArrayCallback<T, U> = (item: ArrayElement<T>, index: number, array: AsArray<T>) => U;
export declare class Postpone<T> {
    protected readonly value: () => Promise<T>;
    constructor(value: () => Promise<T>);
    static make<T>(value: () => Promise<T>): Postpone<T>;
    asyncPipe<U>(callback: (value: Promise<T>) => Promise<U>): Postpone<U>;
    pipe<U>(callback: (value: T) => U): Postpone<U>;
    asyncTap(callback: (value: Promise<T>) => Promise<unknown>): Postpone<T>;
    tap(callback: (value: T) => unknown): Postpone<T>;
    log(): Postpone<T>;
    map<U>(this: Postpone<AsArray<T>>, callback: ArrayCallback<T, U>): Postpone<U[]>;
    flatMap<U>(this: Postpone<AsArray<T>>, callback: ArrayCallback<T, U[]>): Postpone<U[]>;
    chunk(this: Postpone<AsArray<T>>, size: number): Postpone<AsArray<T>[]>;
    filter<U extends T>(this: Postpone<AsArray<T>>, callback: ArrayCallback<T, unknown>): Postpone<AsArray<U>>;
    run(): Promise<T>;
}
export {};
