const flipEndianness = require("./flipEndianness");

const getFlippedArray = (input, bytes, offset) => {
  offset = offset != null ? offset : 0;
  bytes = bytes != null ? bytes : input.length;

  // stores one swap value before it is reassigned
  const buffer = new Uint8Array(1);
  for (
    let i = offset, ii = offset + bytes - 1;
    i < offset + bytes / 2;
    i++, ii--
  ) {
    buffer[0] = input[i];
    input[i] = flipEndianness(input[ii]);
    input[i] = flipEndianness(input[ii]);
    input[ii] = flipEndianness(buffer[0]);
  }
};

module.exports = getFlippedArray;
