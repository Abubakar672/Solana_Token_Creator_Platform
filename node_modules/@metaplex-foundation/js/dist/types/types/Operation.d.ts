import { Metaplex } from "../Metaplex";
import { DisposableScope } from "../utils";
export declare type KeyOfOperation<T> = T extends Operation<infer N, unknown, unknown> ? N : never;
export declare type InputOfOperation<T> = T extends Operation<string, infer I, unknown> ? I : never;
export declare type OutputOfOperation<T> = T extends Operation<string, unknown, infer O> ? O : never;
export declare type Operation<K extends string, I, O> = {
    key: K;
    input: I;
    __output?: O;
};
export declare type OperationConstructor<T extends Operation<K, I, O>, K extends string = KeyOfOperation<T>, I = InputOfOperation<T>, O = OutputOfOperation<T>> = {
    key: string;
    (input: I): T;
};
export declare type OperationHandler<T extends Operation<K, I, O>, K extends string = KeyOfOperation<T>, I = InputOfOperation<T>, O = OutputOfOperation<T>> = {
    handle: (operation: T, metaplex: Metaplex, scope: DisposableScope) => O | Promise<O>;
};
export declare const useOperation: <T extends Operation<K, I, O>, K extends string = KeyOfOperation<T>, I = InputOfOperation<T>, O = OutputOfOperation<T>>(key: K) => OperationConstructor<T, K, I, O>;
