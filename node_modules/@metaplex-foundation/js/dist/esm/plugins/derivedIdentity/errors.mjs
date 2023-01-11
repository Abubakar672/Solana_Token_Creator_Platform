import { SdkError } from '../../errors/SdkError.mjs';

class UninitializedDerivedIdentityError extends SdkError {
  constructor(cause) {
    super({
      cause,
      key: 'uninitialized_derived_identity',
      title: 'Uninitialized Derived Identity',
      problem: 'The derived identity module has not been initialized.',
      solution: 'Before using the derived identity, you must provide a message that ' + 'will be used to derived a Keypair from the current identity. ' + 'You may do that by calling "metaplex.derivedIdentity().deriveFrom(message)".'
    });
  }

}

export { UninitializedDerivedIdentityError };
//# sourceMappingURL=errors.mjs.map
