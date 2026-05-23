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

```dataview
TABLE status AS "Status", target_date AS "Target", area AS "Area"
FROM "2-areas"
WHERE type = "goal" AND (status = "ongoing" OR status = "on hold")
SORT target_date ASC
```

---

## 📈 Completed This Month

```dataview
TABLE completed_date AS "Completed"
FROM "1-projects"
WHERE completed_date >= date("<% tp.date.now("YYYY-MM-01") %>")
SORT completed_date DESC
```
