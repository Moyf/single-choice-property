import { App, Notice, TFile } from "obsidian";
import { formatMessage } from "./i18n";
import { Messages } from "./types";

export interface EnforceResult {
  changed: boolean;
  frontmatter: Record<string, unknown> | null;
}

export interface EnforcedPropertyChange {
  property: string;
  keptValue: unknown;
}

export function enforceFrontmatterObject(
  frontmatter: Record<string, unknown>,
  properties: string[]
): EnforcedPropertyChange[] {
  const changes: EnforcedPropertyChange[] = [];

  for (const property of properties) {
    const value = frontmatter[property];
    if (!Array.isArray(value) || value.length <= 1) {
      continue;
    }

    const keptValue = value[value.length - 1];
    frontmatter[property] = [keptValue];
    changes.push({ property, keptValue });
  }

  return changes;
}

export function showEnforceNotice(
  file: TFile,
  changes: EnforcedPropertyChange[],
  messages: Messages
): void {
  if (changes.length === 0) {
    return;
  }

  for (const change of changes) {
    new Notice(
      formatMessage(messages.notices.keptLatestValue, {
        property: change.property,
        file: file.basename,
        value: String(change.keptValue),
      })
    );
  }
}

export async function enforceSingleChoiceProperty(
  app: App,
  file: TFile,
  properties: string[],
  messages: Messages,
  showNotice: boolean
): Promise<EnforceResult> {
  let changes: EnforcedPropertyChange[] = [];
  let updatedFrontmatter: Record<string, unknown> | null = null;

  await app.fileManager.processFrontMatter(file, (frontmatter: Record<string, unknown>) => {
    changes = enforceFrontmatterObject(frontmatter, properties);
    updatedFrontmatter = { ...frontmatter };
  });

  if (showNotice) {
    showEnforceNotice(file, changes, messages);
  }

  return {
    changed: changes.length > 0,
    frontmatter: updatedFrontmatter,
  };
}
