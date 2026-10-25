## Timer state cases

- Prevent repeated start actions from creating duplicate intervals.
- Stop at zero and trigger completion only once.
- Ensure pause preserves the remaining duration.
- Ensure reset clears the active timer and restores the initial value.
- Validate input before starting the countdown.