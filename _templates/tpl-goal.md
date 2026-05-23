<%*
const status = await tp.system.suggester(
  ["ongoing", "on hold", "completed", "canceled"],
  ["ongoing", "on hold", "completed", "canceled"],
  false,
  "Status"
);
const areaLink = await tp.system.prompt("Area wikilink target (blank for none)", "");
const targetDate = await tp.system.prompt("Target date (YYYY-MM-DD, blank for none)", "");
const areaTrim = (areaLink || "").trim();
const areaLine = areaTrim ? `area: "[[${areaTrim}]]"` : `area: `;
const targetDateLine = targetDate ? `target_date: ${targetDate}` : `target_date: `;
-%>
---
type: goal
status: <% status %>
<% areaLine %>
<% targetDateLine %>
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
