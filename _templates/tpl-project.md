<%*
const status = await tp.system.suggester(
  ["ongoing", "on hold", "completed", "canceled"],
  ["ongoing", "on hold", "completed", "canceled"],
  false,
  "Status"
);
const priority = await tp.system.suggester(
  ["high", "medium", "low"],
  ["high", "medium", "low"],
  false,
  "Priority"
);
const deadline = await tp.system.prompt("Deadline (YYYY-MM-DD, blank for none)", "");
const goalLink = await tp.system.prompt("Goal wikilink target (e.g. Run a 5K, blank for none)", "");
const areaLink = await tp.system.prompt("Area wikilink target (e.g. Health & Fitness, blank for none)", "");
const goalTrim = (goalLink || "").trim();
const areaTrim = (areaLink || "").trim();
const goalLine = goalTrim ? `goal: "[[${goalTrim}]]"` : `goal: `;
const areaLine = areaTrim ? `area: "[[${areaTrim}]]"` : `area: `;
const deadlineLine = deadline ? `deadline: ${deadline}` : `deadline: `;
-%>
---
type: project
status: <% status %>
priority: <% priority %>
<% goalLine %>
<% areaLine %>
<% deadlineLine %>
completed_date: 
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> **SMART Outcome:** *(Specific, Measurable, Achievable, Relevant, Time-bound)*
> "By [deadline], I will have [specific result] as evidenced by [measurable proof]."

## Overview

---

## ✅ Remaining Tasks
```tasks
not done
path includes <% tp.file.path(true) %>
sort by due
sort by priority
```

## ✔️ Completed Tasks
```tasks
done
path includes <% tp.file.path(true) %>
sort by done
```

---

## 📎 Notes & References
