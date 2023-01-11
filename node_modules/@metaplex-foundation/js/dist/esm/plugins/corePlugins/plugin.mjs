import { identityModule } from '../identityModule/plugin.mjs';
import { storageModule } from '../storageModule/plugin.mjs';
import { rpcModule } from '../rpcModule/plugin.mjs';
import { operationModule } from '../operationModule/plugin.mjs';
import { programModule } from '../programModule/plugin.mjs';
import { utilsModule } from '../utilsModule/plugin.mjs';
import { guestIdentity } from '../guestIdentity/plugin.mjs';
import { bundlrStorage } from '../bundlrStorage/plugin.mjs';
import { corePrograms } from '../corePrograms/plugin.mjs';
import { nftModule } from '../nftModule/plugin.mjs';
import { candyMachineModule } from '../candyMachineModule/plugin.mjs';

const corePlugins = () => ({
  install(metaplex) {
    // Low-level modules.
    metaplex.use(identityModule());
    metaplex.use(storageModule());
    metaplex.use(rpcModule());
    metaplex.use(operationModule());
    metaplex.use(programModule());
    metaplex.use(utilsModule()); // Default drivers.

    metaplex.use(guestIdentity());
    metaplex.use(bundlrStorage()); // Register core programs.

    metaplex.use(corePrograms()); // Verticals.

    metaplex.use(nftModule());
    metaplex.use(candyMachineModule());
  }

});

export { corePlugins };
//# sourceMappingURL=plugin.mjs.map
