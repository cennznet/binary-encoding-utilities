const isObject = value => {
  if (
    typeof value === "object" &&
    value != null &&
    !Array.isArray(value) &&
    !(value instanceof RegExp)
  ) {
    return true;
  }
  return false;
};

module.exports = isObject;
