---
type: weekly
week: <% tp.date.now("YYYY-[W]WW") %>
tags: [plan/weekly]
---

# 📅 Week <% tp.date.now("[W]WW, YYYY") %>

**<% tp.date.now("MMMM D", 0, "YYYY-MM-DD", "isoWeek") %> – <% tp.date.now("MMMM D", 6, "YYYY-MM-DD", "isoWeek") %>**

---

## 🧹 CLOSE — Clean Sweep

- [x] Process and empty `5-notes/` inbox ✅ 2026-05-25
- [x] Archive completed projects (move to `4-archives/` or run **Archive (recursive)**) ✅ 2026-05-25
- [x] Check [[Vault Activity#Unresolved frontmatter links (Weekly Review)|unresolved frontmatter links]] ✅ 2026-05-25
- [x] Clear physical desk and digital downloads folder ✅ 2026-05-25
- [x] Review and close open browser tabs ✅ 2026-05-25

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

```dataview
TABLE status AS "Status", deadline AS "Deadline", priority AS "Priority", goal AS "Goal"
FROM "1-projects"
WHERE status = "ongoing" OR status = "on hold"
SORT deadline ASC
```

---

## ✅ All Overdue Tasks (Clear Before Monday)

```tasks
not done
due before today
sort by due
```
