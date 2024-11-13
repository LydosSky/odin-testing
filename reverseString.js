export default function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Not a String");
  }

  const stringArr = string.split("");
  const length = stringArr.length;
  const mid = Math.floor(length / 2);
  for (let i = 0; i < mid; i++) {
    const temp = stringArr[i];
    stringArr[i] = stringArr[length - 1 - i];
    stringArr[length - 1 - i] = temp;
  }

  return stringArr.join("");
}
