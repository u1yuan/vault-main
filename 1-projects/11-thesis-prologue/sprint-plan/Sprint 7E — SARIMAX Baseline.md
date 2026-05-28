---
type: sprint
sprint: 7E
phase: "[[Phase 3E — Energy Track]]"
tags: [thesis, sprint-curriculum, energy]
priority: P2
status: pending
created: 2026-05-23
---

# Sprint 7E — SARIMAX Baseline

← [[Phase 3E — Energy Track]] · Next → [[Sprint 8E — Feature Engineering and Tree Models]]

**Maps to:** P2 — SARIMAX and classical forecasting

## Project: "Defensible SARIMA baseline"

On hourly load data: fit `SARIMAX` with seasonal period **s=24** (and try s=168); use AIC/BIC; residual diagnostics (Ljung–Box); plot forecast vs holdout. Write one paragraph per term in (p,d,q)(P,D,Q,s).

## Deliverables

- `models/sarimax_baseline.pkl`
- Residual plots
- Model selection table

## Resources

## Resources

### 🎓 External Curriculum
From [[Thesis Learning Resources Index#Sprint 7E: SARIMAX Baseline]]:
- **DataCamp:** [ARIMA Models in Python](https://www.datacamp.com/courses/arima-models-in-python) — Detailed focus on `SARIMAX` and exogenous variables.
- **DataCamp:** [Time Series Analysis in Python](https://www.datacamp.com/courses/time-series-analysis-in-python) — Foundation for statistical forecasting.
- **LinkedIn Learning:** *Python for Time Series Forecasting* (Jesús López) — Practical SARIMA/SARIMAX pipeline.

### 📚 Reference
- Statsmodels documentation for `SARIMAX`
- [Forecasting: Principles and Practice (Hyndman & Athanasopoulos) ch. 9](https://otexts.com/fpp3/arima.html)

## Sprint checklist

- [ ] Week 1: concept note + SARIMAX experiments
- [ ] Week 2: baseline model + tagged release `sprint-7E`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
