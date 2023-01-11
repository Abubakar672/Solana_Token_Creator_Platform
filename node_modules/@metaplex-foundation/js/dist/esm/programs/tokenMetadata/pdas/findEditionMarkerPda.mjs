import { Buffer } from 'buffer';
import BN from 'bn.js';
import { TokenMetadataProgram } from '../TokenMetadataProgram.mjs';
import { Pda } from '../../../types/Pda.mjs';

const findEditionMarkerPda = (mint, edition, programId = TokenMetadataProgram.publicKey) => {
  return Pda.find(programId, [Buffer.from('metadata', 'utf8'), programId.toBuffer(), mint.toBuffer(), Buffer.from('edition', 'utf8'), Buffer.from(edition.div(new BN(248)).toString())]);
};

export { findEditionMarkerPda };
//# sourceMappingURL=findEditionMarkerPda.mjs.map
