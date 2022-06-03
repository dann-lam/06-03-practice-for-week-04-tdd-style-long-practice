function reverseString(string) {
  let reversed = string.split("")
  return reversed.reverse().join("")
};

console.log(reverseString("fun"))

module.exports = { reverseString }
