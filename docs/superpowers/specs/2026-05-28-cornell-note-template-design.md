# Design Spec: Cornell Note Template (CSS-based)

## Goal
Implement a functional Cornell note template in Obsidian using a custom CSS snippet for side-by-side layout (Cues/Notes) and PARA-aligned metadata.

## Architecture
- **CSS Class:** `cornell-note` added to the note's frontmatter via `cssclasses`.
- **Snippet:** `.obsidian/snippets/cornell-note.css` (already created) defines the layout.
- **Trigger:** Headings at Level 3 (`###`) are positioned on the left as "Cues." All content following an H3 until the next H3 is positioned in the "Notes" column.
- **Summary:** A dedicated section at the bottom styled with a top border.

## Metadata (PARA-aligned)
The template will prompt the user for the following via Templater:
- **Project:** Wikilink to the related project.
- **Area:** Wikilink to the related area.
- **Goal:** Wikilink to the related goal.
- **Tags:** Defaulted to `notes/cornell`.

## Template Structure (`_templates/tpl-cornell.md`)
1. **Templater Logic Block:** Prompts for Project, Area, and Goal.
2. **Frontmatter:** Includes `type: cornell`, `cssclasses: [cornell-note]`, and PARA fields.
3. **Body:**
   - H1 for Title.
   - Example H3 Cue and Note block.
   - Summary section at the bottom.

## Success Criteria
- [ ] New notes created with the template have the `cornell-note` class.
- [ ] H3 headings appear on the left margin on desktop.
- [ ] Notes content appears in the center column.
- [ ] Summary section is clearly separated at the bottom.
