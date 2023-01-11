import { findCandyMachineByAdddressOperation } from './findCandyMachineByAddress.mjs';
import { findCandyMachinesByPublicKeyFieldOperation } from './findCandyMachinesByPublicKeyField.mjs';
import { CandyMachinesNotFoundByAuthorityError, NoCandyMachineFoundForAuthorityMatchesUuidError, MoreThanOneCandyMachineFoundByAuthorityAndUuidError } from '../../errors/CandyMachineError.mjs';

function findByAddress(address) {
  const operation = findCandyMachineByAdddressOperation(address);
  return this.metaplex.operations().execute(operation);
}
function findAllByWallet(walletAddress) {
  return this.metaplex.operations().execute(findCandyMachinesByPublicKeyFieldOperation({
    type: 'wallet',
    publicKey: walletAddress
  }));
}
function findAllByAuthority(authorityAddress) {
  return this.metaplex.operations().execute(findCandyMachinesByPublicKeyFieldOperation({
    type: 'authority',
    publicKey: authorityAddress
  }));
}
async function findByAuthorityAndUuid(authorityAddress, uuid) {
  const candyMachinesForAuthority = await this.findAllByAuthority(authorityAddress);

  if (candyMachinesForAuthority.length === 0) {
    throw new CandyMachinesNotFoundByAuthorityError(authorityAddress);
  }

  const matchingUUid = candyMachinesForAuthority.filter(candyMachine => candyMachine.uuid === uuid);

  if (matchingUUid.length === 0) {
    const addresses = candyMachinesForAuthority.map(candyMachine => candyMachine.candyMachineAccount.publicKey);
    throw new NoCandyMachineFoundForAuthorityMatchesUuidError(authorityAddress, uuid, addresses);
  }

  if (matchingUUid.length > 1) {
    const addresses = matchingUUid.map(candyMachine => candyMachine.candyMachineAccount.publicKey);
    throw new MoreThanOneCandyMachineFoundByAuthorityAndUuidError(authorityAddress, uuid, addresses);
  }

  return matchingUUid[0];
}

export { findAllByAuthority, findAllByWallet, findByAddress, findByAuthorityAndUuid };
//# sourceMappingURL=Client.queries.mjs.map
