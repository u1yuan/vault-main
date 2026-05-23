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
  colors: {
    daily: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    weekly: ["#ebedf0", "#9ec5fe", "#388bfd", "#0969da", "#0550ae"],
    monthly: ["#ebedf0", "#ffdfba", "#ffa657", "#fb8500", "#bc4b00"]
  }
};

const freqOf = (t) => {
  const m = t.text.match(/\[habitFreq::\s*(daily|weekly|monthly)\]/i);
  return m ? m[1].toLowerCase() : null;
};

const buckets = new Map();

for (const page of dv.pages()) {
  for (const t of page.file.tasks) {
    if (!t.completed || !t.completion) continue;
    const freq = freqOf(t);
    if (!freq) continue;
    const date = t.completion.toFormat("yyyy-MM-dd");
    const key = `${date}|${freq}`;
    buckets.set(key, (buckets.get(key) ?? 0) + 1);
  }
}

for (const [key, count] of buckets.entries()) {
  const [date, freq] = key.split("|");
  trackerData.entries.push({
    date,
    intensity: count,
    color: freq,
    content: freq[0].toUpperCase()
  });
}

renderHeatmapTracker(this.container, trackerData);
```

---

## Completion log (fallback table)

```dataview
TABLE WITHOUT ID
  completion AS "Completed",
  text AS "Task",
  choice(contains(text, "daily"), "daily", choice(contains(text, "weekly"), "weekly", choice(contains(text, "monthly"), "monthly", ""))) AS "Frequency"
FROM ""
FLATTEN file.tasks AS task
WHERE task.completed AND task.completion AND contains(task.text, "habitFreq::")
SORT completion DESC
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
