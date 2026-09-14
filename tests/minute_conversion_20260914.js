function toSeconds(minutes) {
  return Math.max(0, minutes) * 60;
}

console.assert(toSeconds(0) === 0);
console.assert(toSeconds(1) === 60);
console.assert(toSeconds(5) === 300);
console.assert(toSeconds(-1) === 0);
console.log('Minute conversion passed');
