# Claude Code Entry Point

This repository runs a dual agent harness: OpenAI Codex and Claude Code share
one canonical rule set. The full project rules are imported below from
`AGENTS.md`.

@AGENTS.md

## Claude Code Specifics

- `.claude/skills/**` and `.claude/agents/**` are generated mirrors of the Codex
  canon (`plugins/v-pl-codex/skills/`, `.agents/skills/`, and
  `.codex/agents/*.toml`). Never edit generated mirrors by hand.
- Edit the canonical file, then run `npm run sync:harness`.
- Parity is enforced by `npm run check:parity`, which is included in
  `npm run codex:ship`.
- Hooks in `.claude/settings.json` reuse the shared scripts under
  `.codex/hooks/`.
- Use `codex/*` branches and draft PRs for future published changes unless the
  user gives a different delivery instruction.

