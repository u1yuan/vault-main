---
type: sprint
sprint: 8E
phase: "[[Phase 3E — Energy Track]]"
tags: [thesis, sprint-curriculum, energy]
priority: P2
status: pending
created: 2026-05-23
---

# Sprint 8E — Feature Engineering and Tree Models

← [[Sprint 7E — SARIMAX Baseline]] · [[Phase 3E — Energy Track]] · Next → [[Sprint 9E — LSTM Forecasting]]

**Maps to:** P2 — Feature engineering for time series

## Project: "Engineered features beat naive"

Build feature matrix: lags (t-1, t-24, t-168), rolling means/std, cyclical hour encoding ($\sin$/$\cos$), calendar flags. Train **XGBoost or LightGBM** with time-based split (no leakage). Compare to naive seasonal naive + SARIMAX from [[Sprint 7E — SARIMAX Baseline|Sprint 7E]] (RMSE/MAE/MAPE).

**Optional domain hooks:** placeholder columns for typhoon flag / ENSO phase (document data sources for thesis).

## Resources

- Zheng & Casari *Feature Engineering for ML*
- Kaggle TS tutorials

## Sprint checklist

- [ ] Week 1: concept note + feature matrix
- [ ] Week 2: tree model + comparison + tagged release `sprint-8E`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
