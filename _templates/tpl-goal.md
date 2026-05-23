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
```dataview
TABLE status, deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE goal = this.file.link
SORT deadline ASC
```

## Progress Notes
