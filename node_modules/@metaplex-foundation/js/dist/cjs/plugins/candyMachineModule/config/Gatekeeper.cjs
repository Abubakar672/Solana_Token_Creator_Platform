'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PublicKeyString = require('../../../types/PublicKeyString.cjs');

/**
 * Configures {@link CandyMachineConfig.gatekeeper} settings.
 *
 * While the unpredictable mint index provides some protection against bots,
 * they are still able to mint directly from the Candy Machine. If you want to
 * make sure that only humans can mint from your project, gatekeeper settings
 * can be enabled.
 *
 * @property gatekeeperNetwork - Gateway provider address
 * @property expireOnUse - Requires a new gateway challenge after a use
 */

function gatekeeperFromConfig(config) {
  if (config == null) return undefined;
  return { ...config,
    gatekeeperNetwork: PublicKeyString.convertToPublickKey(config.gatekeeperNetwork)
  };
}

exports.gatekeeperFromConfig = gatekeeperFromConfig;
//# sourceMappingURL=Gatekeeper.cjs.map
