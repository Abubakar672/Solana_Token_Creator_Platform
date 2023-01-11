import { resolveClusterFromConnection } from './types/Cluster.mjs';
import { corePlugins } from './plugins/corePlugins/plugin.mjs';

class Metaplex {
  /** The connection object from Solana's SDK. */

  /** The cluster in which the connection endpoint belongs to. */
  constructor(connection, options = {}) {
    var _options$cluster;

    this.connection = connection;
    this.cluster = (_options$cluster = options.cluster) !== null && _options$cluster !== void 0 ? _options$cluster : resolveClusterFromConnection(connection);
    this.use(corePlugins());
  }

  static make(connection, options = {}) {
    return new this(connection, options);
  }

  use(plugin) {
    plugin.install(this);
    return this;
  }

}

export { Metaplex };
//# sourceMappingURL=Metaplex.mjs.map
