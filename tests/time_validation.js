function validSeconds(value) {
  return Number.isInteger(value) && value >= 0;
}

console.assert(validSeconds(0));
console.assert(validSeconds(60));
console.assert(!validSeconds(-1));
console.assert(!validSeconds(1.5));
console.log('Timer validation tests passed');
