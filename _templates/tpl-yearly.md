---
type: yearly
year: <% tp.date.now("YYYY") %>
tags: [plan/yearly]
---

# 🌟 <% tp.date.now("YYYY") %> — Yearly Review & Vision

---

## 🧹 CLOSE

- [x] Complete quarterly close ✅ 2026-05-25
- [x] Archive the full previous year's daily/weekly notes (optional) ✅ 2026-05-25
- [x] Back up the vault ✅ 2026-05-25

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

```dataview
TABLE completed_date AS "Completed"
FROM "1-projects"
WHERE type = "project" AND completed_date >= date("<% tp.date.now("YYYY") %>-01-01")
SORT completed_date DESC
```
