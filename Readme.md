# @plugnet/binary-encoding-utilities
Provides zero-dependency utility functions for plugnet's binary encoding needs.

## Installing

```
npm install --save @plugnet/binary-encoding-utilities
// or
yarn add @plugnet/binary-encoding-utilities
```

## Development

Testing:
```
npm test
```

Linting:
```
npm run lint
```

## API

```
Interface {
  isObject,
  printBytes,
  flipEndianness,
  flipU8aEndianness,
  numberToLEBytes,
  LEBytesToNumber,
  getStringFromU8a,
}
```

## `isObject`

Checks whether a value is an object. Returns a boolean.

```
isObject(value) -> Boolean
```

## `printBytes`

A debug helper. Prints to `stdout` a `Uint8Array`, or a window onto a `Uint8Array`, in
its binary representation.

* `array` is the `Uint8Array` to read from
* `bytes` is the byte count to read. Defaults to the `array` length.
* `offset` is the starting byte, or the first byte to read.

Returns `undefined`.

```
printBytes(
    array: Uint8Array,
    bytes:Number={array.length},
    offset:Number=0
) -> Undefined
```

## `flipEndianness`

Recursively flips the endianness of a number or typed aray value of a particular bit length.

**Note:** Javascript `Number` is Big Endian.

* `input` is the number to be flipped.
* `bits` indicates the bit length of the number to be flipped.
* `offset` specifies how many places from the right recursion will start from.

Returns a number.

```
flipEndianness(
    input:Number,
    bits:Number=8,
    offset:Number=0
) -> Number
```

## `flipU8aEndianness`
Flips the endianness of a window onto a `Uint8Array`.

* `input` is the `Uint8Array` to be operated on
* `bytes` is the number of bytes to flip, from left to right
* `offset` is the index to begin operating from

Modifies the `Uint8Array` in-place, and returns nothing.

```
flipU8aEndianness(
    input:Uint8Array,
    bytes:Number={input.length},
    offset:Number=0
) -> Undefined
```

## `numberToLEBytes`

Takes a number and converts it to LE bytes representation, before
writing it to a window onto a `Uint8Array`.

* `number` is the integer to be written
* `array` is the `Uint8Array` to have the number placed into
* `bytes` is the number of bytes to move into the `Uint8Array`
* `offset` is the `Uint8Array` index to begin writing to, left to right

Modifies the `Uint8Array` in-place, and returns nothing.

```
numberToLEBytes(
    number:Number,
    array:Uint8Array,
    bytes:Number=0,
    offset:Number=0
) -> Undefined
```

## `LEBytesToNumber`

Takes a window onto a `Uint8Array` and converts it from a LE multi-byte
representation of an integer into a `Number`.

* `array` is the `Uint8Array` to have the number placed into
* `bytes` is the number of bytes to move into the `Uint8Array`
* `offset` is the `Uint8Array` index to begin writing to, left to right

Returns a Number.

```
LEBytesToNumber(
    array:Uint8Array,
    bytes:Number={array.length},
    offset:Number=0
) -> Undefined
```

## `getStringFromU8a`

Takes a window onto a `Uint8Array` and extracts an ASCII string,
ignoring `0` values.

* `array` is the `Uint8Array` to extract the string from
* `bytes` is the number of bytes to extract from the `Uint8Array`
* `offset` is the index to start reading from

```
getStringFromU8a(
    array,
    bytes,
    offset,
) -> String
```
