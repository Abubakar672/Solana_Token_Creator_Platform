import { PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Program, Cluster } from "../../types";
import { GpaBuilder } from "../../utils";
export declare class ProgramClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    protected programs: Program[];
    register(program: Program): void;
    all(): Program[];
    allForCluster(cluster: Cluster): Program[];
    allForCurrentCluster(): Program[];
    get(nameOrAddress: string | PublicKey): Program;
    getGpaBuilder<T extends GpaBuilder>(nameOrAddress: string | PublicKey): T;
}
