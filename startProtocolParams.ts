import * as Lib from '@emurgo/cardano-serialization-lib-browser';
const fixedProtocol = {
  managerPkh: Lib.Ed25519KeyHash.from_bytes(
    Buffer.from(
      new Uint8Array([
        42, 172, 239, 19, 72, 17, 238, 98, 124, 120, 107, 215, 155, 228, 204,
        86, 169, 226, 31, 174, 81, 231, 22, 4, 201, 52, 156, 35,
      ])
    )
  ),
  protocolCurrency: new Uint8Array([
    86, 205, 239, 227, 85, 77, 227, 175, 250, 53, 2, 196, 201, 136, 34, 164,
    213, 186, 140, 105, 29, 44, 186, 121, 111, 249, 215, 19,
  ]),
  protocolTokenName: new Uint8Array([
    68, 111, 110, 97, 116, 80, 111, 111, 108, 80, 114, 111, 116, 111, 99, 111,
    108,
  ]),
};

export default fixedProtocol;
