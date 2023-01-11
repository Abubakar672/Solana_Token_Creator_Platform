import { RpcClient } from './RpcClient.mjs';

const rpcModule = () => ({
  install(metaplex) {
    const rpcClient = new RpcClient(metaplex);

    metaplex.rpc = () => rpcClient;
  }

});

export { rpcModule };
//# sourceMappingURL=plugin.mjs.map
