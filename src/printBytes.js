// A utility primarily used in debugging and tests
// Prints the binary represnetation of a Uint8Array

const BIT_LENGTH = 8;
const INDEX_PADDING_OFFSET = 3;

function printBytes (
  array,
  bytes,
  offset=0
) {
  if (!(array instanceof Uint8Array)) {
    throw new Error(
      "Tried to print something that was not a Uint8Array"
    );
  }

  bytes = bytes ? bytes : array.length;

  const indexPaddingLength =
    array.length.toString().length + INDEX_PADDING_OFFSET;

  let result = '';

  for (
    let i = offset;
    i <= offset + bytes - 1;
    i++
  ){
    const v = array[i];
    const paddedIndex = (`${i}:`).padEnd(indexPaddingLength);
    const paddedValue = v.toString(2).padStart(BIT_LENGTH, '0');

    result += `${paddedIndex}${paddedValue}\n`;
  }

  console.log(result); // eslint-disable-line no-console
}

module.exports = printBytes;
