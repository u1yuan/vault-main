# Cornell Note Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a functional Cornell note template in Obsidian using a custom CSS snippet for side-by-side layout (Cues/Notes) and PARA-aligned metadata.

**Architecture:** The template uses Templater to prompt for PARA links (Project, Area, Goal) and applies the `cornell-note` CSS class via `cssclasses` frontmatter. Cues are written as `###` headings which are positioned on the left by the existing CSS snippet.

**Tech Stack:** Obsidian, Templater, CSS.

---

### Task 1: Create the Cornell Note Template

**Files:**
- Create: `_templates/tpl-cornell.md`

- [ ] **Step 1: Write the template file**

```markdown
<%*
const projectLink = await tp.system.prompt("Project wikilink target (blank for none)", "");
const areaLink = await tp.system.prompt("Area wikilink target (blank for none)", "");
const goalLink = await tp.system.prompt("Goal wikilink target (blank for none)", "");

const projectTrim = (projectLink || "").trim();
const areaTrim = (areaLink || "").trim();
const goalTrim = (goalLink || "").trim();

const projectLine = projectTrim ? `project: "[[${projectTrim}]]"` : `project: `;
const areaLine = areaTrim ? `area: "[[${areaTrim}]]"` : `area: `;
const goalLine = goalTrim ? `goal: "[[${goalTrim}]]"` : `goal: `;
-%>
---
type: cornell
cssclasses: [cornell-note]
<% projectLine %>
<% areaLine %>
<% goalLine %>
tags: [notes/cornell]
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> [!tip] How to use this template
> 1. Use **Level 3 Headings (`###`)** for your cues/questions on the left.
> 2. Write your actual notes directly underneath the headings.
> 3. Use the **Summary** section at the bottom for your final synthesis.

---

### Key Question / Cue
This is the notes area. You can write naturally here. 
- Use bullets
- Add images
- Write code blocks

### Another Concept
The CSS snippet handles the positioning automatically for every H3 heading.

---

<div class="summary-section">

## Summary
Summarize the main points of the note here.
</div>
```

- [ ] **Step 2: Commit**

```bash
git add _templates/tpl-cornell.md
git commit -m "feat: add Cornell note template"
```

### Task 2: Verification

**Files:**
- Create: `Verification-Cornell-Note.md` (Temporary test file)

- [ ] **Step 1: Create a verification note using the template structure**
Since I cannot interactively run Templater, I will manually create a note that simulates the template's output to verify the CSS still applies correctly and the PARA fields follow convention.

```markdown
---
type: cornell
cssclasses: [cornell-note]
project: "[[ACM TechSprint Asteria 2026]]"
area: "[[FEU Tech ACM Student Chapter]]"
goal: ""
tags: [notes/cornell]
created: 2026-05-28
---

# Verification Note

### Test Cue
This content should be in the center column.

---

<div class="summary-section">

## Summary
Verification successful.
</div>
```

- [ ] **Step 2: Clean up verification file**
Run: `rm Verification-Cornell-Note.md`
