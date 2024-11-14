export default function analyzeArray(array) {
  function validateArray(array) {
    return array.every((n) => typeof n === "number" && Number.isFinite(n));
  }

  function min(array) {
    return array.reduce((prev, curr) => (curr < prev ? curr : prev), Infinity);
  }

  function max(array) {
    return array.reduce((prev, curr) => (curr > prev ? curr : prev), -Infinity);
  }

  function length(array) {
    return array.length;
  }

  function average(array) {
    return array.reduce((prev, curr) => prev + curr, 0) / length(array);
  }

  if (!validateArray(array)) throw new Error("This is not a numbers array");
  if (length(array) === 0) return {};

  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  };
}
