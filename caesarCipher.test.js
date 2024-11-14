import CaesarCipher from "./caesarCipher";

describe("Caesarcipher test module", function () {
  test("Caesarcipher is and IIFE", function () {
    const type = typeof CaesarCipher;
    expect(type).toBe("object");
  });

  test("Test Encryption function", function () {
    expect(CaesarCipher.encrypt("xyz", 3)).toBe("abc");
    expect(CaesarCipher.encrypt("HeLLo", 3)).toBe("KhOOr");
    expect(CaesarCipher.encrypt("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  test("Test Decryption function", function () {
    expect(CaesarCipher.decrypt("abc", 3)).toBe("xyz");
    expect(CaesarCipher.decrypt("KhOOr", 3)).toBe("HeLLo");
    expect(CaesarCipher.decrypt("Khoor, Zruog!", 3)).toBe("Hello, World!");
  });
});
