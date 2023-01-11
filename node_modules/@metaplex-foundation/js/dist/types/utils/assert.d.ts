/**
 * Error indicating that an assertion failed.
 */
export declare class AssertionError extends Error {
    constructor(message: string);
}
/**
 * Assserts that the provided condition is true.
 */
declare function assert(condition: boolean, message?: string): asserts condition;
declare namespace assert {
    var equal: <T>(actual: unknown, expected: T, message?: string | undefined) => asserts actual is T;
}
export default assert;
