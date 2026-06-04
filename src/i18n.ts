import { getLanguage } from "obsidian";
import { Messages } from "./types";
import en from "./i18n/locales/en";
import zh from "./i18n/locales/zh";

const LOCALES: Record<string, Messages> = {
  en,
  zh,
  "zh-cn": zh,
  "zh-tw": zh,
};

export function getMessages(): Messages {
  const language = getLanguage().toLowerCase();
  return LOCALES[language] ?? LOCALES[language.split("-")[0]] ?? en;
}

export function formatMessage(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (message, [key, value]) => message.split(`{${key}}`).join(value),
    template
  );
}
