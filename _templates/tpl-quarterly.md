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

```dataview
TABLE status, target_date AS "Target", area AS "Area"
FROM "2-areas"
WHERE type = "goal"
SORT status ASC, target_date ASC
```
