---
type: area
tags: [area]
created: 2025-01-01
---

# Health & Fitness

> Maintain the physical and mental energy needed to perform at my best across all areas of life.

## Overview
This area covers exercise, nutrition, sleep, and mental wellness habits.

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
