import { PublicKey } from '@solana/web3.js';
import { TokenStandard, Collection, Uses, Creator, MasterEditionV2Args, EditionArgs } from '@metaplex-foundation/mpl-token-metadata';
import { Metaplex } from "../../Metaplex";
import { MetadataAccount, OriginalEditionAccount, OriginalOrPrintEditionAccount, PrintEditionAccount } from "../../programs";
import { Model } from "../../types";
import { JsonMetadata } from './JsonMetadata';
import { JsonMetadataTask } from './useJsonMetadataTask';
import { EditionTask } from './useEditionTask';
export declare class Nft extends Model {
    /** The Metadata PDA account defining the NFT. */
    readonly metadataAccount: MetadataAccount;
    /** Tasks. */
    readonly metadataTask: JsonMetadataTask;
    readonly editionTask: EditionTask;
    /** Data from the Metadata account. */
    readonly updateAuthority: PublicKey;
    readonly mint: PublicKey;
    readonly name: string;
    readonly symbol: string;
    readonly uri: string;
    readonly sellerFeeBasisPoints: number;
    readonly creators: Creator[] | null;
    readonly primarySaleHappened: boolean;
    readonly isMutable: boolean;
    readonly editionNonce: number | null;
    readonly tokenStandard: TokenStandard | null;
    readonly collection: Collection | null;
    readonly uses: Uses | null;
    constructor(metadataAccount: MetadataAccount, metaplex: Metaplex);
    get metadata(): JsonMetadata;
    get editionAccount(): OriginalOrPrintEditionAccount | null;
    get originalEdition(): MasterEditionV2Args | null;
    get printEdition(): EditionArgs | null;
    equals(other: Nft | PublicKey): boolean;
    isOriginal(): this is {
        editionAccount: OriginalEditionAccount;
    };
    isPrint(): this is {
        editionAccount: PrintEditionAccount;
    };
}
