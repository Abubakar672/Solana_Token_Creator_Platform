import { MetaplexPlugin } from "../../types";
import { WalletAdapter } from './WalletAdapterIdentityDriver';
export declare const walletAdapterIdentity: (walletAdapter: WalletAdapter) => MetaplexPlugin;
export declare const walletOrGuestIdentity: (walletAdapter?: WalletAdapter | null | undefined) => MetaplexPlugin;
