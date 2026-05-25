---
type: dashboard
tags: [dashboard/habits]
---
# Habit Contribution Grid

GitHub-style heatmap driven by completed Tasks plugin entries tagged with `[habitFreq:: daily|weekly|monthly]`.

**Legend:** green = daily · blue = weekly · orange = monthly

```dataviewjs
const trackerData = {
  entries: [],
  separateMonths: true,
  heatmapTitle: "Habit completions (365 days)",
  heatmapSubtitle: "Completed tasks with habitFreq inline field",
  colorScheme: {
    paletteName: "default"
  }
};

const freqOf = (t) => {
  const raw = t.habitFreq ?? t["habit-freq"];
  if (typeof raw === "string") {
    const v = raw.toLowerCase();
    if (["daily", "weekly", "monthly"].includes(v)) return v;
  }
  const m = t.text?.match(/\[habitFreq::\s*(daily|weekly|monthly)\]/i);
  return m ? m[1].toLowerCase() : null;
};

// Map frequency to intensity (1-4)
const freqWeight = { daily: 1, weekly: 2, monthly: 4 };

const buckets = new Map(); // date -> { totalIntensity: number, freqs: Set<string> }

// Only scan pages that might have tasks
for (const page of dv.pages('""').where(p => p.file.tasks.length > 0)) {
  for (const t of page.file.tasks) {
    if (!t.completed || !t.completion) continue;
    const freq = freqOf(t);
    if (!freq) continue;

    const date = t.completion.toFormat("yyyy-MM-dd");
    const bucket = buckets.get(date) ?? { intensity: 0, freqs: new Set() };
    bucket.intensity += freqWeight[freq] ?? 1;
    bucket.freqs.add(freq);
    buckets.set(date, bucket);
  }
}

for (const [date, data] of buckets.entries()) {
  trackerData.entries.push({
    date,
    intensity: Math.min(data.intensity, 4), // Cap at max palette level
    content: Array.from(data.freqs).map(f => f[0].toUpperCase()).join("")
  });
}

if (typeof renderHeatmapTracker === "function") {
  renderHeatmapTracker(this.container, trackerData);
} else {
  dv.paragraph("Heatmap Tracker plugin is not loaded (renderHeatmapTracker missing).");
}
```

---

## Completion log (fallback table)

```dataview
TABLE WITHOUT ID
  task.completion AS "Completed",
  task.text AS "Task",
  choice(contains(task.text, "daily"), "daily", choice(contains(task.text, "weekly"), "weekly", choice(contains(task.text, "monthly"), "monthly", ""))) AS "Frequency"
FROM ""
FLATTEN file.tasks AS task
WHERE task.completed AND task.completion AND contains(task.text, "habitFreq::")
SORT task.completion DESC
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
