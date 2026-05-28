module.exports = async (params) => {
  const { app, quickAddApi } = params;
  const { Notice } = require("obsidian");

  const result = {
    timestamp: new Date().toISOString(),
    sessionId: "a33f7d",
    runId: "self-test",
    checks: {},
    errors: [],
  };

  const check = (name, ok, detail = {}) => {
    result.checks[name] = { ok, ...detail };
  };

  try {
    check("quickAddApi", !!quickAddApi, {
      hasSuggester: typeof quickAddApi?.suggester === "function",
      hasCheckboxPrompt: typeof quickAddApi?.checkboxPrompt === "function",
    });

    const qa = app.plugins.plugins.quickadd;
    check("quickaddPlugin", !!qa, { choiceCount: qa?.settings?.choices?.length ?? 0 });

    const tp = app.plugins.plugins["templater-obsidian"];
    check("templaterPlugin", !!tp, {
      triggerOnCreate: tp?.settings?.trigger_on_file_creation ?? null,
      folderTemplates: tp?.settings?.folder_templates?.length ?? 0,
    });

    const templatePaths = [
      "_templates/tpl-task-note.md",
      "_templates/tpl-project.md",
      "_templates/tpl-goal.md",
      "_templates/tpl-area.md",
      "_templates/tpl-person.md",
      "_templates/tpl-meeting.md",
      "_templates/tpl-fleeting-note.md",
      "_templates/tpl-cornell.md",
    ];

    for (const p of templatePaths) {
      const file = app.vault.getAbstractFileByPath(p);
      check(`template:${p}`, !!file, { exists: !!file });
    }

    const archiveScript = app.vault.getAbstractFileByPath("_scripts/archive-recursive.js");
    check("archiveScript", !!archiveScript, { exists: !!archiveScript });

    const tpl = await app.vault.read(app.vault.getAbstractFileByPath("_templates/tpl-task-note.md"));
    check("taskTemplateNoTryCatch", !tpl.includes("try {"), {
      hasConditionalWikilink: tpl.includes("projectTrim ?"),
      hasLiteralEmptyWikilink: tpl.includes("[[]]"),
    });

    const reportPath = "0-meta/quickadd-self-test-result.md";
    const reportBody = `---
type: meta
tags: [meta/debug]
created: ${result.timestamp.slice(0, 10)}
---

# QuickAdd Self Test

Run via **QuickAdd: Self Test** from the command palette.

\`\`\`json
${JSON.stringify(result, null, 2)}
\`\`\`
`;

    const existing = app.vault.getAbstractFileByPath(reportPath);
    if (existing) {
      await app.vault.modify(existing, reportBody);
    } else {
      await app.vault.create(reportPath, reportBody);
    }

    const failed = Object.entries(result.checks).filter(([, v]) => !v.ok);
    if (failed.length) {
      new Notice(`QuickAdd self-test: ${failed.length} check(s) failed. See 0-meta/quickadd-self-test-result.md`);
    } else {
      new Notice("QuickAdd self-test: all checks passed. See 0-meta/quickadd-self-test-result.md");
    }
  } catch (err) {
    result.errors.push(err?.message ?? String(err));
    new Notice(`QuickAdd self-test error: ${err?.message ?? err}`);
  }
};
