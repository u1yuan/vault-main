---
type: person
phone: +1 555 0101
email: jane@example.com
title: Product Manager
company: Acme Corp
tags:
  - notes/people
created: 2025-01-06
status: completed
---

# Jane Smith

## Contact Info
- **Phone:** +1 555 0101
- **Email:** jane@example.com
- **Title:** Product Manager
- **Company:** Acme Corp

---

## Meeting History
```dataview
TABLE scheduled AS "Date", location AS "Location"
FROM "6-notes"
WHERE type = "meeting" AND contains(attendees, this.file.link)
SORT scheduled DESC
```

## Tasks Mentioning This Person
```tasks
not done
description includes Jane Smith
```

## Notes & Mentions
```dataview
LIST
FROM ""
WHERE contains(file.outlinks, this.file.link) AND type != "meeting"
SORT file.mtime DESC
```
