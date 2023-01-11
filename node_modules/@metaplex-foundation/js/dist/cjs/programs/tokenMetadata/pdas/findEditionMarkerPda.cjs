'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var buffer = require('buffer');
var BN = require('bn.js');
var TokenMetadataProgram = require('../TokenMetadataProgram.cjs');
var Pda = require('../../../types/Pda.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);

const findEditionMarkerPda = (mint, edition, programId = TokenMetadataProgram.TokenMetadataProgram.publicKey) => {
  return Pda.Pda.find(programId, [buffer.Buffer.from('metadata', 'utf8'), programId.toBuffer(), mint.toBuffer(), buffer.Buffer.from('edition', 'utf8'), buffer.Buffer.from(edition.div(new BN__default["default"](248)).toString())]);
};

exports.findEditionMarkerPda = findEditionMarkerPda;
//# sourceMappingURL=findEditionMarkerPda.cjs.map
