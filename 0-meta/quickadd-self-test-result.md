---
type: meta
tags: [meta/debug]
created: 2026-05-28
---

# QuickAdd Self Test

Run via **QuickAdd: Self Test** from the command palette.

```json
{
  "timestamp": "2026-05-28T05:17:21.301Z",
  "sessionId": "a33f7d",
  "runId": "self-test",
  "checks": {
    "quickAddApi": {
      "ok": true,
      "hasSuggester": true,
      "hasCheckboxPrompt": true
    },
    "quickaddPlugin": {
      "ok": true,
      "choiceCount": 9
    },
    "templaterPlugin": {
      "ok": true,
      "triggerOnCreate": false,
      "folderTemplates": 0
    },
    "template:_templates/tpl-task-note.md": {
      "ok": true,
      "exists": true
    },
    "template:_templates/tpl-project.md": {
      "ok": true,
      "exists": true
    },
    "template:_templates/tpl-goal.md": {
      "ok": true,
      "exists": true
    },
    "template:_templates/tpl-area.md": {
      "ok": true,
      "exists": true
    },
    "template:_templates/tpl-person.md": {
      "ok": true,
      "exists": true
    },
    "template:_templates/tpl-meeting.md": {
      "ok": true,
      "exists": true
    },
    "template:_templates/tpl-fleeting-note.md": {
      "ok": true,
      "exists": true
    },
    "template:_templates/tpl-cornell.md": {
      "ok": true,
      "exists": true
    },
    "archiveScript": {
      "ok": true,
      "exists": true
    },
    "taskTemplateNoTryCatch": {
      "ok": true,
      "hasConditionalWikilink": true,
      "hasLiteralEmptyWikilink": false
    }
  },
  "errors": []
}
```
