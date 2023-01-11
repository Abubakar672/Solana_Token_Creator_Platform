import { PublicKey } from '@solana/web3.js';
import type { Metaplex } from "../../Metaplex";
import { Nft } from './Nft';
import { UploadMetadataInput, UploadMetadataOutput } from './uploadMetadata';
import { CreateNftInput, CreateNftOutput } from './createNft';
import { UpdateNftInput, UpdateNftOutput } from './updateNft';
import { PrintNewEditionOutput, PrintNewEditionSharedInput, PrintNewEditionViaInput } from './printNewEdition';
export declare class NftClient {
    protected readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    findByMint(mint: PublicKey): Promise<Nft>;
    findAllByMintList(mints: PublicKey[]): Promise<(Nft | null)[]>;
    findAllByOwner(owner: PublicKey): Promise<Nft[]>;
    findAllByCreator(creator: PublicKey, position?: number): Promise<Nft[]>;
    findAllByCandyMachine(candyMachine: PublicKey, version?: 1 | 2): Promise<Nft[]>;
    uploadMetadata(input: UploadMetadataInput): Promise<UploadMetadataOutput>;
    create(input: CreateNftInput): Promise<{
        nft: Nft;
    } & CreateNftOutput>;
    update(nft: Nft, input: Omit<UpdateNftInput, 'nft'>): Promise<{
        nft: Nft;
    } & UpdateNftOutput>;
    printNewEdition(originalMint: PublicKey, input?: Omit<PrintNewEditionSharedInput, 'originalMint'> & PrintNewEditionViaInput): Promise<{
        nft: Nft;
    } & PrintNewEditionOutput>;
}
