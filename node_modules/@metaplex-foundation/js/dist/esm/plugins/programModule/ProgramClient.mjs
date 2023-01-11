import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import { ProgramNotRecognizedError, MissingGpaBuilderError } from '../../errors/SdkError.mjs';

class ProgramClient {
  constructor(metaplex) {
    _defineProperty(this, "programs", []);

    this.metaplex = metaplex;
  }

  register(program) {
    this.programs.push(program);
  }

  all() {
    return this.programs;
  }

  allForCluster(cluster) {
    return this.programs.filter(program => {
      var _program$clusterFilte, _program$clusterFilte2;

      return (_program$clusterFilte = (_program$clusterFilte2 = program.clusterFilter) === null || _program$clusterFilte2 === void 0 ? void 0 : _program$clusterFilte2.call(program, cluster)) !== null && _program$clusterFilte !== void 0 ? _program$clusterFilte : true;
    });
  }

  allForCurrentCluster() {
    return this.allForCluster(this.metaplex.cluster);
  }

  get(nameOrAddress) {
    const programs = this.allForCurrentCluster();
    const program = typeof nameOrAddress === 'string' ? programs.find(program => program.name === nameOrAddress) : programs.find(program => program.address.equals(nameOrAddress));

    if (!program) {
      throw new ProgramNotRecognizedError(nameOrAddress, this.metaplex.cluster);
    }

    return program;
  }

  getGpaBuilder(nameOrAddress) {
    const program = this.get(nameOrAddress);

    if (!program.gpaResolver) {
      throw new MissingGpaBuilderError(program);
    }

    return program.gpaResolver(this.metaplex);
  }

}

export { ProgramClient };
//# sourceMappingURL=ProgramClient.mjs.map
