---
name: Thesis Sprint Curriculum
overview: "A 2-week-per-sprint learning path mapped to your thesis prerequisites map: four shared foundation sprints, then parallel NLP and Energy project tracks (one project per sprint), ending in track capstones. Complete one track for your thesis; the other fork is optional depth."
todos:
  - id: phase1-foundation
    content: "Sprints 1–4: Python DS, ML eval, reproducible workflow, mini lit review"
    status: pending
  - id: phase2-p1-math
    content: "Sprints 5N, 5E, 6: Transformers, time series diagnostics, linear algebra/probability"
    status: pending
  - id: phase3n-nlp
    content: "Sprints 7N–11N: Preprocessing, HF fine-tune, socio/ethics, viz/explain, NLP capstone"
    status: pending
  - id: phase3e-energy
    content: "Sprints 7E–11E: SARIMAX, features/trees, LSTM, domain/DM/viz, energy capstone"
    status: pending
  - id: choose-thesis-fork
    content: After Sprint 6, commit to one fork (NLP or Energy) for S7–S11; treat other fork as optional
    status: pending
isProject: false
type: curriculum
tags: [thesis, sprint-curriculum]
created: 2026-05-23
aliases:
  - Thesis Prerequisites Sprint Curriculum
---

# Thesis Prerequisites Sprint Curriculum

Based on the [Thesis Prerequisites Map](file:///C:/Users/yuanw/Downloads/thesis_prerequisites_map.html):

| Priority | Meaning |
| -------- | ------- |
| **P1** | Thesis-blocking |
| **P2** | Defence-critical |
| **P3** | Strengthens framing |
| **P4** | Publishable polish |

> [!info] Pace & paths
> **Pace:** 2 weeks per sprint (~8–10 hrs/week).
>
> **Thesis path:** Do **Phase 1 + Phase 2 + one fork (Phase 3N or 3E) + one capstone** (~14 sprints, ~28 weeks).
>
> **Full "both tracks" path:** Do everything below (~22 sprints, ~44 weeks).

---

## Curriculum map

```mermaid
flowchart TD
  subgraph phase1 [Phase1_Foundation_4sprints]
    S1[S1_Python_DS]
    S2[S2_ML_Eval]
    S3[S3_Repro_Workflow]
    S4[S4_Lit_Review]
    S1 --> S2 --> S3 --> S4
  end
  subgraph phase2 [Phase2_Track_P1_2sprints]
    S5N[S5N_Transformers]
    S5E[S5E_TimeSeries]
    S4 --> S5N
    S4 --> S5E
  end
  subgraph phase2b [Phase2b_Math_1sprint]
    S6[S6_Linear_Prob]
    S5N --> S6
    S5E --> S6
  end
  subgraph nlp [Phase3N_NLP_5sprints]
    S7N[S7N_Preprocess]
    S8N[S8N_HF_Finetune]
    S9N[S9N_Socio_Ethics]
    S10N[S10N_Viz_Explain]
    S11N[S11N_Capstone]
    S6 --> S7N --> S8N --> S9N --> S10N --> S11N
  end
  subgraph energy [Phase3E_Energy_5sprints]
    S7E[S7E_SARIMAX]
    S8E[S8E_Features_Trees]
    S9E[S9E_LSTM]
    S10E[S10E_Domain_Viz]
    S11E[S11E_Capstone]
    S6 --> S7E --> S8E --> S9E --> S10E --> S11E
  end
```

---

## Phase progress

- [ ] **Phase 1 — Foundation** (Sprints 1–4): Python DS, ML eval, reproducible workflow, mini lit review → [[Phase 1 — Foundation]]
- [ ] **Phase 2 — Track P1 + Math** (Sprints 5N, 5E, 6): Transformers, time series diagnostics, linear algebra/probability → [[Phase 2 — Track P1 and Math]]
- [ ] **Phase 3N — NLP track** (Sprints 7N–11N): Preprocessing, HF fine-tune, socio/ethics, viz/explain, NLP capstone → [[Phase 3N — NLP Track]]
- [ ] **Phase 3E — Energy track** (Sprints 7E–11E): SARIMAX, features/trees, LSTM, domain/DM/viz, energy capstone → [[Phase 3E — Energy Track]]
- [ ] **Choose thesis fork** after Sprint 6: commit to NLP *or* Energy for S7–S11; treat the other fork as optional depth

---

## Quick navigation

| Phase | Overview | Sprints |
| ----- | -------- | ------- |
| Phase 1 | [[Phase 1 — Foundation]] | [[Sprint 1 — Python for Data Science|S1]] → [[Sprint 2 — ML Fundamentals and Evaluation|S2]] → [[Sprint 3 — Git and Reproducible Workflow|S3]] → [[Sprint 4 — Academic Writing and Lit Review|S4]] |
| Phase 2 | [[Phase 2 — Track P1 and Math]] | [[Sprint 5N — Transformers and Attention|S5N]] · [[Sprint 5E — Time Series Foundations|S5E]] → [[Sprint 6 — Linear Algebra and Probability|S6]] |
| Phase 3N | [[Phase 3N — NLP Track]] | [[Sprint 7N — NLP Preprocessing Pipeline|S7N]] → [[Sprint 8N — HuggingFace Trainer and Imbalanced Metrics|S8N]] → [[Sprint 9N — Sociolinguistics and Research Ethics|S9N]] → [[Sprint 10N — Visualization and Explainability|S10N]] → [[Sprint 11N — NLP Capstone|S11N]] |
| Phase 3E | [[Phase 3E — Energy Track]] | [[Sprint 7E — SARIMAX Baseline|S7E]] → [[Sprint 8E — Feature Engineering and Tree Models|S8E]] → [[Sprint 9E — LSTM Forecasting|S9E]] → [[Sprint 10E — Domain Knowledge Viz and Significance|S10E]] → [[Sprint 11E — Energy Capstone|S11E]] |

---

## Reference notes

- [[How Each Sprint Works]] — weekly rhythm and exit criteria
- [[Cross-cutting Habits]] — habits tied to every sprint
- [[Recommended Schedule]] — week-by-week calendar
- [[Skill Coverage Checklist]] — P1–P4 skill → sprint mapping
- [[Week 0 Setup]] — optional artifacts before Sprint 1

---

## All sprints

### Phase 1 — Shared foundation (P1 both tracks)

1. [[Sprint 1 — Python for Data Science]]
2. [[Sprint 2 — ML Fundamentals and Evaluation]]
3. [[Sprint 3 — Git and Reproducible Workflow]]
4. [[Sprint 4 — Academic Writing and Lit Review]]

### Phase 2 — Track P1 + shared P2 math

5. [[Sprint 5N — Transformers and Attention]] (NLP P1)
6. [[Sprint 5E — Time Series Foundations]] (Energy P1)
7. [[Sprint 6 — Linear Algebra and Probability]] (both tracks P2)

### Phase 3N — NLP track (P2–P4)

8. [[Sprint 7N — NLP Preprocessing Pipeline]]
9. [[Sprint 8N — HuggingFace Trainer and Imbalanced Metrics]]
10. [[Sprint 9N — Sociolinguistics and Research Ethics]]
11. [[Sprint 10N — Visualization and Explainability]]
12. [[Sprint 11N — NLP Capstone]]

### Phase 3E — Energy track (P2–P4)

8. [[Sprint 7E — SARIMAX Baseline]]
9. [[Sprint 8E — Feature Engineering and Tree Models]]
10. [[Sprint 9E — LSTM Forecasting]]
11. [[Sprint 10E — Domain Knowledge Viz and Significance]]
12. [[Sprint 11E — Energy Capstone]]
