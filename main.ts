import { MarkdownView, Plugin, TFile } from "obsidian";
import { SingleChoicePropertySettingTab } from "./src/settings-tab";
import { SingleChoicePropertySettings, DEFAULT_SETTINGS, Messages } from "./src/types";
import { enforceSingleChoiceProperty } from "./src/enforcer";
import { getMessages } from "./src/i18n";

export default class SingleChoicePropertyPlugin extends Plugin {
  settings: SingleChoicePropertySettings;
  messages: Messages;
  private processingPaths = new Set<string>();

  async onload(): Promise<void> {
    await this.loadSettings();
    this.messages = getMessages();
    this.addSettingTab(new SingleChoicePropertySettingTab(this.app, this));

    this.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        void this.enforceFile(file.path);
      })
    );
  }

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.settings.properties = normalizeProperties(this.settings.properties);
  }

  async saveSettings(): Promise<void> {
    this.settings.properties = normalizeProperties(this.settings.properties);
    await this.saveData(this.settings);
  }

  async enforceFile(path: string): Promise<void> {
    if (this.processingPaths.has(path)) {
      return;
    }

    const file = this.app.vault.getFileByPath(path);
    if (!file || file.extension !== "md") {
      return;
    }

    this.processingPaths.add(path);
    try {
      const result = await enforceSingleChoiceProperty(
        this.app,
        file,
        this.settings.properties,
        this.messages,
        this.settings.showNotice
      );
      if (result.changed) {
        this.refreshOpenFileViews(file, result.frontmatter);
      }
    } finally {
      this.processingPaths.delete(path);
    }
  }

  private refreshOpenFileViews(
    file: TFile,
    frontmatter: Record<string, unknown> | null
  ): void {
    this.app.workspace.getLeavesOfType("markdown").forEach((leaf) => {
      const view = leaf.view;
      if (!(view instanceof MarkdownView) || view.file?.path !== file.path) {
        return;
      }

      synchronizeMetadataEditor(view, frontmatter);
      forceRenderMetadataRows(view, frontmatter, this.settings.properties);
    });
  }
}

interface MetadataEditorOwner {
  metadataEditor?: {
    rendered: MetadataPropertyRow[];
    synchronize(frontmatter: Record<string, unknown> | null): void;
  };
}

interface MetadataPropertyRow {
  entry: {
    key: string;
    value: unknown;
  };
  renderProperty(entry: { key: string; value: unknown }, force?: boolean): void;
}

function synchronizeMetadataEditor(
  view: MarkdownView,
  frontmatter: Record<string, unknown> | null
): void {
  const owner = view as MetadataEditorOwner;
  if (owner.metadataEditor) {
    owner.metadataEditor.synchronize(frontmatter);
  }
}

function forceRenderMetadataRows(
  view: MarkdownView,
  frontmatter: Record<string, unknown> | null,
  properties: string[]
): void {
  if (!frontmatter) {
    return;
  }

  const owner = view as MetadataEditorOwner;
  const metadataEditor = owner.metadataEditor;
  if (!metadataEditor) {
    return;
  }

  for (const property of properties) {
    const row = metadataEditor.rendered.find((item) => item.entry.key === property);
    if (!row || !(property in frontmatter)) {
      continue;
    }

    row.renderProperty({ key: property, value: frontmatter[property] }, true);
  }
}

function normalizeProperties(properties: string[]): string[] {
  const seen = new Set<string>();
  const normalized: string[] = [];

  for (const property of properties) {
    const trimmed = property.trim();
    if (trimmed && !seen.has(trimmed)) {
      seen.add(trimmed);
      normalized.push(trimmed);
    }
  }

  return normalized.length > 0 ? normalized : [...DEFAULT_SETTINGS.properties];
}
