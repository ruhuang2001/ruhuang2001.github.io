# Dependency security acceptance

Failure cases to verify before mitigation implementation:
- Replacing js-yaml 3's argparse dependency must preserve CLI help, version, valid YAML/JSON input and controlled errors for invalid input; sprintf-js must be absent from both deployment dependency trees. image-size 2 must preserve PNG sizing and reject malformed ICNS/JXL/HEIF; PNG, PDF and PPTX export with images must work.
- sprintf numeric precision above 100 (including extremely long digit strings) must not escape as a RangeError; g precision zero must be normalized to 1. Normal numeric, named, string, escaped-percent and argparse help formatting must remain unchanged. Width specifiers above 4096 must be bounded before allocating padding. Check both sprintf and vsprintf, repeated cached formats, and direct format(parse(...)) calls.
- Deep braces/parenthesis patterns must terminate predictably before recursive AST walkers exhaust the process stack; ordinary globs must still expand normally.
- Zero-length or truncated ICNS entries and JXL/HEIF boxes must terminate with an error, never hang the Node event loop; normal PNG/JPEG dimensions must remain correct.
- Installation must fail clearly when a patch target changes instead of silently skipping it; reinstalling must be idempotent.
- Both frozen installs, static builds, slide navigation, click reveals, images/video, themes, code/diagram/math rendering and PDF/PNG export must remain usable.
- Audit output must retain unpatched/no-upstream-fix alerts; never claim zero vulnerabilities merely because local mitigation exists.
- sprintf-js has no patched upstream version; review its actual argparse error-formatting path and retain its advisory rather than replacing formatting semantics blindly.
