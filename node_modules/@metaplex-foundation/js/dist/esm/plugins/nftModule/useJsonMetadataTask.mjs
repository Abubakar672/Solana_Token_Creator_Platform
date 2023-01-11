import { Task } from '../../utils/Task.mjs';

const useJsonMetadataTask = (metaplex, nft) => new Task(({
  signal
}) => {
  return metaplex.storage().downloadJson(nft.uri, {
    signal
  });
});

export { useJsonMetadataTask };
//# sourceMappingURL=useJsonMetadataTask.mjs.map
