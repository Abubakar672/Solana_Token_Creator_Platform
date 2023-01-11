import { OperationClient } from './OperationClient.mjs';

const operationModule = () => ({
  install(metaplex) {
    const operationClient = new OperationClient(metaplex);

    metaplex.operations = () => operationClient;
  }

});

export { operationModule };
//# sourceMappingURL=plugin.mjs.map
