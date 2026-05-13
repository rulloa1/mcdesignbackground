# skills

A small collection of Claude Code skills for in-session self-improvement, adapting external inputs to your setup, and tweaking HTML output in the browser before baking changes back to source.

## What's included

| Skill | What it does |
|---|---|
| **calibrate** | Reviews the current conversation and suggests targeted updates to your skills, instruction files, or memory based on corrections and patterns from the session. Two modes: full (deep scan) and lite (quick 1-3 suggestions). |
| **personalise** | Takes any external input — tutorial, repo, prompt, framework, skill — and recommends how to adapt it to your specific workspace, voice, tech stack, and goals. Recommendation only; nothing installs without your go. |
| **tweak** | Injects a live controls panel into any single-file HTML output. Auto-scans the page, gives you 5 (light) or 10 (max) sliders for speed, type sizes, density, glow, roundness, etc., then bakes your dialed values back into the source CSS. |

## Install

Each top-level folder is a self-contained skill. To install one or more:

```bash
git clone https://github.com/robonuggets/skills
```

Then copy the folders you want into your `~/.claude/skills/` directory (or your project's `.claude/skills/`):

```bash
cp -r skills/calibrate ~/.claude/skills/
cp -r skills/personalise ~/.claude/skills/
cp -r skills/tweak ~/.claude/skills/
```

After restarting Claude Code, the skills are available via their trigger phrases (or as slash commands if your harness supports them).

## Triggers at a glance

- **calibrate** — `calibrate`, `calibrate lite`, "what can you improve", "tune up"
- **personalise** — `/personalise [thing]`, "personalise this", "adapt this for me"
- **tweak** — `/tweak [file]`, `/tweak max [file]`, "bake tweak", "tweak strip"

See each skill's `SKILL.md` for the full behaviour spec.

## Notes

- These skills are written for Claude Code but most of the prose is harness-neutral. `personalise` and `calibrate` reference generic concepts ("instruction file", "memory") that map to whatever your setup uses.
- `tweak` ships with a `panel.html` bundle that gets injected into your target HTML. The panel uses a fixed accent colour (orange `#ff6b1a`) — feel free to change it; nothing else depends on it.
- No licence file is included. Adapt freely.
