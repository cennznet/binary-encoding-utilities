function setBit(input, shouldSet, mask) {
  if (shouldSet) {
    return input | mask;
  } else {
    return input & ~mask;
  }
}

function flip (input, bits=8, offset=0) {
  // recurse to the middle
  if (offset >= Math.floor(bits/2)) {
    return input;
  }

  const rightMask = 1 << offset;
  const leftMask  = 1 << (bits - offset - 1);

  const setOnRight = ((input & rightMask) != 0);
  const setOnLeft  = ((input & leftMask ) != 0);

  input = setBit(input, setOnRight, leftMask);
  input = setBit(input, setOnLeft, rightMask);

  input = flip(input, bits, offset + 1);

  return input;
}


module.exports = flip;
