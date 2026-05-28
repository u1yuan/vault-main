---
type: sprint
sprint: 2
phase: "[[Phase 1 — Foundation]]"
tags: [thesis, sprint-curriculum]
priority: P1
status: pending
created: 2026-05-23
---

# Sprint 2 — ML Fundamentals and Evaluation

← [[Sprint 1 — Python for Data Science]] · [[Phase 1 — Foundation]] · Next → [[Sprint 3 — Git and Reproducible Workflow]]

**Maps to:** P1 — ML fundamentals (both tracks); previews NLP imbalanced + Energy regression pitfalls

## Project: "Two metrics stories"

Same repo, two tasks:

1. **Imbalanced classification** (e.g. [Credit Card Fraud](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud) or sklearn `fetch_covtype` subsampled): k-fold CV, learning curves, L1/L2 comparison, **why accuracy fails**, report precision/recall/F1/ROC-AUC.
2. **Regression with small targets** (synthetic or energy-like series): RMSE/MAE/**MAPE**; document **when MAPE breaks** near zero.

## Deliverables

- `reports/sprint2_defence.md`
- Validation curve plots
- Written bias–variance paragraph tied to your plots

## Resources

## Resources

### 🎓 External Curriculum
From [[Thesis Learning Resources Index#Sprint 2: ML Fundamentals and Evaluation]]:
- **DataCamp:** [Supervised Learning with scikit-learn](https://www.datacamp.com/courses/supervised-learning-with-scikit-learn) — Core API and Pipelines.
- **DataCamp:** [Model Validation in Python](https://www.datacamp.com/courses/model-validation-in-python) — Cross-validation and hyperparameter tuning.
- **LinkedIn Learning:** *Evaluating and Validating Machine Learning Models* — Precision/Recall/F1 and diagnostic plots.
- **LinkedIn Learning:** *Machine Learning and AI Foundations: Classification Modeling* — Theoretical depth on classifiers.

### 📚 Reference
- *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* (Geron)
- Scikit-learn User Guide (Section 3: Model Evaluation)

## Sprint checklist

- [ ] Week 1: concept note + minimal notebooks
- [ ] Week 2: project build + tagged release `sprint-2`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
