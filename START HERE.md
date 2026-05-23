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

```dataview
TABLE status AS "Status", area AS "Area", target_date AS "Target"
FROM "2-areas"
WHERE type = "goal" AND status = "ongoing"
SORT target_date ASC
```

---

## 🚀 Active Projects

```dataview
TABLE status AS "Status", deadline AS "Deadline", priority AS "Priority", goal AS "Goal"
FROM "1-projects"
WHERE status = "ongoing"
SORT deadline ASC
```

---

## ✅ All Overdue Tasks

```tasks
not done
due before today
sort by due
```

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
