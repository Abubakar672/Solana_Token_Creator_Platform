import { Program } from "../types";
import { MetaplexError, MetaplexErrorInputWithoutSource } from './MetaplexError';
declare type UnderlyingProgramError = Error & {
    code?: number;
    logs?: string[];
};
export declare class ProgramError extends MetaplexError {
    program: Program;
    constructor(program: Program, input: MetaplexErrorInputWithoutSource);
}
export declare class ParsedProgramError extends ProgramError {
    constructor(program: Program, cause: UnderlyingProgramError);
}
export declare class UnknownProgramError extends ProgramError {
    constructor(program: Program, cause: UnderlyingProgramError);
}
export {};
