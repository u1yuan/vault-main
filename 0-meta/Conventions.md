---
type: meta
tags: [meta/conventions]
created: 2026-05-23
---

# Vault Conventions

## Frontmatter wikilinks (rename-safe)

All inter-note references in YAML **must** use quoted wikilink form so Obsidian's built-in link updater can repair them on rename:

```yaml
goal: "[[Run a 5K]]"
area: "[[Health & Fitness]]"
project: "[[Couch to 5K Training Program]]"
```

Bare strings (`goal: Run a 5K`) will **not** update when the target note is renamed.

**Setting:** Settings → Files & Links → **Automatically update internal links** (enabled).

During Weekly Review, scan the [[Vault Activity#Unresolved frontmatter links (Weekly Review)|broken-link query]] on the Vault Activity dashboard.

## Archive workflow

Run **QuickAdd: Archive (recursive)** from the command palette on any note to:

1. Set `status` to `completed` or `canceled`
2. Move the note to `4-archives/<original-path>` (mirrors PARA subfolders)
3. Recursively offer dependent notes (backlinks) for co-archiving

## New note commands

Seven QuickAdd commands create typed notes with enum-validated frontmatter:

- New Task, New Project, New Goal, New Area, New Person, New Meeting, New Fleeting Note
