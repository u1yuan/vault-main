<%*
const related = await tp.system.prompt("Related note or topic (blank for none)", "");
-%>
---
type: note
tags: []
related: <% related %>
created: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>
