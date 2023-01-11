import { Buffer } from 'buffer';
import { TokenMetadataProgram } from '../TokenMetadataProgram.mjs';
import { Pda } from '../../../types/Pda.mjs';

const findMetadataPda = (mint, programId = TokenMetadataProgram.publicKey) => {
  return Pda.find(programId, [Buffer.from('metadata', 'utf8'), programId.toBuffer(), mint.toBuffer()]);
};

export { findMetadataPda };
//# sourceMappingURL=findMetadataPda.mjs.map
