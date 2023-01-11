import { Metaplex } from "../../Metaplex";
import { OriginalOrPrintEditionAccount } from "../../programs";
import { Task } from "../../utils";
import { Nft } from './Nft';
export declare type EditionTask = Task<OriginalOrPrintEditionAccount | null>;
export declare const useEditionTask: (metaplex: Metaplex, nft: Nft) => EditionTask;
