---
type: dashboard
tags: [dashboard/activity]
---
# Vault Activity

GitHub-style heatmap tracking all file creations and modifications in the vault.

```dataviewjs
const trackerData = {
  entries: [],
  separateMonths: true,
  heatmapTitle: "Vault Activity (365 days)",
  heatmapSubtitle: "File creations and modifications",
  colorScheme: {
    paletteName: "default"
  }
};

const buckets = new Map(); // date -> intensity

for (const page of dv.pages('""')) {
  // Track creation
  if (page.file.cday) {
    const cdate = page.file.cday.toFormat("yyyy-MM-dd");
    buckets.set(cdate, (buckets.get(cdate) || 0) + 1);
  }
  // Track modification
  if (page.file.mday) {
    const mdate = page.file.mday.toFormat("yyyy-MM-dd");
    buckets.set(mdate, (buckets.get(mdate) || 0) + 1);
  }
}

for (const [date, intensity] of buckets.entries()) {
  trackerData.entries.push({
    date,
    intensity: Math.min(intensity, 4), // Cap at max palette level
    content: ""
  });
}

if (typeof renderHeatmapTracker === "function") {
  renderHeatmapTracker(this.container, trackerData);
} else {
  dv.paragraph("Heatmap Tracker plugin is not loaded (renderHeatmapTracker missing).");
}
```

---

## Recent Activity (Last 7 Days)

```dataview
TABLE WITHOUT ID
  file.link AS "Note",
  file.mtime AS "Last Modified",
  file.ctime AS "Created"
FROM ""
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
LIMIT 15
```

---

## Unresolved frontmatter links (Weekly Review)

Notes with broken outbound links:

```dataview
TABLE length(filter(file.outlinks, (l) => !l.path)) AS "Broken links"
FROM ""
WHERE length(filter(file.outlinks, (l) => !l.path)) > 0
SORT file.mtime DESC
```
