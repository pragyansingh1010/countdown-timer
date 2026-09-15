function validMinutes(minutes) {
  return Number.isInteger(minutes) && minutes >= 0;
}

console.assert(validMinutes(0));
console.assert(validMinutes(10));
console.assert(!validMinutes(-2));
