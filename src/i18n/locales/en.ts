import { Messages } from "../../types";

const en: Messages = {
  notices: {
    keptLatestValue:
      "Detected multiple values in {property} for \"{file}\". Updated automatically and kept: {value}",
    enterPropertyName: "Enter a property name first.",
    alreadyWatched: "{property} is already watched.",
    convertedPropertyType: "Converted {property} property type to list.",
  },
  settings: {
    watchedPropertiesName: "Single value property",
    watchedPropertiesDesc: "Select and add list-type properties.",
    showNoticeName: "Notify when modifying properties",
    showNoticeDesc: "Show a notification when the plugin automatically modifies a property.",
    addButton: "Add",
    warning:
      "Some watched properties are not list types in Obsidian property settings, so the plugin cannot take effect. Convert them before relying on automatic cleanup.",
    uniquePropertiesGroup: "Single value property list",
    uniquePropertiesDesc:
      "The following properties only keep a single value. This is useful for single-choice properties such as priority.",
    uniquePropertiesUpdateDesc: "Whenever a property changes, it is updated automatically and shows a notice.",
    removeTooltip: "Remove",
    convertPropertyTypeButton: "Convert property type",
    convertPropertyTypeTooltip:
      "Convert this property to a list type. This only affects the property type and will not modify existing notes.",
    configuredAsList:
      "This property is configured as a list type. When a new value is added, only the latest value is kept to ensure uniqueness.",
    notRegistered: "This property is not registered in Obsidian property settings.",
    notListType: "This property is currently {type}, not a list type, so the plugin cannot take effect.",
  },
};

export default en;
