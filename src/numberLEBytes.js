const flipU8aEndianness = require('./flipU8aEndianness');

// shift a number into n LE bytes, into an existing U8a
function numberToLEBytes(number, array, bytes=0, offset=0) {
  if (typeof number !== 'number') {
    throw new Error(
      `"${number}" must be an instance of Number`
    );
  }
  if (!Number.isInteger(number)) {
    throw new Error(
      `"${number}" must be an integer`
    );
  }

  if (!(array instanceof Uint8Array)) {
    throw new Error(
      "Tried to write a number to something that was not a Uint8Array"
    );
  }

  let t = number;
  for (let i = bytes; i > 0; i--) {
    array[offset + i - 1] = t;
    t = t >> 8;
  }
  flipU8aEndianness(array, bytes, offset);
}
// shift a 4byte LE window into a JS number
function LEBytesToNumber(array, bytes, offset=0) {
  if (!(array instanceof Uint8Array)) {
    throw new Error(
      "Tried to extract a number from something that was not a Uint8Array"
    );
  }

  bytes = bytes ? bytes : array.length;

  flipU8aEndianness(array, bytes, offset);

  let t = 0;
  for (let i = 0; i < bytes; i++) {
    t = t << 8;
    let val = array[offset + i];
    t |= val;
  }

  flipU8aEndianness(array, bytes, offset);

  return t;
}

module.exports = {
  numberToLEBytes,
  LEBytesToNumber,
};
