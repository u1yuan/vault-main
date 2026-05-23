module.exports = async (params) => {
  const { app, quickAddApi } = params;
  const { Notice } = require("obsidian");

  const activeFile = app.workspace.getActiveFile();
  if (!activeFile) {
    new Notice("No active file to archive.");
    return;
  }

  if (activeFile.path.startsWith("4-archives/")) {
    new Notice("This note is already archived.");
    return;
  }

  const status = await quickAddApi.suggester(
    ["completed", "canceled"],
    ["completed", "canceled"],
    "Archive status"
  );
  if (!status) return;

  const archived = new Set();

  const collectDependents = (file, acc = new Set()) => {
    const backlinkMap = app.metadataCache.getBacklinksForFile(file)?.data ?? {};
    for (const path of Object.keys(backlinkMap)) {
      if (path.startsWith("4-archives/") || acc.has(path)) continue;
      const dep = app.vault.getAbstractFileByPath(path);
      if (!dep || dep.extension !== "md") continue;
      acc.add(path);
      collectDependents(dep, acc);
    }
    return acc;
  };

  const dependents = [...collectDependents(activeFile)].sort();
  const defaultSelected = [activeFile.path, ...dependents];

  const chosen = await quickAddApi.checkboxPrompt(
    defaultSelected,
    defaultSelected,
    "Select files to archive (recursive dependents)"
  );
  if (!chosen || chosen.length === 0) {
    new Notice("Archive cancelled.");
    return;
  }

  const targets = [...new Set(chosen)].sort((a, b) => {
    const depth = (p) => p.split("/").length;
    return depth(b) - depth(a);
  });

  for (const path of targets) {
    if (archived.has(path)) continue;
    const file = app.vault.getAbstractFileByPath(path);
    if (!file || file.extension !== "md") continue;

    await app.fileManager.processFrontMatter(file, (fm) => {
      fm.status = status;
    });

    const archivePath = `4-archives/${file.path}`;
    const archiveFolder = archivePath.substring(0, archivePath.lastIndexOf("/"));
    if (archiveFolder && !app.vault.getAbstractFileByPath(archiveFolder)) {
      await app.vault.createFolder(archiveFolder);
    }

    await app.fileManager.renameFile(file, archivePath);
    archived.add(path);
  }

  new Notice(`Archived ${archived.size} file(s) with status "${status}".`);
};
