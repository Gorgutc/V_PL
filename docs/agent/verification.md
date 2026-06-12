# V_PL Verification

Current local checks are intentionally lightweight because the repository is in
bootstrap state.

```bash
npm run codex:verify-plugin
npm run check:parity
npm run verify
npm run codex:ship
```

`npm run verify` runs `verify-frozen.js`. Success means the command exits
cleanly and reports `0 FAIL`.

Before future commits or pushes that change code or agent infrastructure, run
`npm run codex:ship`.

