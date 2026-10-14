## Countdown timer edge cases

- Reject invalid, negative, or non-finite durations.
- Prevent multiple active intervals when start is clicked repeatedly.
- Stop at zero and do not allow the display to become negative.
- Reset and pause should clear or suspend the active timer consistently.
- Announce completion clearly and make controls usable by keyboard.