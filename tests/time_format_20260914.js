function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

console.assert(formatTime(0) === '00:00');
console.assert(formatTime(65) === '01:05');
console.assert(formatTime(600) === '10:00');
console.log('Time formatting passed');
