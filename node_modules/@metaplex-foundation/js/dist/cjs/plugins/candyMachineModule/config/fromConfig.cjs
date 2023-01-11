'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');
var BN = require('bn.js');
var Creators = require('./Creators.cjs');
var EndSettings = require('./EndSettings.cjs');
var Gatekeeper = require('./Gatekeeper.cjs');
var HiddenSettings = require('./HiddenSettings.cjs');
var WhitelistMint = require('./WhitelistMint.cjs');
var PublicKeyString = require('../../../types/PublicKeyString.cjs');
var DateTimeString = require('../../../types/DateTimeString.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

function candyMachineDataFromConfig(config, candyMachineAddress) {
  var _config$creators, _hiddenSettingsFromCo, _endSettingsFromConfi, _whiteListMintSetting, _gatekeeperFromConfig, _config$symbol;

  const configCreators = (_config$creators = config.creators) !== null && _config$creators !== void 0 ? _config$creators : Creators.creatorsConfigDefault(config.solTreasuryAccount);
  const creators = configCreators.map(creatorConfig => ({ ...creatorConfig,
    address: PublicKeyString.convertToPublickKey(creatorConfig.address)
  }));
  const goLiveDate = DateTimeString.convertToMillisecondsSinceEpoch(config.goLiveDate);
  const hiddenSettings = (_hiddenSettingsFromCo = HiddenSettings.hiddenSettingsFromConfig(config.hiddenSettings)) !== null && _hiddenSettingsFromCo !== void 0 ? _hiddenSettingsFromCo : null;
  const endSettings = (_endSettingsFromConfi = EndSettings.endSettingsFromConfig(config.endSettings)) !== null && _endSettingsFromConfi !== void 0 ? _endSettingsFromConfi : null;
  const whitelistMintSettings = (_whiteListMintSetting = WhitelistMint.whiteListMintSettingsFromConfig(config.whitelistMintSettings)) !== null && _whiteListMintSetting !== void 0 ? _whiteListMintSetting : null;
  const gatekeeper = (_gatekeeperFromConfig = Gatekeeper.gatekeeperFromConfig(config.gatekeeper)) !== null && _gatekeeperFromConfig !== void 0 ? _gatekeeperFromConfig : null;
  return {
    uuid: candyMachineUuidFromAddress(candyMachineAddress),
    price: new BN__default["default"](config.price),
    symbol: (_config$symbol = config.symbol) !== null && _config$symbol !== void 0 ? _config$symbol : '',
    sellerFeeBasisPoints: config.sellerFeeBasisPoints,
    maxSupply: new BN__default["default"](config.number),
    isMutable: config.isMutable,
    retainAuthority: config.retainAuthority,
    goLiveDate,
    itemsAvailable: new BN__default["default"](config.number),
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
    itemsRedeemed: new BN__default["default"](0),
    data
  };
  return mplCandyMachine.CandyMachine.fromArgs(args);
}

function candyMachineUuidFromAddress(candyMachineAddress) {
  // NOTE: repeating program business logic here which isn't ideal
  return candyMachineAddress.toBase58().slice(0, 6);
}

exports.candyMachineAccountDataFromConfig = candyMachineAccountDataFromConfig;
exports.candyMachineDataFromConfig = candyMachineDataFromConfig;
//# sourceMappingURL=fromConfig.cjs.map
