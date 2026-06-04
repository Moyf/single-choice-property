import { App, Notice } from "obsidian";
import { formatMessage } from "./i18n";
import { Messages } from "./types";

export interface PropertyTypeIssue {
  property: string;
  type: string | null;
}

export interface PropertyTypeEntry {
  property: string;
  type: string;
}

interface PropertyInfo {
  name: string;
  widget: string;
  occurrences: number;
}

interface MetadataCacheWithPropertyInfos {
  getAllPropertyInfos(): Record<string, PropertyInfo>;
}

interface MetadataTypeManagerWithSetType {
  setType(property: string, type: string): Promise<void>;
}

interface AppWithMetadataTypeManager extends App {
  metadataTypeManager: MetadataTypeManagerWithSetType;
}

const LIST_PROPERTY_TYPES = new Set(["aliases", "list", "multitext", "tags"]);

export async function getPropertyTypeIssues(
  app: App,
  properties: string[]
): Promise<PropertyTypeIssue[]> {
  const types = getPropertyInfoMap(app);

  return properties
    .map((property) => ({ property, type: getPropertyInfo(types, property)?.widget ?? null }))
    .filter((issue) => !issue.type || !LIST_PROPERTY_TYPES.has(issue.type));
}

export function getPropertyTypeEntries(app: App): PropertyTypeEntry[] {
  const properties = getPropertyInfoMap(app);

  return Object.values(properties)
    .map((info) => ({ property: info.name, type: info.widget }))
    .sort((a, b) => a.property.localeCompare(b.property));
}

export async function convertPropertyTypeToList(
  app: App,
  property: string,
  messages: Messages
): Promise<void> {
  const metadataTypeManager = (app as AppWithMetadataTypeManager).metadataTypeManager;
  await metadataTypeManager.setType(property, "multitext");
  new Notice(formatMessage(messages.notices.convertedPropertyType, { property }));
}

function getPropertyInfoMap(app: App): Record<string, PropertyInfo> {
  const metadataCache = app.metadataCache as unknown as MetadataCacheWithPropertyInfos;
  return metadataCache.getAllPropertyInfos();
}

function getPropertyInfo(
  properties: Record<string, PropertyInfo>,
  property: string
): PropertyInfo | null {
  return properties[property.toLowerCase()] ?? null;
}
