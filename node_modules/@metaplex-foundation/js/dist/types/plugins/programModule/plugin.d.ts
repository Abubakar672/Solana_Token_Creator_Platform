import { MetaplexPlugin } from "../../types";
import { ProgramClient } from './ProgramClient';
export declare const programModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        programs(): ProgramClient;
    }
}
