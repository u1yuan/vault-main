---
type: area
tags:
  - FIT/ACM
created: 2026-05-25
---
# Overview

> One sentence describing this area of responsibility.

## Overview

## Active Goals
```dataview
TABLE status, target_date AS "Target"
FROM "2-areas"
WHERE type = "goal" AND area = this.file.link
SORT target_date ASC
```

## Active Projects
```dataview
TABLE status, deadline AS "Deadline", priority AS "Priority"
FROM "1-projects"
WHERE status = "ongoing" AND area = this.file.link
SORT deadline ASC
```

## Notes & Resources
