import { Messages } from "../../types";

const zh: Messages = {
  notices: {
    keptLatestValue: "检测到“{file}”的 {property} 存在多值，已自动更新，保留值：{value}",
    enterPropertyName: "请先输入属性名。",
    alreadyWatched: "{property} 已经在监听列表中。",
    convertedPropertyType: "已将 {property} 的属性类型转换为列表。",
  },
  settings: {
    watchedPropertiesName: "单一值属性",
    watchedPropertiesDesc: "选择列表类型的属性并添加。",
    showNoticeName: "修改属性时提示",
    showNoticeDesc: "插件自动修改属性时，显示通知提醒。",
    addButton: "添加",
    warning: "部分监听属性在 Obsidian 属性设置中不是列表类型，插件无法生效。请先转换后再依赖自动清理。",
    uniquePropertiesGroup: "单一值属性列表",
    uniquePropertiesDesc:
      "以下属性只会保留单个值，适用于「优先级」这类“单选”的情况。",
    uniquePropertiesUpdateDesc: "每次属性发生变动的时候，都会自动更新并提示。",
    removeTooltip: "移除",
    convertPropertyTypeButton: "转换属性类型",
    convertPropertyTypeTooltip:
      "将该属性转换为列表类型。这个操作只影响属性，不会修改已有笔记。",
    configuredAsList: "此属性已配置为列表类型，添加新值时只会保留最新的值，以确保唯一。",
    notRegistered: "此属性尚未注册到 Obsidian 属性设置。",
    notListType: "此属性当前类型为 {type}，不是列表类型，插件无法生效。",
  },
};

export default zh;
