from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
files = list(ROOT.glob("*.html")) + list(ROOT.glob("*.js"))
assert files, "no timer source file found"
assert any("timer" in p.read_text(encoding="utf-8").lower() for p in files)
print("Countdown Timer smoke check passed")
