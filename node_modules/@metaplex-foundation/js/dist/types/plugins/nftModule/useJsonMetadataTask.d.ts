import { Metaplex } from "../../Metaplex";
import { Task } from "../../utils";
import { JsonMetadata } from './JsonMetadata';
import { Nft } from './Nft';
export declare type JsonMetadataTask = Task<JsonMetadata>;
export declare const useJsonMetadataTask: (metaplex: Metaplex, nft: Nft) => JsonMetadataTask;
