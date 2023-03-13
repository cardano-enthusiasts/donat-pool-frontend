import * as Lib from '@emurgo/cardano-serialization-lib-browser';
const protocol = {
  managerPkh: Lib.Ed25519KeyHash.from_bytes(
    Buffer.from(
      new Uint8Array([
        42, 172, 239, 19, 72, 17, 238, 98, 124, 120, 107, 215, 155, 228, 204,
        86, 169, 226, 31, 174, 81, 231, 22, 4, 201, 52, 156, 35,
      ])
    )
  ),
  protocolCurrency: new Uint8Array([
    190, 115, 93, 254, 251, 53, 239, 153, 143, 48, 42, 94, 190, 163, 101, 165,
    240, 43, 155, 1, 161, 167, 203, 193, 188, 196, 21, 87,
  ]),
  protocolTokenName: new Uint8Array([
    68, 111, 110, 97, 116, 80, 111, 111, 108, 80, 114, 111, 116, 111, 99, 111,
    108,
  ]),
};

export { protocol };
