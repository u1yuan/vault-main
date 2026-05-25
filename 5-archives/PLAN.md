---
status: completed
---
# AGENT PROMPT: Build a Pseudo-ObsiBrain Obsidian Vault

> **Mode:** Plan  
> **Agent type:** File system + shell execution agent with Obsidian vault write access  
> **Objective:** Scaffold a fully functional, ObsiBrain-inspired Obsidian vault from scratch using only free community plugins — no proprietary software required.

---

## ROLE & CONTEXT

You are an expert Obsidian vault architect and PKM systems engineer. You have deep knowledge of the P.A.R.A. methodology (Projects, Areas, Resources, Archives), the GTD (Getting Things Done) framework, the Tasks community plugin, the Dataview community plugin, Templater, and Periodic Notes.

You are building a **pseudo-ObsiBrain vault** — a free, open-source approximation of the ObsiBrain productivity system. The vault must implement:

- A numbered P.A.R.A. folder structure
- A Vision-to-Action hierarchy: Area → Goal → Project → Task
- A Daily Planning dashboard as the primary execution hub
- A five-tier periodic review system (daily / weekly / monthly / quarterly / yearly)
- Task management via the Tasks plugin with due, scheduled, priority, and repeat support
- Habit tracking via repeating Tasks plugin tasks with a `habitFreq` inline field
- A Quick Capture inbox (`5-notes/`)
- A lightweight CRM system (People + Meeting notes) stored in `5-notes/`
- Live relational views via Dataview
- A `START HERE.md` onboarding file at the vault root

You will work in **sequential phases**. Complete each phase fully before advancing. After each phase, confirm what was created and flag any blockers before continuing.

---

## CONSTRAINTS & GROUND RULES

1. **Every file must be valid Markdown** compatible with Obsidian's renderer.
2. **All YAML frontmatter** must use the exact property names defined in this prompt. Do not invent new property names.
3. **All Dataview queries** must use DQL (Dataview Query Language), not DataviewJS, unless explicitly instructed.
4. **All Tasks plugin queries** must use the Tasks plugin's code fence syntax (` ```tasks ``` `).
5. **Templater syntax** (`<% %>`) is only used inside files stored in the `_templates/` folder.
6. **Never hardcode today's date.** Always use Templater expressions (`<% tp.date.now(...) %>`) or Tasks plugin relative date keywords (`today`, `tomorrow`).
7. **Wikilinks** use `[[Note Name]]` format. Never use markdown hyperlinks `[text](path)` for internal vault navigation.
8. **Folder names must exactly match** the naming convention: `0-plan`, `1-projects`, `2-areas`, `3-resources`, `4-archives`, `5-notes`. Do not alter the numeric prefixes or casing.
9. **Status values are case-sensitive** and must be one of: `ongoing`, `on hold`, `completed`, `canceled`.
10. **Priority values** must be one of: `high`, `medium`, `low`.
11. Do not install, reference, or depend on the proprietary ObsiBrain plugin. This vault must work with only Obsidian core features plus the five community plugins listed in Phase 2.

---

## PHASE 1 — FOLDER SCAFFOLD

**Goal:** Create the complete directory structure.

Create the following folder tree at the vault root. Create a `.gitkeep` placeholder file (or an `_index.md` stub) inside any folder that would otherwise be empty, so Obsidian registers it.

```
[vault-root]/
├── START HERE.md                  ← create in Phase 5
├── 0-plan/
│   ├── daily/                     ← daily notes land here
│   ├── weekly/                    ← weekly review notes land here
│   ├── monthly/                   ← monthly review notes land here
│   ├── quarterly/                 ← quarterly review notes land here
│   └── yearly/                    ← yearly review notes land here
├── 1-projects/                    ← one note per active project
├── 2-areas/                       ← one note per life area + goal notes
├── 3-resources/                   ← reference material notes
├── 4-archives/                    ← completed/inactive items
├── 5-notes/                       ← inbox: fleeting notes, people, meetings
└── _templates/                    ← Templater templates (never edited directly by user)
    ├── tpl-daily.md
    ├── tpl-weekly.md
    ├── tpl-monthly.md
    ├── tpl-quarterly.md
    ├── tpl-yearly.md
    ├── tpl-project.md
    ├── tpl-goal.md
    ├── tpl-area.md
    ├── tpl-task-note.md
    ├── tpl-fleeting-note.md
    ├── tpl-person.md
    └── tpl-meeting.md
```

**Deliverable:** Confirm each folder exists before moving to Phase 2.

---

## PHASE 2 — PLUGIN CONFIGURATION

**Goal:** Write the Obsidian plugin configuration files so the vault is ready to use immediately when opened.

Create or overwrite `.obsidian/community-plugins.json` to enable exactly these five plugins:

```json
[
  "obsidian-tasks-plugin",
  "dataview",
  "templater-obsidian",
  "periodic-notes",
  "nldates-obsidian"
]
```

Then write the following configuration files:

### 2a. Templater config — `.obsidian/plugins/templater-obsidian/data.json`

```json
{
  "template_folder": "_templates",
  "auto_jump_to_cursor": true,
  "trigger_on_file_creation": true,
  "folder_templates": [
    { "folder": "1-projects", "template": "_templates/tpl-project.md" },
    { "folder": "2-areas", "template": "_templates/tpl-area.md" },
    { "folder": "3-resources", "template": "_templates/tpl-fleeting-note.md" },
    { "folder": "5-notes", "template": "_templates/tpl-fleeting-note.md" }
  ]
}
```

### 2b. Periodic Notes config — `.obsidian/plugins/periodic-notes/data.json`

```json
{
  "daily": {
    "enabled": true,
    "format": "YYYY-MM-DD",
    "folder": "0-plan/daily",
    "template": "_templates/tpl-daily.md"
  },
  "weekly": {
    "enabled": true,
    "format": "YYYY-[W]WW",
    "folder": "0-plan/weekly",
    "template": "_templates/tpl-weekly.md"
  },
  "monthly": {
    "enabled": true,
    "format": "YYYY-MM",
    "folder": "0-plan/monthly",
    "template": "_templates/tpl-monthly.md"
  },
  "quarterly": {
    "enabled": true,
    "format": "YYYY-[Q]Q",
    "folder": "0-plan/quarterly",
    "template": "_templates/tpl-quarterly.md"
  },
  "yearly": {
    "enabled": true,
    "format": "YYYY",
    "folder": "0-plan/yearly",
    "template": "_templates/tpl-yearly.md"
  }
}
```

### 2c. Dataview config — `.obsidian/plugins/dataview/data.json`

```json
{
  "enableInlineDataview": true,
  "enableDataviewJs": false,
  "inlineQueryPrefix": "=",
  "inlineJsQueryPrefix": "$=",
  "tableIdColumnName": "File",
  "refreshInterval": 2500
}
```

### 2d. Tasks config — `.obsidian/plugins/obsidian-tasks-plugin/data.json`

```json
{
  "globalFilter": "",
  "globalQuery": "",
  "removeGlobalFilter": false,
  "setCreatedDate": true,
  "autoSuggestInEditor": true,
  "useFilenameAsScheduledDate": false,
  "recurrenceOnNextLine": false,
  "dueDateFormat": "YYYY-MM-DD",
  "scheduledDateFormat": "YYYY-MM-DD",
  "doneDateFormat": "YYYY-MM-DD"
}
```

**Deliverable:** Confirm all four config files are written. Flag if any plugin ID is incorrect for the installed version.

---

## PHASE 3 — TEMPLATES

**Goal:** Write all twelve template files into `_templates/`. Each template must be production-ready — no placeholder text like "TODO" or "fill this in."

---

### 3a. `_templates/tpl-area.md`

```markdown
---
type: area
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> One sentence describing this area of responsibility.

## Overview

## Active Goals
\`\`\`dataview
TABLE status, target_date AS "Target"
FROM "2-areas"
WHERE type = "goal" AND area = this.file.link
SORT target_date ASC
\`\`\`

## Active Projects
\`\`\`dataview
TABLE status, deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE status = "ongoing" AND area = this.file.link
SORT deadline ASC
\`\`\`

## Notes & Resources
```

---

### 3b. `_templates/tpl-goal.md`

```markdown
---
type: goal
status: ongoing
area: "[[]]"
target_date: 
achieved_date: 
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> **Why this goal matters:**

## Overview

## Linked Projects
\`\`\`dataview
TABLE status, deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE goal = this.file.link
SORT deadline ASC
\`\`\`

## Progress Notes
```

---

### 3c. `_templates/tpl-project.md`

```markdown
---
type: project
status: ongoing
priority: medium
goal: "[[]]"
area: "[[]]"
deadline: 
completed_date: 
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> **SMART Outcome:** *(Specific, Measurable, Achievable, Relevant, Time-bound)*
> "By [deadline], I will have [specific result] as evidenced by [measurable proof]."

## Overview

---

## ✅ Remaining Tasks
\`\`\`tasks
not done
path includes <% tp.file.path(true) %>
sort by due
sort by priority
\`\`\`

## ✔️ Completed Tasks
\`\`\`tasks
done
path includes <% tp.file.path(true) %>
sort by done
\`\`\`

---

## 📎 Notes & References
```

---

### 3d. `_templates/tpl-fleeting-note.md`

```markdown
---
type: note
tags: []
related: 
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

```

---

### 3e. `_templates/tpl-person.md`

```markdown
---
type: person
phone: 
email: 
title: 
company: 
tags: [notes/people]
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

## Contact Info
- **Phone:** `= this.phone`
- **Email:** `= this.email`
- **Title:** `= this.title`
- **Company:** `= this.company`

---

## Meeting History
\`\`\`dataview
TABLE scheduled AS "Date", location AS "Location"
FROM "5-notes"
WHERE type = "meeting" AND contains(attendees, this.file.link)
SORT scheduled DESC
\`\`\`

## Tasks Mentioning This Person
\`\`\`tasks
not done
description includes <% tp.file.title %>
\`\`\`

## Notes & Mentions
\`\`\`dataview
LIST
FROM ""
WHERE contains(file.outlinks, this.file.link) AND type != "meeting"
SORT file.mtime DESC
\`\`\`
```

---

### 3f. `_templates/tpl-meeting.md`

```markdown
---
type: meeting
scheduled: <% tp.date.now("YYYY-MM-DD") %>
location: 
tags: [notes/meeting]
attendees: []
project: 
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

**Date:** <% tp.date.now("dddd, MMMM D, YYYY") %>  
**Location:** `= this.location`  
**Attendees:** `= this.attendees`

---

## Agenda

## Notes

## Action Items
- [ ] 
```

---

### 3g. `_templates/tpl-daily.md`

```markdown
---
type: daily
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [plan/daily]
---

# ☀️ <% tp.date.now("dddd, MMMM D, YYYY") %>

← [[<% tp.date.now("YYYY-MM-DD", -1) %>]] &nbsp;&nbsp; [[<% tp.date.now("YYYY-MM-DD", 1) %>]] →

---

## ⚠️ Overdue

\`\`\`tasks
not done
due before today
sort by due
short mode
\`\`\`

---

## 🎯 Due Today

\`\`\`tasks
not done
due on today
sort by priority
short mode
\`\`\`

---

## 📅 Scheduled Today

\`\`\`tasks
not done
scheduled on today
sort by priority
short mode
\`\`\`

---

## 🔄 Ongoing (No Due Date)

\`\`\`tasks
not done
no due date
not done
sort by created
limit 10
short mode
\`\`\`

---

## 🤝 Meetings Today

\`\`\`dataview
TABLE location AS "Where", attendees AS "Who"
FROM "5-notes"
WHERE type = "meeting" AND scheduled = date("<% tp.date.now("YYYY-MM-DD") %>")
\`\`\`

---

## 📊 Active Projects Snapshot

\`\`\`dataview
TABLE status AS "Status", deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE status = "ongoing"
SORT deadline ASC
\`\`\`

---

## 📓 Daily Journal

**🏆 What are my 3 priorities for today?**
1. 
2. 
3. 

**🌅 What would make today a success?**


**🙏 What am I grateful for?**


**🌙 End-of-day reflection — What did I actually accomplish?**

```

---

### 3h. `_templates/tpl-weekly.md`

```markdown
---
type: weekly
week: <% tp.date.now("YYYY-[W]WW") %>
tags: [plan/weekly]
---

# 📅 Week <% tp.date.now("[W]WW, YYYY") %>

**<% tp.date.now("MMMM D", 0, "YYYY-MM-DD", "isoWeek") %> – <% tp.date.now("MMMM D", 6, "YYYY-MM-DD", "isoWeek") %>**

---

## 🧹 CLOSE — Clean Sweep

- [ ] Process and empty `5-notes/` inbox
- [ ] Archive completed projects (move to `4-archives/`)
- [ ] Clear physical desk and digital downloads folder
- [ ] Review and close open browser tabs

---

## 🔍 REFLECT — Insights

**What were my biggest wins this week?**


**What slowed me down or created friction?**


**What should I do differently next week?**


**What did I learn?**


---

## 🎯 PLAN — Next Week's Intentions

**Top 3 priorities for the coming week:**
1. 
2. 
3. 

**Projects to focus on:**


---

## 📊 Projects Health Check

\`\`\`dataview
TABLE status AS "Status", deadline AS "Deadline", priority AS "Priority", goal AS "Goal"
FROM "1-projects"
WHERE status = "ongoing" OR status = "on hold"
SORT deadline ASC
\`\`\`

---

## ✅ All Overdue Tasks (Clear Before Monday)

\`\`\`tasks
not done
due before today
sort by due
\`\`\`
```

---

### 3i. `_templates/tpl-monthly.md`

```markdown
---
type: monthly
month: <% tp.date.now("YYYY-MM") %>
tags: [plan/monthly]
---

# 🗓️ <% tp.date.now("MMMM YYYY") %> — Monthly Review

---

## 🧹 CLOSE

- [ ] Complete weekly close for the final week
- [ ] Archive any stalled projects (no progress in 30+ days)
- [ ] Review recurring tasks — delete or adjust frequency

---

## 🔍 REFLECT

**What were my top 3 accomplishments this month?**
1. 
2. 
3. 

**Which projects made meaningful progress? Which stalled?**


**How was my energy and focus overall?**


**What habits held? Which broke?**


---

## 🎯 PLAN

**Projects to launch or prioritize next month:**


**Goals to re-evaluate:**


**New habits or routines to build:**


---

## 📊 Goals Progress

\`\`\`dataview
TABLE status AS "Status", target_date AS "Target", area AS "Area"
FROM "2-areas"
WHERE type = "goal" AND (status = "ongoing" OR status = "on hold")
SORT target_date ASC
\`\`\`

---

## 📈 Completed This Month

\`\`\`dataview
TABLE completed_date AS "Completed"
FROM "1-projects"
WHERE completed_date >= date("<% tp.date.now("YYYY-MM-01") %>")
SORT completed_date DESC
\`\`\`
```

---

### 3j. `_templates/tpl-quarterly.md`

```markdown
---
type: quarterly
quarter: <% tp.date.now("YYYY-[Q]Q") %>
tags: [plan/quarterly]
---

# 🗺️ <% tp.date.now("[Q]Q YYYY") %> — Quarterly Review

---

## 🧹 CLOSE

- [ ] Complete monthly close
- [ ] Archive all completed and canceled projects
- [ ] Review all Goals — mark completed or adjust targets

---

## 🔍 REFLECT

**What were the 3 most impactful things I did this quarter?**
1. 
2. 
3. 

**What goals did I hit? What goals did I miss, and why?**


**The 80/20 check: What 20% of my actions produced 80% of results?**


**What should I stop doing entirely?**


---

## 🎯 PLAN — Next Quarter

**New Goals to set:**


**Projects to kick off:**


**Areas to strengthen:**


---

## 🌀 Wheel of Life Check-in

Rate each area 1–10 (10 = thriving):

| Area | Score | Notes |
|------|-------|-------|
| Health & Fitness | | |
| Career / Work | | |
| Finances | | |
| Relationships | | |
| Personal Growth | | |
| Fun & Recreation | | |
| Environment | | |
| Purpose / Meaning | | |

---

## 📊 All Active Goals

\`\`\`dataview
TABLE status, target_date AS "Target", area AS "Area"
FROM "2-areas"
WHERE type = "goal"
SORT status ASC, target_date ASC
\`\`\`
```

---

### 3k. `_templates/tpl-yearly.md`

```markdown
---
type: yearly
year: <% tp.date.now("YYYY") %>
tags: [plan/yearly]
---

# 🌟 <% tp.date.now("YYYY") %> — Yearly Review & Vision

---

## 🧹 CLOSE

- [ ] Complete quarterly close
- [ ] Archive the full previous year's daily/weekly notes (optional)
- [ ] Back up the vault

---

## 🔍 REFLECT — The Year in Review

**The 3 things I am most proud of this year:**
1. 
2. 
3. 

**The 3 biggest challenges or setbacks:**
1. 
2. 
3. 

**The 80/20 of my year: what drove real results?**


**What do I want to leave behind as I enter the new year?**


**One word that defines this year:**


---

## 🌀 Wheel of Life — Year-End Assessment

| Area | Score (1–10) | Last Year | Δ |
|------|-------------|-----------|---|
| Health & Fitness | | | |
| Career / Work | | | |
| Finances | | | |
| Relationships | | | |
| Personal Growth | | | |
| Fun & Recreation | | | |
| Environment | | | |
| Purpose / Meaning | | | |

---

## 🎯 VISION — Designing Next Year

**The 3 most important Goals for next year:**
1. 
2. 
3. 

**My theme / word for next year:**


**What kind of person do I want to be by December 31st?**


---

## 📊 Year Completion Stats

\`\`\`dataview
TABLE completed_date AS "Completed"
FROM "1-projects"
WHERE type = "project" AND completed_date >= date("<% tp.date.now("YYYY") %>-01-01")
SORT completed_date DESC
\`\`\`
```

**Deliverable:** Confirm all 12 template files are written. Validate that no raw Templater syntax appears outside `_templates/`.

---

## PHASE 4 — SEED CONTENT

**Goal:** Populate the vault with one example note of each type so the Dataview queries have data to render and the user understands the expected format immediately.

### 4a. Example Area — `2-areas/Health & Fitness.md`

```markdown
---
type: area
tags: [area]
created: 2025-01-01
---

# Health & Fitness

> Maintain the physical and mental energy needed to perform at my best across all areas of life.

## Overview
This area covers exercise, nutrition, sleep, and mental wellness habits.

## Active Goals
\`\`\`dataview
TABLE status, target_date AS "Target"
FROM "2-areas"
WHERE type = "goal" AND area = this.file.link
SORT target_date ASC
\`\`\`

## Active Projects
\`\`\`dataview
TABLE status, deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE status = "ongoing" AND area = this.file.link
SORT deadline ASC
\`\`\`

## Notes & Resources
```

---

### 4b. Example Goal — `2-areas/Run a 5K.md`

```markdown
---
type: goal
status: ongoing
area: "[[Health & Fitness]]"
target_date: 2025-09-30
achieved_date: 
tags: [goal]
created: 2025-01-05
---

# Run a 5K

> Complete a 5K race in under 35 minutes by September 30th.

## Overview
Building cardiovascular fitness from scratch using a structured training plan.

## Linked Projects
\`\`\`dataview
TABLE status, deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE goal = this.file.link
SORT deadline ASC
\`\`\`

## Progress Notes
```

---

### 4c. Example Project — `1-projects/Couch to 5K Training Program.md`

```markdown
---
type: project
status: ongoing
priority: high
goal: "[[Run a 5K]]"
area: "[[Health & Fitness]]"
deadline: 2025-09-01
completed_date: 
tags: [project]
created: 2025-01-06
---

# Couch to 5K Training Program

> **SMART Outcome:** "By September 1st, I will have completed all 9 weeks of the C25K program, running 3x per week, as evidenced by a training log with 27 completed sessions."

## Overview
Following the official Couch to 5K program schedule, tracking every run.

---

## ✅ Remaining Tasks
\`\`\`tasks
not done
path includes 1-projects/Couch to 5K Training Program
sort by due
sort by priority
\`\`\`

## ✔️ Completed Tasks
\`\`\`tasks
done
path includes 1-projects/Couch to 5K Training Program
sort by done
\`\`\`

---

## 📎 Notes & References
- [Official C25K App](https://c25kfree.com)

---

## Sample Tasks
- [ ] Week 1 Run 1 — 20 min intervals 📅 2025-01-08 ⏫
- [ ] Buy proper running shoes 📅 2025-01-07 🔼
- [ ] Week 1 Run 2 — 20 min intervals 📅 2025-01-10 🔼
```

---

### 4d. Example Person — `5-notes/Jane Smith.md`

```markdown
---
type: person
phone: "+1 555 0101"
email: "jane@example.com"
title: "Product Manager"
company: "Acme Corp"
tags: [notes/people]
created: 2025-01-06
---

# Jane Smith

## Contact Info
- **Phone:** +1 555 0101
- **Email:** jane@example.com
- **Title:** Product Manager
- **Company:** Acme Corp

---

## Meeting History
\`\`\`dataview
TABLE scheduled AS "Date", location AS "Location"
FROM "5-notes"
WHERE type = "meeting" AND contains(attendees, this.file.link)
SORT scheduled DESC
\`\`\`

## Tasks Mentioning This Person
\`\`\`tasks
not done
description includes Jane Smith
\`\`\`

## Notes & Mentions
\`\`\`dataview
LIST
FROM ""
WHERE contains(file.outlinks, this.file.link) AND type != "meeting"
SORT file.mtime DESC
\`\`\`
```

---

### 4e. Example Meeting — `5-notes/Kickoff Meeting - Couch to 5K.md`

```markdown
---
type: meeting
scheduled: 2025-01-06
location: "Zoom"
tags: [notes/meeting]
attendees:
  - "[[Jane Smith]]"
project: "[[Couch to 5K Training Program]]"
created: 2025-01-06
---

# Kickoff Meeting — Couch to 5K

**Date:** Tuesday, January 6, 2025  
**Location:** Zoom  
**Attendees:** [[Jane Smith]]

---

## Agenda
- Review training schedule
- Set check-in cadence

## Notes
- Jane recommended the Nike Running Club app as a companion
- Check-ins every Sunday via text

## Action Items
- [ ] Download Nike Running Club app 📅 2025-01-07
- [ ] Schedule Week 1 runs in calendar 📅 2025-01-07
```

---

### 4f. Example Fleeting Note — `5-notes/Idea - Morning routine tweak.md`

```markdown
---
type: note
tags: [health, habits]
related: "[[Health & Fitness]]"
created: 2025-01-06
---

# Idea — Morning Routine Tweak

Try moving the 10-minute stretch to *before* coffee instead of after. Anecdotally reduces morning stiffness according to a Tim Ferriss podcast episode.

Process during next Weekly Review → promote to Habit task or discard.
```

**Deliverable:** Confirm all 6 seed files are written with correct frontmatter. Verify that `area`, `goal`, and `attendees` wikilinks resolve correctly (i.e., the linked notes exist).

---

## PHASE 5 — COMMAND CENTER (`START HERE.md`)

**Goal:** Write the vault's primary onboarding and navigation hub at the root.

```markdown
---
type: hub
tags: [hub]
---

# 🧠 Welcome to Your Second Brain

> *"Your mind is for having ideas, not holding them."* — David Allen

This vault is built on the **P.A.R.A. + GTD** framework. Everything you need starts here.

---

## ⚡ Quick Actions

| Action | How |
|--------|-----|
| Open today's plan | Periodic Notes: *Open today's daily note* |
| Create a new task | Type `- [ ]` anywhere in a Project or Area note |
| Capture a fleeting thought | Create a new note in `5-notes/` |
| Create a new project | Duplicate `_templates/tpl-project.md` → move to `1-projects/` |
| Create a new goal | Duplicate `_templates/tpl-goal.md` → move to `2-areas/` |
| Add a contact | Duplicate `_templates/tpl-person.md` → move to `5-notes/` |
| Start a weekly review | Periodic Notes: *Open this week's weekly note* |

---

## 🗂️ Vault Map

| Folder | Purpose |
|--------|---------|
| `0-plan/` | Daily, weekly, monthly, quarterly, yearly planning notes |
| `1-projects/` | Active projects with deadlines |
| `2-areas/` | Life responsibilities + goals |
| `3-resources/` | Reference material and interests |
| `4-archives/` | Completed or inactive items |
| `5-notes/` | Digital inbox: captures, contacts, meetings |
| `_templates/` | Do not edit directly — use Templater |

---

## 🎯 My Active Goals

\`\`\`dataview
TABLE status AS "Status", area AS "Area", target_date AS "Target"
FROM "2-areas"
WHERE type = "goal" AND status = "ongoing"
SORT target_date ASC
\`\`\`

---

## 🚀 Active Projects

\`\`\`dataview
TABLE status AS "Status", deadline AS "Deadline", priority AS "Priority", goal AS "Goal"
FROM "1-projects"
WHERE status = "ongoing"
SORT deadline ASC
\`\`\`

---

## ✅ All Overdue Tasks

\`\`\`tasks
not done
due before today
sort by due
\`\`\`

---

## 🧭 The Vision-to-Action Pipeline

```
Area  →  Goal  →  Project  →  Task
 ↓          ↓          ↓         ↓
Who       Where      What      Today
you are  you're     you're    you do
         going      building  now
```

**Every task you complete is a vote for who you are becoming.**

---

## 📖 First 3 Missions (Start Here)

**Mission 1 — Define Your Areas**
Open `2-areas/` and create one Area note for each domain of your life (Health, Career, Finance, Family, Personal Growth, etc.). Use `_templates/tpl-area.md`.

**Mission 2 — Set One Goal Per Area**
For each Area, create one Goal note. Make it SMART. Link it back to its Area via the `area:` frontmatter property.

**Mission 3 — Launch Your First Project**
Create one Project in `1-projects/`. Link it to a Goal. Write your SMART Outcome. Add 3–5 tasks as checkboxes. Open today's daily note — your tasks will appear automatically.

---

## 🔄 The Weekly Rhythm

| Cadence | What to do |
|---------|-----------|
| **Daily** | Open today's Daily Note. Work through Overdue → Due Today → Ongoing. Journal at end of day. |
| **Weekly (Sunday)** | Run the Weekly Review: Close → Reflect → Plan. Empty the `5-notes/` inbox. |
| **Monthly** | Run Monthly Review. Assess Goal progress. Adjust Project priorities. |
| **Quarterly** | Full Wheel of Life check. Reset Goals if needed. 80/20 analysis. |
| **Yearly** | Year-in-review reflection. Design the next year's vision. |
```

**Deliverable:** Confirm `START HERE.md` is at the vault root and all Dataview queries render without errors (i.e., seed data populates the tables).

---

## PHASE 6 — VALIDATION & SELF-TEST

**Goal:** Run a complete end-to-end smoke test of the vault before declaring it ready.

Execute the following checks in order. Report PASS or FAIL for each:

1. **Folder structure check:** All 9 top-level directories exist (`0-plan`, `1-projects`, `2-areas`, `3-resources`, `4-archives`, `5-notes`, `_templates`, and the 5 subdirs of `0-plan`).

2. **Plugin config check:** `.obsidian/community-plugins.json` lists all 5 plugins. Each plugin's `data.json` file exists.

3. **Template completeness check:** All 12 files exist in `_templates/`. Each file contains valid YAML frontmatter and at least one Templater expression (`<% %>`).

4. **Seed data integrity check:**
   - `[[Health & Fitness]]` resolves from within `Run a 5K.md`
   - `[[Run a 5K]]` resolves from within `Couch to 5K Training Program.md`
   - `[[Jane Smith]]` resolves from within the meeting note
   - The project note's `path includes` query would match itself

5. **Dataview query syntax check:** Open each of the following files and confirm no "Dataview: Error" banners appear (once the plugin is active):
   - `START HERE.md` (3 queries)
   - `2-areas/Health & Fitness.md` (2 queries)
   - `2-areas/Run a 5K.md` (1 query)
   - `1-projects/Couch to 5K Training Program.md` (2 queries)
   - `5-notes/Jane Smith.md` (3 queries)

6. **Tasks query syntax check:** Open `1-projects/Couch to 5K Training Program.md` and confirm the Tasks plugin renders the two task blocks (Remaining and Completed). Confirm the 3 seed tasks appear under "Remaining Tasks."

7. **Daily note creation check:** Trigger Periodic Notes to create today's daily note. Confirm it uses `tpl-daily.md`, lands in `0-plan/daily/`, and the filename matches `YYYY-MM-DD` format.

8. **`START HERE.md` check:** Confirm the Active Goals table returns "Run a 5K" and the Active Projects table returns "Couch to 5K Training Program."

If any check fails, diagnose the root cause, fix it, and re-run only the failed check before proceeding.

---

## COMPLETION CRITERIA

The vault is considered **complete and ready for handoff** when:

- [ ] All 6 phases report success
- [ ] All 8 validation checks pass
- [ ] The file count is: 12 templates + 6 seed notes + 1 `START HERE.md` + plugin configs = **minimum 19 content files**
- [ ] No hardcoded dates appear anywhere outside of seed content files
- [ ] No broken wikilinks exist (`[[]]` with empty or non-existent targets)
- [ ] The vault opens in Obsidian without any error banners

---

## HANDOFF PACKAGE

When complete, output a summary in this exact format:

```
## ✅ Pseudo-ObsiBrain Vault — Build Complete

**Vault location:** [path]
**Files created:** [count]
**Plugins configured:** Tasks, Dataview, Templater, Periodic Notes, Natural Language Dates
**Seed data:** 1 Area, 1 Goal, 1 Project, 3 Tasks, 1 Person, 1 Meeting, 1 Fleeting Note

### First Steps for the User:
1. Open the vault in Obsidian
2. Click "Trust author and enable plugins" when prompted
3. Open START HERE.md
4. Complete Mission 1: Create your Areas
5. Complete Mission 2: Set your Goals
6. Complete Mission 3: Launch your first Project
7. Open today's Daily Note via Periodic Notes

### Known Limitations vs. Paid ObsiBrain:
- No command palette modals for guided note creation (use templates manually)
- No vault self-healing or rename protection
- No Archive Page command (move files manually to 4-archives/)
- No Change Status command (edit frontmatter directly)
- No habit contribution grid visualization
- No one-click update engine
```

---

*Prompt version: 1.0 — Based on publicly documented ObsiBrain v1.2.x architecture.*
*Built for: AI agent Plan mode execution*
*Target plugins: Tasks · Dataview · Templater · Periodic Notes · Natural Language Dates*
