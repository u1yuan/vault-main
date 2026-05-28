---
type: sprint
sprint: 5E
phase: "[[Phase 2 — Track P1 and Math]]"
tags: [thesis, sprint-curriculum, energy]
priority: P1
status: pending
created: 2026-05-23
---

# Sprint 5E — Time Series Foundations

← [[Phase 2 — Track P1 and Math]] · Next → [[Sprint 6 — Linear Algebra and Probability]]

**Maps to:** P1 — Stationarity, seasonality, autocorrelation (Energy track)

## Project: "Diagnostics before forecasting"

Use **hourly electricity-style data** (start with [PJM hourly energy](https://www.kaggle.com/datasets/robikakler/pjm-hourly-energy-consumption) or Australian ELEC; later swap in Philippine/WESM when ready): ADF/KPSS, ACF/PACF, STL decomposition, lag feature prototypes, differencing experiments.

## Defence sheet must answer

- What is a unit root?
- How do you read ACF vs PACF for AR/MA intuition?
- Why might Philippine load show S=24 and S=168?

## Resources

## Resources

### 🎓 External Curriculum
From [[Thesis Learning Resources Index#Sprint 5E: Time Series Foundations (Energy)]]:
- **DataCamp:** [ARIMA Models in Python](https://www.datacamp.com/courses/arima-models-in-python) — Critical for SARIMAX baselines.
- **DataCamp:** [Time Series Analysis in Python](https://www.datacamp.com/courses/time-series-analysis-in-python) — ACF/PACF and stationarity.
- **LinkedIn Learning:** *Python for Time Series Forecasting* (Jesús López) — Full pipeline walkthrough.

### 📚 Reference
- [Forecasting: Principles and Practice (Hyndman & Athanasopoulos)](https://otexts.com/fpp3/)
- Statsmodels documentation for `SARIMAX`

## Sprint checklist

- [ ] Week 1: concept note + diagnostic notebooks
- [ ] Week 2: full diagnostics project + tagged release `sprint-5E`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
