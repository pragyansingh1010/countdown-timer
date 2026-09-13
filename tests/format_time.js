function formatTime(totalSeconds) {
  const seconds = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}

console.assert(formatTime(0) === '00:00');
console.assert(formatTime(65) === '01:05');
console.assert(formatTime(600) === '10:00');
console.log('Timer formatting tests passed');
