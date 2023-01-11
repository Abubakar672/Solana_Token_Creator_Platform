'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ProgramClient = require('./ProgramClient.cjs');

const programModule = () => ({
  install(metaplex) {
    const programClient = new ProgramClient.ProgramClient(metaplex);

    metaplex.programs = () => programClient;
  }

});

exports.programModule = programModule;
//# sourceMappingURL=plugin.cjs.map
