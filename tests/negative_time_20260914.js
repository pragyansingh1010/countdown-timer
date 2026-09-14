function safeSeconds(value) {
  return Math.max(0, value);
}

console.assert(safeSeconds(10) === 10);
console.assert(safeSeconds(0) === 0);
console.assert(safeSeconds(-5) === 0);
console.log('Negative timer values handled');
