const Calculator = (function calculator() {
  const validateNumbers = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("You can only calculate with numbers");
  };

  const divisionByZero = function (a, b) {
    validateNumbers(a, b);
    if (b === 0) throw new Error("Division By Zero!");
  };

  const add = function (a, b) {
    validateNumbers(a, b);
    return a + b;
  };

  const sub = function (a, b) {
    validateNumbers(a, b);
    return a - b;
  };

  const mul = function (a, b) {
    validateNumbers(a, b);
    return a * b;
  };

  const div = function (a, b) {
    divisionByZero(a, b);
    return a / b;
  };

  return { add, sub, mul, div };
})();
export default Calculator;
