---
type: daily
date: <% tp.date.now("YYYY-MM-DD") %>
tags: [plan/daily]
---

# ☀️ <% tp.date.now("dddd, MMMM D, YYYY") %>

← [[<% tp.date.now("YYYY-MM-DD", -1) %>]] &nbsp;&nbsp; [[<% tp.date.now("YYYY-MM-DD", 1) %>]] →

---

## ⚠️ Overdue

```tasks
not done
due before today
sort by due
short mode
```

---

## 🎯 Due Today

```tasks
not done
due on today
sort by priority
short mode
```

---

## 📅 Scheduled Today

```tasks
not done
scheduled on today
sort by priority
short mode
```

---

## 🔄 Ongoing (No Due Date)

```tasks
not done
no due date
not done
sort by created
limit 10
short mode
```

---

## 🤝 Meetings Today

```dataview
TABLE location AS "Where", attendees AS "Who"
FROM "5-notes"
WHERE type = "meeting" AND scheduled = date("<% tp.date.now("YYYY-MM-DD") %>")
```

---

## 📊 Active Projects Snapshot

```dataview
TABLE status AS "Status", deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE status = "ongoing"
SORT deadline ASC
```

---

## 📓 Daily Journal

**🏆 What are my 3 priorities for today?**
1. 
2. 
3. 

**🌅 What would make today a success?**


**🙏 What am I grateful for?**


**🌙 End-of-day reflection — What did I actually accomplish?**

