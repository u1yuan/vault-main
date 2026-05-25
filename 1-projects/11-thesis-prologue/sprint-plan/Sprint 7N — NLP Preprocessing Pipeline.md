---
type: sprint
sprint: 7N
phase: "[[Phase 3N — NLP Track]]"
tags: [thesis, sprint-curriculum, nlp]
priority: P2
status: pending
created: 2026-05-23
---

# Sprint 7N — NLP Preprocessing Pipeline

← [[Phase 3N — NLP Track]] · Next → [[Sprint 8N — HuggingFace Trainer and Imbalanced Metrics]]

**Maps to:** P2 — NLP preprocessing

## Project: "Taglish-ready cleaner"

Build a preprocessing module on **Filipino/Taglish text** (public sets e.g. [Hatespeech Filipino](https://huggingface.co/datasets) or TLUnified-style samples): language detection per sentence, emoji normalisation (keep semantic emojis), selective lowercasing, HuggingFace `AutoTokenizer` inspection (vocab, subwords). Document **when not to lowercase**.

## Deliverables

- `src/preprocess.py`
- Before/after examples table
- Tokenizer vocabulary analysis figure

## Sprint checklist

- [ ] Week 1: concept note + preprocessing prototypes
- [ ] Week 2: full pipeline + tagged release `sprint-7N`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
