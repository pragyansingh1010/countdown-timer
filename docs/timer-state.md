# Timer State

A timer has three core states: ready, running, and completed. Start, pause, reset, and completion transitions should clear or preserve remaining time deliberately rather than creating multiple active intervals.