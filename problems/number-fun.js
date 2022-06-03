function returnsThree() {
  return 3
}

function reciprocal(n) {
  // if (n !== 0) {
  //   return 1 / n
  // } else {
  //   throw Error("can't do that bub")
  // } ALMOST WORKED

  // Worked
  if (n >= 1 && n <= 1000000) {
    return 1 / n
  } else if (n < 1) {
    throw Error("negative energy")
  } else if (n > 1000000) {
    throw Error("his power levels are over 9000")
  }
}

// console.log(reciprocal(0)) breaks mocha

module.exports = {
  returnsThree,
  reciprocal
};
