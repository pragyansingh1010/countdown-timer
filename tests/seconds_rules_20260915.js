function validSeconds(seconds) {
  return Number.isInteger(seconds) && seconds >= 0;
}

console.assert(validSeconds(0));
console.assert(validSeconds(60));
console.assert(!validSeconds(-1));
