# Changelog

## [0.1.0] - 2026-06-04

### 🚀 Added

- **Single-choice properties**: Monitor configured frontmatter list properties and keep only the latest value when a list contains multiple items.
- **Property suggestions**: Suggest Obsidian properties from the property cache while adding single-value properties, including a right-aligned type label for each candidate.
- **Property type validation**: Use Obsidian property APIs to warn when watched properties are not configured as list-compatible property types.
- **Property management**: Add settings to configure watched properties and convert non-list property types to `multitext` without modifying existing notes.
- **Metadata editor refresh**: Precisely refresh updated property rows in Obsidian's metadata editor after automatic cleanup, avoiding a full page rebuild.
- **Optional notices**: Add a default-enabled setting to show a Notice when the plugin automatically updates a property, including the note name, property name, and kept value.
- **Localization**: Add English and Chinese UI text for settings, warnings, and notices.

<details>
<summary>中文说明（点击展开）</summary>

### 🚀 新增

- **单选属性**：监听配置的 frontmatter 列表属性，当列表包含多个值时只保留最新值。
- **属性候选**：添加单一值属性时，从 Obsidian 属性缓存中提供候选项，并在右侧显示属性类型标签。
- **属性类型校验**：使用 Obsidian 属性 API 校验监听属性类型，当属性未配置为兼容列表的属性类型时显示警告。
- **属性管理**：添加设置页用于配置监听属性，并可将非列表属性类型转换为 `multitext`，不会修改已有笔记。
- **属性区刷新**：自动清理后精确刷新 Obsidian metadata editor 中被更新的属性行，避免重建整个页面。
- **可选通知**：添加默认开启的通知设置，自动更新属性时显示笔记名、属性名和保留值。
- **本地化**：为设置、警告和通知添加英文与中文界面文本。

</details>

---
