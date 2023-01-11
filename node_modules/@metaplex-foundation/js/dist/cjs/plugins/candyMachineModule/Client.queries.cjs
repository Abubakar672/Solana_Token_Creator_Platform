'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findCandyMachineByAddress = require('./findCandyMachineByAddress.cjs');
var findCandyMachinesByPublicKeyField = require('./findCandyMachinesByPublicKeyField.cjs');
var CandyMachineError = require('../../errors/CandyMachineError.cjs');

function findByAddress(address) {
  const operation = findCandyMachineByAddress.findCandyMachineByAdddressOperation(address);
  return this.metaplex.operations().execute(operation);
}
function findAllByWallet(walletAddress) {
  return this.metaplex.operations().execute(findCandyMachinesByPublicKeyField.findCandyMachinesByPublicKeyFieldOperation({
    type: 'wallet',
    publicKey: walletAddress
  }));
}
function findAllByAuthority(authorityAddress) {
  return this.metaplex.operations().execute(findCandyMachinesByPublicKeyField.findCandyMachinesByPublicKeyFieldOperation({
    type: 'authority',
    publicKey: authorityAddress
  }));
}
async function findByAuthorityAndUuid(authorityAddress, uuid) {
  const candyMachinesForAuthority = await this.findAllByAuthority(authorityAddress);

  if (candyMachinesForAuthority.length === 0) {
    throw new CandyMachineError.CandyMachinesNotFoundByAuthorityError(authorityAddress);
  }

  const matchingUUid = candyMachinesForAuthority.filter(candyMachine => candyMachine.uuid === uuid);

  if (matchingUUid.length === 0) {
    const addresses = candyMachinesForAuthority.map(candyMachine => candyMachine.candyMachineAccount.publicKey);
    throw new CandyMachineError.NoCandyMachineFoundForAuthorityMatchesUuidError(authorityAddress, uuid, addresses);
  }

  if (matchingUUid.length > 1) {
    const addresses = matchingUUid.map(candyMachine => candyMachine.candyMachineAccount.publicKey);
    throw new CandyMachineError.MoreThanOneCandyMachineFoundByAuthorityAndUuidError(authorityAddress, uuid, addresses);
  }

  return matchingUUid[0];
}

exports.findAllByAuthority = findAllByAuthority;
exports.findAllByWallet = findAllByWallet;
exports.findByAddress = findByAddress;
exports.findByAuthorityAndUuid = findByAuthorityAndUuid;
//# sourceMappingURL=Client.queries.cjs.map
