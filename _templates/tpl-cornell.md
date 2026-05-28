<%*
const projectLink = await tp.system.prompt("Project wikilink target (blank for none)", "");
const areaLink = await tp.system.prompt("Area wikilink target (blank for none)", "");
const goalLink = await tp.system.prompt("Goal wikilink target (blank for none)", "");

const projectTrim = (projectLink || "").trim();
const areaTrim = (areaLink || "").trim();
const goalTrim = (goalLink || "").trim();

const projectLine = projectTrim ? `project: "[[${projectTrim}]]"` : `project: `;
const areaLine = areaTrim ? `area: "[[${areaTrim}]]"` : `area: `;
const goalLine = goalTrim ? `goal: "[[${goalTrim}]]"` : `goal: `;
-%>
---
type: cornell
cssclasses: [cornell-note]
<% projectLine %>
<% areaLine %>
<% goalLine %>
tags: [notes/cornell]
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

> [!tip] How to use this template
> 1. Use **Level 3 Headings (`###`)** for your cues/questions on the left.
> 2. Write your actual notes directly underneath the headings.
> 3. Use the **Summary** section at the bottom for your final synthesis.

---

### Key Question / Cue
This is the notes area. You can write naturally here. 
- Use bullets
- Add images
- Write code blocks

### Another Concept
The CSS snippet handles the positioning automatically for every H3 heading.

---

<div class="summary-section">

## Summary
Summarize the main points of the note here.
</div>
