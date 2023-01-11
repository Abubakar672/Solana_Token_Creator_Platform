'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var buffer = require('buffer');
var TokenMetadataProgram = require('../TokenMetadataProgram.cjs');
var Pda = require('../../../types/Pda.cjs');

const findEditionPda = (mint, programId = TokenMetadataProgram.TokenMetadataProgram.publicKey) => {
  return Pda.Pda.find(programId, [buffer.Buffer.from('metadata', 'utf8'), programId.toBuffer(), mint.toBuffer(), buffer.Buffer.from('edition', 'utf8')]);
};

exports.findEditionPda = findEditionPda;
//# sourceMappingURL=findEditionPda.cjs.map
