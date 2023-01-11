import { CandyMachine } from '@metaplex-foundation/mpl-candy-machine';
import BN from 'bn.js';
import { creatorsConfigDefault } from './Creators.mjs';
import { endSettingsFromConfig } from './EndSettings.mjs';
import { gatekeeperFromConfig } from './Gatekeeper.mjs';
import { hiddenSettingsFromConfig } from './HiddenSettings.mjs';
import { whiteListMintSettingsFromConfig } from './WhitelistMint.mjs';
import { convertToPublickKey } from '../../../types/PublicKeyString.mjs';
import { convertToMillisecondsSinceEpoch } from '../../../types/DateTimeString.mjs';

function candyMachineDataFromConfig(config, candyMachineAddress) {
  var _config$creators, _hiddenSettingsFromCo, _endSettingsFromConfi, _whiteListMintSetting, _gatekeeperFromConfig, _config$symbol;

  const configCreators = (_config$creators = config.creators) !== null && _config$creators !== void 0 ? _config$creators : creatorsConfigDefault(config.solTreasuryAccount);
  const creators = configCreators.map(creatorConfig => ({ ...creatorConfig,
    address: convertToPublickKey(creatorConfig.address)
  }));
  const goLiveDate = convertToMillisecondsSinceEpoch(config.goLiveDate);
  const hiddenSettings = (_hiddenSettingsFromCo = hiddenSettingsFromConfig(config.hiddenSettings)) !== null && _hiddenSettingsFromCo !== void 0 ? _hiddenSettingsFromCo : null;
  const endSettings = (_endSettingsFromConfi = endSettingsFromConfig(config.endSettings)) !== null && _endSettingsFromConfi !== void 0 ? _endSettingsFromConfi : null;
  const whitelistMintSettings = (_whiteListMintSetting = whiteListMintSettingsFromConfig(config.whitelistMintSettings)) !== null && _whiteListMintSetting !== void 0 ? _whiteListMintSetting : null;
  const gatekeeper = (_gatekeeperFromConfig = gatekeeperFromConfig(config.gatekeeper)) !== null && _gatekeeperFromConfig !== void 0 ? _gatekeeperFromConfig : null;
  return {
    uuid: candyMachineUuidFromAddress(candyMachineAddress),
    price: new BN(config.price),
    symbol: (_config$symbol = config.symbol) !== null && _config$symbol !== void 0 ? _config$symbol : '',
    sellerFeeBasisPoints: config.sellerFeeBasisPoints,
    maxSupply: new BN(config.number),
    isMutable: config.isMutable,
    retainAuthority: config.retainAuthority,
    goLiveDate,
    itemsAvailable: new BN(config.number),
    endSettings,
    hiddenSettings,
    whitelistMintSettings,
    gatekeeper,
    creators
  };
}
function candyMachineAccountDataFromConfig(config, addresses) {
  var _addresses$tokenMintA;

  const data = candyMachineDataFromConfig(config, addresses.candyMachineAddress);
  const args = {
    authority: addresses.authorityAddress,
    wallet: addresses.walletAddress,
    tokenMint: (_addresses$tokenMintA = addresses.tokenMintAddress) !== null && _addresses$tokenMintA !== void 0 ? _addresses$tokenMintA : null,
    itemsRedeemed: new BN(0),
    data
  };
  return CandyMachine.fromArgs(args);
}

function candyMachineUuidFromAddress(candyMachineAddress) {
  // NOTE: repeating program business logic here which isn't ideal
  return candyMachineAddress.toBase58().slice(0, 6);
}

export { candyMachineAccountDataFromConfig, candyMachineDataFromConfig };
//# sourceMappingURL=fromConfig.mjs.map
