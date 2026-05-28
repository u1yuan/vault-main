# Update Vault Folder References Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update all occurrences of "5-notes" to "6-notes" and "4-archives" to "5-archives" across specified files to align with the actual folder structure on disk.

**Architecture:** Surgical text replacement in markdown files, ensuring Dataview queries, wikilinks, and paths are updated.

**Tech Stack:** Markdown, Dataview (syntax only)

---

### Task 1: Update Daily Plans

**Files:**
- Modify: `0-plan/daily/2026-05-23.md`
- Modify: `0-plan/daily/2026-05-25.md`

- [ ] **Step 1: Update 2026-05-23.md**
  Replace `FROM "5-notes"` with `FROM "6-notes"`.

- [ ] **Step 2: Update 2026-05-25.md**
  Replace `FROM "5-notes"` with `FROM "6-notes"`.

### Task 2: Update Individual Daily Notes

**Files:**
- Modify: `2026-05-25.md`
- Modify: `2026-05-28.md`

- [ ] **Step 1: Update 2026-05-25.md**
  Replace `FROM "5-notes"` with `FROM "6-notes"`.

- [ ] **Step 2: Update 2026-05-28.md**
  Replace `FROM "5-notes"` with `FROM "6-notes"`.

### Task 3: Update Archive Files

**Files:**
- Modify: `5-archives/6-notes/Jane Smith.md`
- Modify: `5-archives/PLAN.md`

- [ ] **Step 1: Update Jane Smith.md**
  Replace `FROM "5-notes"` with `FROM "6-notes"`.

- [ ] **Step 2: Update PLAN.md**
  Replace all occurrences of `5-notes/` with `6-notes/`, `"5-notes"` with `"6-notes"`, `4-archives/` with `5-archives/`, and `"4-archives"` with `"5-archives"`. Be careful with the folder structure diagram in this file.

### Task 4: Update Documentation and Templates

**Files:**
- Modify: `START HERE.md`
- Modify: `_templates/tpl-daily.md`
- Modify: `_templates/tpl-person.md`
- Modify: `_templates/tpl-weekly.md`

- [ ] **Step 1: Update START HERE.md**
  Replace `5-notes/` with `6-notes/`.

- [ ] **Step 2: Update tpl-daily.md**
  Replace `FROM "5-notes"` with `FROM "6-notes"`.

- [ ] **Step 3: Update tpl-person.md**
  Replace `FROM "5-notes"` with `FROM "6-notes"`.

- [ ] **Step 4: Update tpl-weekly.md**
  Replace `5-notes/` with `6-notes/`.

### Task 5: Update Cursor Plan (Optional but requested)

**Files:**
- Modify: `.cursor/plans/vault_debug_analysis_fixes_82734580.plan.md`

- [ ] **Step 1: Update the plan file**
  Replace `5-notes` with `6-notes` and `4-archives` with `5-archives` where applicable (e.g. paths and folder mappings).
