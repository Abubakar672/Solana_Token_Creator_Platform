import { MetaplexPlugin } from "../../types";
import { CandyMachineClient } from './CandyMachineClient';
export declare const candyMachineModule: () => MetaplexPlugin;
declare module '../../Metaplex' {
    interface Metaplex {
        candyMachines(): CandyMachineClient;
    }
}
