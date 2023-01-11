'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var findNftByMint = require('./findNftByMint.cjs');
var findNftsByMintList = require('./findNftsByMintList.cjs');
var findNftsByOwner = require('./findNftsByOwner.cjs');
var findNftsByCreator = require('./findNftsByCreator.cjs');
var findNftsByCandyMachine = require('./findNftsByCandyMachine.cjs');
var uploadMetadata = require('./uploadMetadata.cjs');
var createNft = require('./createNft.cjs');
var updateNft = require('./updateNft.cjs');
var printNewEdition = require('./printNewEdition.cjs');

class NftClient {
  constructor(metaplex) {
    this.metaplex = metaplex;
  }

  findByMint(mint) {
    return this.metaplex.operations().execute(findNftByMint.findNftByMintOperation(mint));
  }

  findAllByMintList(mints) {
    return this.metaplex.operations().execute(findNftsByMintList.findNftsByMintListOperation(mints));
  }

  findAllByOwner(owner) {
    return this.metaplex.operations().execute(findNftsByOwner.findNftsByOwnerOperation(owner));
  }

  findAllByCreator(creator, position = 1) {
    return this.metaplex.operations().execute(findNftsByCreator.findNftsByCreatorOperation({
      creator,
      position
    }));
  }

  findAllByCandyMachine(candyMachine, version) {
    return this.metaplex.operations().execute(findNftsByCandyMachine.findNftsByCandyMachineOperation({
      candyMachine,
      version
    }));
  }

  uploadMetadata(input) {
    return this.metaplex.operations().execute(uploadMetadata.uploadMetadataOperation(input));
  }

  async create(input) {
    const operation = createNft.createNftOperation(input);
    const createNftOutput = await this.metaplex.operations().execute(operation);
    const nft = await this.findByMint(createNftOutput.mint.publicKey);
    return { ...createNftOutput,
      nft
    };
  }

  async update(nft, input) {
    const operation = updateNft.updateNftOperation({ ...input,
      nft
    });
    const updateNftOutput = await this.metaplex.operations().execute(operation);
    const updatedNft = await this.findByMint(nft.mint);
    return { ...updateNftOutput,
      nft: updatedNft
    };
  }

  async printNewEdition(originalMint, input = {}) {
    const operation = printNewEdition.printNewEditionOperation({
      originalMint,
      ...input
    });
    const printNewEditionOutput = await this.metaplex.operations().execute(operation);
    const nft = await this.findByMint(printNewEditionOutput.mint.publicKey);
    return { ...printNewEditionOutput,
      nft
    };
  }

}

exports.NftClient = NftClient;
//# sourceMappingURL=NftClient.cjs.map
