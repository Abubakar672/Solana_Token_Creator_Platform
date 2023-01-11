'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Task = require('../../utils/Task.cjs');

const useJsonMetadataTask = (metaplex, nft) => new Task.Task(({
  signal
}) => {
  return metaplex.storage().downloadJson(nft.uri, {
    signal
  });
});

exports.useJsonMetadataTask = useJsonMetadataTask;
//# sourceMappingURL=useJsonMetadataTask.cjs.map
