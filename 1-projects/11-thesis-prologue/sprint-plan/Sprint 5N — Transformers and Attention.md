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

## Resources

### 🎓 External Curriculum
From [[Thesis Learning Resources Index#Sprint 5N: Transformers and Attention (NLP)]]:
- **DataCamp:** [Hugging Face Fundamentals (Track)](https://www.datacamp.com/tracks/hugging-face-fundamentals) — The "Gold Standard" for HF pipelines.
- **LinkedIn Learning:** *Transformers: Text Classification for NLP Using BERT* — Deep dive into Multi-Head Attention math.
- **DataCamp:** [Introduction to LLMs in Python](https://www.datacamp.com/courses/introduction-to-llms-in-python) — Conceptual architecture.

### 📚 Reference
- ["Attention is All You Need" (Vaswani et al.)](https://arxiv.org/abs/1706.03762)
- [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/)

## Sprint checklist

- [ ] Week 1: concept note + NumPy attention + diagrams
- [ ] Week 2: DistilBERT fine-tune + tagged release `sprint-5N`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
