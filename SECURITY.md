# Dependency security maintenance

This site publishes static GitHub Pages output. Vite development server advisories concern local preview exposure; Pages does not run a Vite server.

## Current status — 2026-10-22 dependency follow-up

Slidev versions are 53.0.0 / 52.17.0. Both deployment trees override image-size to 2.0.4 (upstream fixes both image parser advisories). Current PptxGenJS 4.0.1 declares this dependency but does not call it in shipped code; the earlier callable/path API concern below was disproved by source inspection and image-containing PPTX export. Both trees override only js-yaml 3.15.2 -> argparse to 2.0.1, retaining its legacy API while removing sprintf-js. Keep js-yaml 3 for gray-matter safeLoad/safeDump compatibility; do not use argparse 3 here.

Only braces remains affected upstream. Its exact-source depth-128 backport remains mandatory in postinstall. Retired image-size patches have been removed. Do not dismiss the remaining braces alerts or claim zero vulnerabilities. npm audit has 9 affected package nodes due to parent propagation, all from this one braces advisory; pnpm audit has one advisory. GitHub should retain two braces alerts, one per active lockfile.

Validation: clean/frozen installs, both builds, 39-slide browser regression with identical text, images/navigation/reveals/reload, 12 mitigation cases, YAML CLI help/version/valid/invalid inputs, PNG/PDF/PPTX exports. Evidence: output/playwright/security-refresh/. Production acceptance is recorded there after deployment.

## Historical record (superseded where noted)

## 2026-10-22 / issue #6

Both decks retain their existing Slidev CLI versions (51.5.0 and 52.17.0). Refreshed compatible dependency trees resolve Vite 6.4.5 / 8.1.6, Mermaid 11.17.2, DOMPurify 3.4.17, js-yaml 3.15.2 / 4.3.2 and KaTeX 0.18.7. DOMPurify is overridden because Monaco pins an older sanitizer. KaTeX is overridden to take its trust-boundary fix.

For the newer deck, markdown-it is an explicit 14.3.3 peer because version 15 removes a subpath used by Comark. FloatingVue remains 5.2.2 because 5.4 changes component internals used by Twoslash. Both compatibility pins must be revisited with Slidev upgrades.

The active lockfiles are `talks/aigc-dev/package-lock.json` (npm) and `talks/from-chat-to-agent/pnpm-lock.yaml` (pnpm 10.28.0). The ignored npm lock in the latter directory is not a deployment input; use pnpm there. Node >=22.12 is required, CI uses Node 24.

### Remaining advisories

Audits intentionally remain nonzero. Do not suppress these alerts or describe this as zero vulnerabilities:

- `braces@3.0.3`, GHSA-vfj7-8cjw-p6xm: no fixed upstream version. Installation applies a local mitigation limiting parser and recursive AST walker depth to 128. Ordinary globs remain supported.
- `image-size@1.2.1`, GHSA-5p2g-fcmc-qvqq / GHSA-w3rx-r6r6-pgpr: fixed upstream in 2.x, but PptxGenJS depends on the 1.x callable/path-based API. A local mitigation rejects truncated/zero-length ICNS entries and invalid ISO box sizes without forcing an incompatible API upgrade.
- `sprintf-js@1.0.3`, GHSA-hp3w-g68c-fv3c: no fixed upstream version. It is reached through js-yaml 3 -> argparse, with format strings supplied by the local parser/help configuration. Do not expose its formatter directly to untrusted format strings. This residual advisory remains open; replacing its formatting semantics is outside this compatible dependency refresh.

`postinstall` runs `scripts/apply-security-patches.mjs` for both package managers. Exact source preconditions make changed patch targets fail clearly; reruns are idempotent. Do not use `--ignore-scripts` for production installs unless this script is run explicitly afterward. Review/remove the patches only when their parent dependency can use a fixed compatible version.

## Reproduce acceptance

```sh
(cd talks/aigc-dev && npm ci && npx playwright install chromium && npm run build)
(cd talks/from-chat-to-agent && pnpm install --frozen-lockfile && pnpm exec playwright install chromium && pnpm run build)
node scripts/verify-security-mitigations.mjs
(cd talks/aigc-dev && npm audit --json)
(cd talks/from-chat-to-agent && pnpm audit --json)
```

Build a Pages-like `output/playwright/security/site` directory containing index.html, both built decks at `talks/<name>/`, and the newer deck's `styles/`. Run `node scripts/preview-security.mjs`, open `http://127.0.0.1:18768` with Playwright CLI, then execute the function in `scripts/capture-slides.playwright.js` using `playwright-cli run-code`. Create `output/playwright/security/after/` first. It visits all 39 slides, captures screenshots, checks images, keyboard navigation, click reveals, reloads, local HTTP failures and uncaught browser errors. Output reports and screenshots belong under `output/playwright/security/`.

```sh
(cd talks/aigc-dev && npx slidev export --range 1 --format png --wait-until domcontentloaded --wait 1000 --output ../../output/playwright/security/aigc-export)
(cd talks/from-chat-to-agent && pnpm exec slidev export --wait-until domcontentloaded --wait 1000 --output ../../output/playwright/security/agent.pdf)
```

Use DOMContentLoaded for export: network-idle can hang on remote assets. The actual decks contain no fenced code, Mermaid, or math examples; dependency renderer validation requires an isolated fixture rather than pretending those features were exercised by these slides.

The browser acceptance report records remote Clarity analytics errors separately by their exact external stack URL. They occur in the unchanged third-party script and are not counted as local application failures. Local script exceptions and local HTTP errors still fail acceptance. The 2026-10-22 baseline already had `/public/` static media 404s and the older deck's stylesheet was not copied by CI; this repair binds public media URLs at runtime and copies the older stylesheet into the Pages artifact.

### Local acceptance results (2026-10-22)

- Both npm clean install and pnpm frozen install passed with mitigation hooks enabled.
- Both static builds passed. Browser visited 17 + 22 slides; all slide text matched the pre-upgrade baseline. All current images, forward/back navigation, click reveals, direct reloads passed; local HTTP failures and local uncaught exceptions were both zero. One unchanged remote Clarity analytics exception was recorded separately.
- Code highlighting, Mermaid SVG and KaTeX rendering passed in a fixture built separately with each deck's dependency tree.
- Older-deck PNG export and newer-deck complete PDF export passed. Twelve subprocess security/compatibility cases passed.
- npm audit reports 17 affected package nodes (including parent propagation); pnpm audit reports 4 advisory entries. Root packages remaining are braces, image-size and sprintf-js, as documented above. These counts are not directly comparable.
- Evidence: `output/playwright/security/after/final-browser.json`, screenshots for 39 slides, `after/fixtures.txt`, `mitigations.json`, install/build/export logs and both audit JSON files. These are local ignored artifacts. These results describe local acceptance before publishing; deployment acceptance is recorded separately.

### GitHub Pages routing

Both decks use hash routing so direct slide reloads work on static Pages. The older deck previously used history routing; a direct `/talks/aigc-dev/2` request loaded the site-wide 404 page for the newer deck. Use `/talks/aigc-dev/#/2` for direct links. The browser regression now verifies hash URLs for both decks.
