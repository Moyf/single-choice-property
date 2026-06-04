export interface SingleChoicePropertySettings {
  properties: string[];
  showNotice: boolean;
}

export interface Messages {
  notices: {
    keptLatestValue: string;
    enterPropertyName: string;
    alreadyWatched: string;
    convertedPropertyType: string;
  };
  settings: {
    watchedPropertiesName: string;
    watchedPropertiesDesc: string;
    showNoticeName: string;
    showNoticeDesc: string;
    addButton: string;
    warning: string;
    uniquePropertiesGroup: string;
    uniquePropertiesDesc: string;
    uniquePropertiesUpdateDesc: string;
    removeTooltip: string;
    convertPropertyTypeButton: string;
    convertPropertyTypeTooltip: string;
    configuredAsList: string;
    notRegistered: string;
    notListType: string;
  };
}

export const DEFAULT_SETTINGS: SingleChoicePropertySettings = {
  properties: ["status"],
  showNotice: true,
};
