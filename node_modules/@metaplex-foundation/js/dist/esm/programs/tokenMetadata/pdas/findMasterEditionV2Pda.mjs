import { Buffer } from 'buffer';
import { TokenMetadataProgram } from '../TokenMetadataProgram.mjs';
import { Pda } from '../../../types/Pda.mjs';

const findMasterEditionV2Pda = (mint, programId = TokenMetadataProgram.publicKey) => {
  return Pda.find(programId, [Buffer.from('metadata', 'utf8'), programId.toBuffer(), mint.toBuffer(), Buffer.from('edition', 'utf8')]);
};

export { findMasterEditionV2Pda };
//# sourceMappingURL=findMasterEditionV2Pda.mjs.map
