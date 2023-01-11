import type { Metaplex } from "../../Metaplex";
import { findAllByAuthority, findAllByWallet, findByAddress, findByAuthorityAndUuid } from './Client.queries';
import { create, createFromConfig } from './Client.create';
import { update, updateAuthority } from './Client.update';
import { uploadAssetForCandyMachine, uploadAssetsForCandyMachine } from './Client.upload';
import { addAssets } from './Client.add';
export declare class CandyMachineClient {
    readonly metaplex: Metaplex;
    constructor(metaplex: Metaplex);
    findByAddress: typeof findByAddress;
    findAllByWallet: typeof findAllByWallet;
    findAllByAuthority: typeof findAllByAuthority;
    findByAuthorityAndUuid: typeof findByAuthorityAndUuid;
    create: typeof create;
    createFromConfig: typeof createFromConfig;
    update: typeof update;
    updateAuthority: typeof updateAuthority;
    addAssets: typeof addAssets;
    uploadAssetForCandyMachine: typeof uploadAssetForCandyMachine;
    uploadAssetsForCandyMachine: typeof uploadAssetsForCandyMachine;
}
