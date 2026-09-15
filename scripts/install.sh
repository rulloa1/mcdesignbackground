#!/usr/bin/env bash
#
# install.sh — copy this repository's agent skills into a coding tool's skills directory.
#
# Two skill sets live in this repo:
#   .agents/skills/  — design, image-generation and Supabase skills (vendored)
#   skills/          — calibrate, personalise, tweak (in-session helpers)
#
# Run `./scripts/install.sh --list` to see them, `--help` for options.

set -euo pipefail

REPO_ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)

TOOL=claude
SCOPE=global
DEST=""
SOURCE=all
ONLY=""
DRY_RUN=0
FORCE=0
LINK=0
DO_LIST=0

if [ -t 1 ] && [ -z "${NO_COLOR:-}" ]; then
  BOLD=$'\033[1m'; DIM=$'\033[2m'; RED=$'\033[31m'; GREEN=$'\033[32m'; YELLOW=$'\033[33m'; RESET=$'\033[0m'
else
  BOLD=""; DIM=""; RED=""; GREEN=""; YELLOW=""; RESET=""
fi

info() { printf '%s\n' "$*"; }
warn() { printf '%s%s%s\n' "$YELLOW" "$*" "$RESET" >&2; }
die()  { printf '%s%s%s\n' "$RED" "$*" "$RESET" >&2; exit 1; }

usage() {
  cat <<EOF
${BOLD}install.sh${RESET} — install this repo's agent skills into a coding tool.

${BOLD}Usage${RESET}
  ./scripts/install.sh [--tool <name>] [--scope global|project] [options]

${BOLD}Options${RESET}
  --tool <name>     Target tool: claude, antigravity, cursor, codex, agents.
                    Default: claude.
  --scope <where>   global (\$HOME) or project (current directory). Default: global.
  --dest <dir>      Install straight into <dir>; overrides --tool and --scope.
  --source <set>    Which skills to consider: agents (.agents/skills),
                    local (skills/), or all. Default: all.
  --skills <list>   Comma-separated skill names instead of everything,
                    e.g. --skills brandkit,tweak
  --link            Symlink each skill back to this repo instead of copying,
                    so a 'git pull' here updates the installed copy.
  --force           Replace skills that already exist at the destination.
  --dry-run         Print what would happen; write nothing.
  --list            List available skills and exit.
  -h, --help        Show this help.

${BOLD}Destinations${RESET}
  Each tool is assumed to read skills from its usual config directory:
    claude       ~/.claude/skills        ./.claude/skills
    antigravity  ~/.antigravity/skills   ./.antigravity/skills
    cursor       ~/.cursor/skills        ./.cursor/skills
    codex        ~/.codex/skills         ./.codex/skills
    agents       ~/.agents/skills        ./.agents/skills
  If your install reads from somewhere else, pass --dest.

${BOLD}Examples${RESET}
  ./scripts/install.sh --tool antigravity
  ./scripts/install.sh --tool claude --scope project --skills tweak,calibrate
  ./scripts/install.sh --dest ~/work/app/.claude/skills --link --force
EOF
}

while [ $# -gt 0 ]; do
  case "$1" in
    --tool)    [ $# -ge 2 ] || die "--tool needs a value";   TOOL=$2;   shift 2 ;;
    --scope)   [ $# -ge 2 ] || die "--scope needs a value";  SCOPE=$2;  shift 2 ;;
    --dest)    [ $# -ge 2 ] || die "--dest needs a value";   DEST=$2;   shift 2 ;;
    --source)  [ $# -ge 2 ] || die "--source needs a value"; SOURCE=$2; shift 2 ;;
    --skills)  [ $# -ge 2 ] || die "--skills needs a value"; ONLY=$2;   shift 2 ;;
    --tool=*)    TOOL=${1#*=};   shift ;;
    --scope=*)   SCOPE=${1#*=};  shift ;;
    --dest=*)    DEST=${1#*=};   shift ;;
    --source=*)  SOURCE=${1#*=}; shift ;;
    --skills=*)  ONLY=${1#*=};   shift ;;
    --link)     LINK=1;    shift ;;
    --force)    FORCE=1;   shift ;;
    --dry-run)  DRY_RUN=1; shift ;;
    --list)     DO_LIST=1; shift ;;
    -h|--help)  usage; exit 0 ;;
    *) die "Unknown option: $1 (try --help)" ;;
  esac
done

case "$SOURCE" in
  agents|local|all) ;;
  *) die "--source must be agents, local or all (got '$SOURCE')" ;;
esac

case "$SCOPE" in
  global|project) ;;
  *) die "--scope must be global or project (got '$SCOPE')" ;;
esac

# Map the tool to its config directory. The destination itself is resolved later,
# after --list, so listing works even in an environment without HOME.
tool_dir=""
if [ -z "$DEST" ]; then
  case "$TOOL" in
    claude|antigravity|cursor|codex|agents) tool_dir=".$TOOL" ;;
    *) die "Unknown --tool '$TOOL'. Use claude, antigravity, cursor, codex, agents, or pass --dest." ;;
  esac
fi

# Roots to scan, paired by index with the set name each one contributes.
roots=()
set_names=()
if [ "$SOURCE" = all ] || [ "$SOURCE" = agents ]; then
  roots+=("$REPO_ROOT/.agents/skills")
  set_names+=("agents")
fi
if [ "$SOURCE" = all ] || [ "$SOURCE" = local ]; then
  roots+=("$REPO_ROOT/skills")
  set_names+=("local")
fi

# Collect skills as "name<TAB>set<TAB>path" lines; a skill is any directory holding SKILL.md.
collect() {
  local i root set_name entry
  for i in "${!roots[@]}"; do
    root=${roots[$i]}
    set_name=${set_names[$i]}
    [ -d "$root" ] || continue
    for entry in "$root"/*/; do
      [ -f "${entry}SKILL.md" ] || continue
      printf '%s\t%s\t%s\n' "$(basename "$entry")" "$set_name" "${entry%/}"
    done
  done
}

AVAILABLE=$(collect | sort)
[ -n "$AVAILABLE" ] || die "No skills found under $REPO_ROOT (looked for */SKILL.md)."

# First `description:` line of the skill's YAML frontmatter, trimmed for display.
describe() {
  sed -n '/^description:[[:space:]]*/{s/^description:[[:space:]]*//;s/^"//;s/"$//;p;q;}' "$1/SKILL.md" \
    | cut -c1-96
}

if [ "$DO_LIST" -eq 1 ]; then
  info "${BOLD}Skills in $REPO_ROOT${RESET}"
  info ""
  while IFS=$'\t' read -r name set_name path; do
    printf '  %s%-32s%s %s[%s]%s %s%s%s\n' \
      "$BOLD" "$name" "$RESET" "$DIM" "$set_name" "$RESET" "$DIM" "$(describe "$path")" "$RESET"
  done <<< "$AVAILABLE"
  info ""
  info "${DIM}Install all: ./scripts/install.sh --tool $TOOL${RESET}"
  exit 0
fi

# Resolve the destination. Only a global-scope install reads HOME, so an unset
# HOME is an error only where it is actually required.
if [ -z "$DEST" ]; then
  if [ "$SCOPE" = global ]; then
    if [ -z "${HOME:-}" ]; then
      die "--scope global needs HOME to be set. Pass --dest <dir>, or use --scope project."
    fi
    DEST="$HOME/$tool_dir/skills"
  else
    DEST="$PWD/$tool_dir/skills"
  fi
fi

# Narrow to --skills, rejecting names that do not exist.
SELECTED=$AVAILABLE
if [ -n "$ONLY" ]; then
  SELECTED=""
  IFS=',' read -r -a wanted <<< "$ONLY"
  for want in "${wanted[@]}"; do
    want=$(printf '%s' "$want" | tr -d '[:space:]')
    [ -n "$want" ] || continue
    match=$(printf '%s\n' "$AVAILABLE" | awk -F'\t' -v n="$want" '$1 == n')
    [ -n "$match" ] || die "No skill named '$want'. Run --list to see the available names."
    SELECTED="${SELECTED}${match}"$'\n'
  done
  SELECTED=$(printf '%s' "$SELECTED")
fi
[ -n "$SELECTED" ] || die "Nothing selected."

count=$(printf '%s\n' "$SELECTED" | wc -l | tr -d ' ')
if [ "$LINK" -eq 1 ]; then action="Linking"; else action="Copying"; fi
info "${BOLD}$action $count skill(s) → $DEST${RESET}"
if [ "$DRY_RUN" -eq 1 ]; then
  info "${DIM}(dry run — nothing will be written)${RESET}"
fi
info ""

if [ "$DRY_RUN" -eq 0 ]; then
  mkdir -p "$DEST"
fi
if [ -d "$DEST" ]; then
  dest_abs=$(cd "$DEST" && pwd)
else
  dest_abs=$DEST
fi

installed=0; skipped=0; replaced=0

while IFS=$'\t' read -r name set_name path; do
  target="$dest_abs/$name"

  if [ "$(cd "$path" && pwd)" = "$target" ]; then
    warn "  ~ $name — source and destination are the same directory, skipping"
    skipped=$((skipped + 1))
    continue
  fi

  if [ -e "$target" ] || [ -L "$target" ]; then
    if [ "$FORCE" -eq 0 ]; then
      info "  ${DIM}~ $name — already installed, skipping (use --force to replace)${RESET}"
      skipped=$((skipped + 1))
      continue
    fi
    if [ "$DRY_RUN" -eq 0 ]; then
      rm -rf "$target"
    fi
    replaced=$((replaced + 1))
  fi

  if [ "$DRY_RUN" -eq 0 ]; then
    if [ "$LINK" -eq 1 ]; then
      ln -s "$path" "$target"
    else
      cp -R "$path" "$target"
    fi
  fi
  printf '  %s+ %s%s %s(%s)%s\n' "$GREEN" "$name" "$RESET" "$DIM" "$set_name" "$RESET"
  installed=$((installed + 1))
done <<< "$SELECTED"

info ""
summary="$installed installed"
if [ "$replaced" -gt 0 ]; then
  summary="$summary ($replaced replaced)"
fi
if [ "$skipped" -gt 0 ]; then
  summary="$summary, $skipped skipped"
fi
info "${BOLD}$summary${RESET}"

if [ "$DRY_RUN" -eq 0 ] && [ "$installed" -gt 0 ]; then
  info "${DIM}Restart $TOOL (or reload its skills) to pick them up.${RESET}"
fi
