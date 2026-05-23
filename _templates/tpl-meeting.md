<%*
const location = await tp.system.prompt("Location", "");
const attendeesRaw = await tp.system.prompt("Attendees (comma-separated note names)", "");
const projectLink = await tp.system.prompt("Project wikilink target (blank for none)", "");
const locationTrim = (location || "").trim();
const projectTrim = (projectLink || "").trim();
const locationLine = locationTrim ? `location: ${locationTrim}` : `location: `;
const projectLine = projectTrim ? `project: "[[${projectTrim}]]"` : `project: `;
const attendeesBlock = attendeesRaw
  ? `attendees:\n${attendeesRaw.split(",").map((a) => `  - "[[${a.trim()}]]"`).join("\n")}`
  : `attendees: []`;
-%>
---
type: meeting
scheduled: <% tp.date.now("YYYY-MM-DD") %>
<% locationLine %>
tags: [notes/meeting]
<% attendeesBlock %>
<% projectLine %>
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

**Date:** <% tp.date.now("dddd, MMMM D, YYYY") %>  
**Location:** `= this.location`  
**Attendees:** `= this.attendees`

---

## Agenda

## Notes

## Action Items
- [ ] 
