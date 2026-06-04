import {
  AbstractInputSuggest,
  App,
  Notice,
  PluginSettingTab,
  Setting,
  SettingGroup,
  TextComponent,
} from "obsidian";
import SingleChoicePropertyPlugin from "../main";
import { formatMessage } from "./i18n";
import {
  convertPropertyTypeToList,
  getPropertyTypeEntries,
  getPropertyTypeIssues,
  PropertyTypeEntry,
  PropertyTypeIssue,
} from "./property-utils";
import { Messages } from "./types";

export class SingleChoicePropertySettingTab extends PluginSettingTab {
  icon = "lucide-list-check";
  plugin: SingleChoicePropertyPlugin;

  constructor(app: App, plugin: SingleChoicePropertyPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    void this.render();
  }

  async render(): Promise<void> {
    const { containerEl } = this;
    const messages = this.plugin.messages;
    containerEl.empty();

    let propertyInput: TextComponent;
    const propertyTypes = getPropertyTypeEntries(this.app);

    const addProperty = async (): Promise<void> => {
      const property = propertyInput.getValue().trim();

      if (!property) {
        new Notice(messages.notices.enterPropertyName);
        return;
      }

      if (this.plugin.settings.properties.includes(property)) {
        new Notice(formatMessage(messages.notices.alreadyWatched, { property }));
        return;
      }

      this.plugin.settings.properties.push(property);
      await this.plugin.saveSettings();
      this.display();
    };

    new Setting(containerEl)
      .setName(messages.settings.watchedPropertiesName)
      .setDesc(messages.settings.watchedPropertiesDesc)
      .addText((text) =>
        text.setPlaceholder("Status").then((component) => {
          propertyInput = component;
          new PropertySuggest(this.app, component.inputEl, propertyTypes).onSelect((value) => {
            component.setValue(value.property);
          });
          component.inputEl.addEventListener("keydown", (event) => {
            if (event.isComposing || event.key !== "Enter") {
              return;
            }

            event.preventDefault();
            void addProperty();
          });
        })
      )
      .addButton((button) =>
        button
          .setButtonText(messages.settings.addButton)
          .setCta()
          .onClick(() => {
            void addProperty();
          })
      );

    new Setting(containerEl)
      .setName(messages.settings.showNoticeName)
      .setDesc(messages.settings.showNoticeDesc)
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.showNotice).onChange(async (value) => {
          this.plugin.settings.showNotice = value;
          await this.plugin.saveSettings();
        })
      );

    const issues = await getPropertyTypeIssues(this.app, this.plugin.settings.properties);
    const group = new SettingGroup(containerEl)
      .setHeading(messages.settings.uniquePropertiesGroup)
      .addClass("single-choice-property-property-list");
    const groupDescEl = createGroupDescription(group.listEl);
    groupDescEl.setText(messages.settings.uniquePropertiesDesc);
    groupDescEl.createEl("br");
    groupDescEl.appendText(messages.settings.uniquePropertiesUpdateDesc);
    if (issues.length > 0) {
      groupDescEl.createEl("br");
      groupDescEl.createSpan({ cls: "single-choice-property-warning", text: messages.settings.warning });
    }

    for (const property of this.plugin.settings.properties) {
      const issue = issues.find((item) => item.property === property);

      group.addSetting((setting) => {
        setting.setName(property).setDesc(
          issue
            ? getIssueDescription(issue, messages)
            : messages.settings.configuredAsList
        );

        if (issue) {
          setting.addButton((button) =>
            button
              .setButtonText(messages.settings.convertPropertyTypeButton)
              .setTooltip(messages.settings.convertPropertyTypeTooltip)
              .onClick(async () => {
                await convertPropertyTypeToList(this.app, property, messages);
                this.display();
              })
          );
        }

        setting.addExtraButton((button) =>
          button
            .setIcon("trash")
            .setTooltip(messages.settings.removeTooltip)
            .onClick(async () => {
              this.plugin.settings.properties = this.plugin.settings.properties.filter(
                (item) => item !== property
              );
              await this.plugin.saveSettings();
              this.display();
            })
        );
      });
    }
  }
}

function createGroupDescription(containerEl: HTMLElement): HTMLElement {
  const settingEl = containerEl.createDiv({
    cls: "setting-item settings-view__group-description",
    attr: { tabindex: "-1" },
  });
  const infoEl = settingEl.createDiv({ cls: "setting-item-info" });
  infoEl.createDiv({ cls: "setting-item-name" });
  return infoEl.createDiv({ cls: "setting-item-description" });
}

class PropertySuggest extends AbstractInputSuggest<PropertyTypeEntry> {
  constructor(
    app: App,
    inputEl: HTMLInputElement,
    private propertyTypes: PropertyTypeEntry[]
  ) {
    super(app, inputEl);
  }

  protected getSuggestions(query: string): PropertyTypeEntry[] {
    const normalizedQuery = query.trim().toLowerCase();
    const suggestions = normalizedQuery
      ? this.propertyTypes.filter((entry) =>
          entry.property.toLowerCase().includes(normalizedQuery)
        )
      : this.propertyTypes;

    return suggestions.slice(0, 50);
  }

  renderSuggestion(value: PropertyTypeEntry, el: HTMLElement): void {
    el.addClass("single-choice-property-suggestion");
    el.createSpan({ cls: "single-choice-property-suggestion-name", text: value.property });
    el.createSpan({ cls: "single-choice-property-suggestion-type", text: value.type });
  }

  selectSuggestion(value: PropertyTypeEntry): void {
    this.setValue(value.property);
    this.close();
  }
}

function getIssueDescription(issue: PropertyTypeIssue, messages: Messages): string {
  if (!issue.type) {
    return messages.settings.notRegistered;
  }

  return formatMessage(messages.settings.notListType, { type: issue.type });
}
