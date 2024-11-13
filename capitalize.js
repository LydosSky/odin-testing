// Returns given string in capitalize case
// throws error otherwise
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("Not a String");
  }

  const capital = string.toLowerCase().split("");
  capital[0] = capital[0].toUpperCase();

  return capital.join("");
}

export default capitalize;
