const CaesarCipher = (function () {
  function stringArray(text) {
    return text.split("");
  }
  function encrypt(text, shift) {
    let array = stringArray(text);
    array = array.map((c) => shiftChar(c, shift));
    return String.fromCharCode(...array);
  }

  // Shifts given char within the boundaries of
  // ascii table characters
  function shiftChar(char, shift) {
    const charCode = char.charCodeAt();
    // Uppercase Letter
    if (charCode >= 65 && charCode <= 90) {
      return twentySixModulo(charCode + shift, 65, 90);
    }

    // Lowercase Letter
    if (charCode >= 97 && charCode <= 122) {
      return twentySixModulo(charCode + shift, 97, 122);
    }

    return charCode;
  }

  function twentySixModulo(char, lower, upper) {
    return char > upper ? char - 26 : char < lower ? char + 26 : char;
  }

  function decrypt(text, shift) {
    return encrypt(text, -shift);
  }

  return { encrypt, decrypt };
})();

export default CaesarCipher;
