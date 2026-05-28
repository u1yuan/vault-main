---
type: sprint
sprint: 8N
phase: "[[Phase 3N — NLP Track]]"
tags: [thesis, sprint-curriculum, nlp]
priority: P2
status: pending
created: 2026-05-23
---

# Sprint 8N — HuggingFace Trainer and Imbalanced Metrics

← [[Sprint 7N — NLP Preprocessing Pipeline]] · [[Phase 3N — NLP Track]] · Next → [[Sprint 9N — Sociolinguistics and Research Ethics]]

**Maps to:** P2 — HF Trainer API; P2 — Classification metrics for imbalanced data

## Project: "Fine-tune with defensible metrics"

Fine-tune a small transformer (DistilBERT → then **RoBERTa** or multilingual checkpoint) on an **imbalanced** text dataset. Use `TrainingArguments` (warmup, effective batch size, gradient accumulation on Colab T4), early stopping, checkpointing. Primary metric: **F1-macro**; also PR curve, confusion matrix, optional `class_weight`.

## Deliverables

- W&B/MLflow run matrix
- Defence sheet: why not accuracy? F1-macro vs F1-weighted?

## Resources

## Resources

### 🎓 External Curriculum
From [[Thesis Learning Resources Index#Sprint 8N: HuggingFace Trainer and Imbalanced Metrics]]:
- **DataCamp:** [Fine-Tuning with Llama 3](https://www.datacamp.com/courses/fine-tuning-with-llama-3) — Deep dive into LoRA and QLoRA.
- **LinkedIn Learning:** *Understanding Machine Learning, Testing and Fine-Tuning with HuggingFace* — Model bias and functional testing.
- **LinkedIn Learning:** *Transformers and NLP: Fine-Tuning Models with Hugging Face* — Using `SFTTrainer`.

### 📚 Reference
- [Hugging Face Course: Fine-tuning a pre-trained model](https://huggingface.co/learn/nlp-course/chapter3/1)
- [Scikit-learn: Precision-Recall curves for imbalanced data](https://scikit-learn.org/stable/auto_examples/model_selection/plot_precision_recall.html)

## Sprint checklist

- [ ] Week 1: concept note + baseline fine-tune
- [ ] Week 2: full training matrix + tagged release `sprint-8N`
- [ ] Defence sheet (5 Q&A)
- [ ] 2 figures at 300 DPI

See [[How Each Sprint Works]] · [[Cross-cutting Habits]]
