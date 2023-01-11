'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mplCandyMachine = require('@metaplex-foundation/mpl-candy-machine');
var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');

// TODO(thlorenz): the mpl modules should export those as 'accountProviders'
const accountProviders = {
  CandyMachine: mplCandyMachine.CandyMachine,
  CollectionPDA: mplCandyMachine.CollectionPDA,
  CollectionAuthorityRecord: mplTokenMetadata.CollectionAuthorityRecord,
  Edition: mplTokenMetadata.Edition,
  EditionMarker: mplTokenMetadata.EditionMarker,
  MasterEditionV2: mplTokenMetadata.MasterEditionV2,
  Metadata: mplTokenMetadata.Metadata,
  ReservationListV2: mplTokenMetadata.ReservationListV2,
  UseAuthorityRecord: mplTokenMetadata.UseAuthorityRecord
};

exports.accountProviders = accountProviders;
//# sourceMappingURL=accountProviders.cjs.map
