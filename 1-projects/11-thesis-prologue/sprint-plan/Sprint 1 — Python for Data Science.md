---
type: sprint
sprint: 1
phase: "[[Phase 1 — Foundation]]"
tags: [thesis, sprint-curriculum]
priority: P1
status: pending
created: 2026-05-23
---

# Sprint 1 — Python for Data Science

← [[Phase 1 — Foundation]] · Next → [[Sprint 2 — ML Fundamentals and Evaluation]]

**Maps to:** P1 — Python for data science (both tracks)

## Project: "Messy CSV to ML matrix"

Ingest a deliberately messy public dataset (e.g. [UCI Adult](https://archive.ics.uci.edu/ml/datasets/adult) or [NYC taxi sample](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page)): handle missing values, dtypes, duplicates, `groupby`/`pivot`, optional `resample` on a datetime column, train/test split, sklearn `Pipeline` (imputer + scaler + model).

## Deliverables

- `notebooks/01_eda.ipynb`
- `src/data.py`
- Baseline logistic regression + random forest
- Parity plot / feature importance chart

## Resources

- *Python for Data Analysis* (McKinney)
- pandas/sklearn docs

## Sprint checklist

- [ ] Week 1: concept note + minimal notebooks
- [ ] Week 2: project build + tagged release `sprint-1`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
