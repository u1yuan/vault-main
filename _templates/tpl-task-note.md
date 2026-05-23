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
const due = await tp.system.prompt("Due date (YYYY-MM-DD, blank for none)", "");
const projectLink = await tp.system.prompt("Project wikilink target (blank for none)", "");
const areaLink = await tp.system.prompt("Area wikilink target (blank for none)", "");
const projectLine = projectLink ? `project: "[[${projectLink}]]"` : `project: `;
const areaLine = areaLink ? `area: "[[${areaLink}]]"` : `area: `;
const dueLine = due ? `due: ${due}` : `due: `;
-%>
---
type: task-note
status: <% status %>
priority: <% priority %>
<% projectLine %>
<% areaLine %>
<% dueLine %>
tags: []
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> One-line context for this task or task cluster.

## Details

## Tasks
- [ ] 

## ✅ Open Tasks in This Note
```tasks
not done
path includes <% tp.file.path(true) %>
sort by due
```
