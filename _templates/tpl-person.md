<%*
const phone = await tp.system.prompt("Phone", "");
const email = await tp.system.prompt("Email", "");
const title = await tp.system.prompt("Title", "");
const company = await tp.system.prompt("Company", "");
-%>
---
type: person
phone: <% phone %>
email: <% email %>
title: <% title %>
company: <% company %>
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
```dataview
TABLE scheduled AS "Date", location AS "Location"
FROM "5-notes"
WHERE type = "meeting" AND contains(attendees, this.file.link)
SORT scheduled DESC
```

## Tasks Mentioning This Person
```tasks
not done
description includes <% tp.file.title %>
```

## Notes & Mentions
```dataview
LIST
FROM ""
WHERE contains(file.outlinks, this.file.link) AND type != "meeting"
SORT file.mtime DESC
```
