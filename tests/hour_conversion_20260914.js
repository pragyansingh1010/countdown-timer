function hoursToSeconds(hours) {
  return Math.max(0, hours) * 3600;
}

console.assert(hoursToSeconds(0) === 0);
console.assert(hoursToSeconds(1) === 3600);
console.assert(hoursToSeconds(2) === 7200);
console.assert(hoursToSeconds(-1) === 0);
console.log('Hour conversion passed');
