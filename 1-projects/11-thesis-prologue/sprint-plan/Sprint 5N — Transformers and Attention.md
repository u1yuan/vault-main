---
type: sprint
sprint: 5N
phase: "[[Phase 2 — Track P1 and Math]]"
tags: [thesis, sprint-curriculum, nlp]
priority: P1
status: pending
created: 2026-05-23
---

# Sprint 5N — Transformers and Attention

← [[Phase 2 — Track P1 and Math]] · Next → [[Sprint 6 — Linear Algebra and Probability]]

**Maps to:** P1 — Transformers (NLP track)

## Project: "Attention you can explain"

1. Implement scaled dot-product attention in NumPy on toy sequences
2. Diagram Q/K/V and multi-head attention in `docs/transformer_defence.md`
3. Fine-tune **DistilBERT** on a small text classification set (e.g. [SMS Spam](https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset)) using HuggingFace — compare to sklearn baseline

## Defence sheet must answer

- What is attention?
- Encoder-only vs decoder-only?
- Why RoBERTa > BERT (conceptually)?
- What does BPE tokenisation do for low-resource languages?

## Resources

- Jay Alammar *Illustrated Transformer*
- HuggingFace NLP Course ch. 1–4
- Vaswani et al. 2017

## Sprint checklist

- [ ] Week 1: concept note + NumPy attention + diagrams
- [ ] Week 2: DistilBERT fine-tune + tagged release `sprint-5N`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
