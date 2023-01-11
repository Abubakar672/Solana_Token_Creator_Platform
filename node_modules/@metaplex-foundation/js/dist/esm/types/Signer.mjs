const isKeypairSigner = signer => {
  return 'secretKey' in signer && signer.secretKey != null;
};
const isIdentitySigner = signer => {
  return !isKeypairSigner(signer);
};
const getSignerHistogram = signers => signers.reduce((signers, signer) => {
  var _signers$all$duplicat;

  const duplicateIndex = signers.all.findIndex(({
    publicKey
  }) => publicKey.equals(signer.publicKey));
  const duplicate = (_signers$all$duplicat = signers.all[duplicateIndex]) !== null && _signers$all$duplicat !== void 0 ? _signers$all$duplicat : null;
  const duplicateIsIdentity = duplicate ? isIdentitySigner(duplicate) : false;
  const signerIsIdentity = isIdentitySigner(signer);

  if (!duplicate) {
    signers.all.push(signer);
    signerIsIdentity ? signers.identities.push(signer) : signers.keypairs.push(signer);
  } else if (duplicateIsIdentity && !signerIsIdentity) {
    // Prefer keypair than identity signer as it requires less user interactions.
    const duplicateIdentitiesIndex = signers.identities.findIndex(({
      publicKey
    }) => publicKey.equals(signer.publicKey));
    delete signers.all[duplicateIndex];
    delete signers.identities[duplicateIdentitiesIndex];
    signers.all.push(signer);
    signers.keypairs.push(signer);
  }

  return signers;
}, {
  all: [],
  keypairs: [],
  identities: []
});

export { getSignerHistogram, isIdentitySigner, isKeypairSigner };
//# sourceMappingURL=Signer.mjs.map
