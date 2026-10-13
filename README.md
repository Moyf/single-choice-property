# Single Choice Property

[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=Downloads&query=%24%5B%22single-choice-property%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=single-choice-property) [![Release](https://img.shields.io/github/v/release/Moyf/single-choice-property?label=Release)](https://github.com/Moyf/single-choice-property/releases) [![GitHub Issues](https://img.shields.io/github/issues/Moyf/single-choice-property?label=Issues)](https://github.com/Moyf/single-choice-property/issues) [![Stars](https://img.shields.io/github/stars/Moyf/single-choice-property?logo=github&label=Stars)](https://github.com/Moyf/single-choice-property/stargazers)

English | [简体中文](https://github.com/moyf/single-choice-property#单选属性)

This is a simple single-feature plugin: Single Choice Property (SCP for short — yes, I'm on purpose.).

![demo](assets/SCP_demo.gif)

Its function is as shown in the image: it can **restrict a specific list property to a single value**. When added, it directly overwrites the original value without needing to manually delete the old one.

## WHY?
Although I think the functionality is self-explanatory... in simple terms, for properties like `status` or `priority`, they naturally don’t require "multiple values" (you can’t have a task that is both "in progress" and "cancelled," right?). But having to delete the old value and then add a new one each time is a bit tedious, so I wrote this plugin to automate it for me.

In a word, it's a *lazy person's plugin*—it doesn't add any new functionality, it just saves you one step :P

```
FROM:
Click, Ctrl+A, Backspace, Select New Value 

⬇️ TO:
Click, Select New Value
```
Saving 50% of the operations! 😎


> Once Obsidian supports "single-select" property, this plugin will no longer be necessary.


## The Capsule Style

The beautiful colorful capsule style is provided by [Typify](https://github.com/Leike-Dev/Obsidian-Typify) - this plugin is the source of inspiration for me to create SCP — it's simple, elegant, and I truly recommend it. ❤️

## How it works
By default, the plugin watches the `status` property.
You can add or remove watched property names in the plugin settings.

![alt text](assets/SCP_setting.png)

When a watched property becomes a list with more than one value, the plugin keeps only the last value and can show a Notice.

## More from Moy

If you appreciate my plugin design and quality, check out my other Obsidian plugins:

| Plugin | Description | Stats |
| --- | --- | --- |
| [Yearly Glance](https://github.com/Moyf/yearly-glance) | See your whole year's key events at a glance. | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22yearly-glance%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=yearly-glance) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/yearly-glance?logo=github&label=Stars)](https://github.com/Moyf/yearly-glance/stargazers) |
| [Easy Copy](https://github.com/Moyf/easy-copy) | Easily copy formatted text, or quickly generate elegant links. | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22easy-copy%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=easy-copy) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/easy-copy?logo=github&label=Stars)](https://github.com/Moyf/easy-copy/stargazers) |
| [Better Links](https://github.com/Moyf/better-links) | The link popover editor you absolutely need. | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22better-links%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=better-links) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/better-links?logo=github&label=Stars)](https://github.com/Moyf/better-links/stargazers) |
| [Style Context](https://github.com/Moyf/style-context) | Set your Obsidian background to any image in your vault. | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22style-context%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=style-context) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/style-context?logo=github&label=Stars)](https://github.com/Moyf/style-context/stargazers) |
| [Colorful Highlights](https://github.com/Moyf/colorful-highlights) | Enhanced colorful highlights with multiple styles, or define your own color schemes. | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22colorful-highlights%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=colorful-highlights) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/colorful-highlights?logo=github&label=Stars)](https://github.com/Moyf/colorful-highlights/stargazers) |
| [Harbor Tab](https://github.com/Moyf/harbor-tab) | A beautiful new tab page with quick file search and creation. | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22harbor-tab%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=harbor-tab) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/harbor-tab?logo=github&label=Stars)](https://github.com/Moyf/harbor-tab/stargazers) |

> See all my plugins on my [Obsidian Community page](https://community.obsidian.md/users/moyf).

Friend plugins I contributed to: [Note Toolbar](https://github.com/chrisgurney/obsidian-note-toolbar) & [Typify](https://github.com/leike-dev/Obsidian-Typify) ❤️

## Support

If you like Single Choice Property, consider [buying me a coffee on Ko-fi](https://ko-fi.com/moy) ☕


# 单选属性

[![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=%E4%B8%8B%E8%BD%BD%E9%87%8F&query=%24%5B%22single-choice-property%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=single-choice-property) [![版本发布](https://img.shields.io/github/v/release/Moyf/single-choice-property?label=Release)](https://github.com/Moyf/single-choice-property/releases) [![议题](https://img.shields.io/github/issues/Moyf/single-choice-property?label=%E8%AE%AE%E9%A2%98)](https://github.com/Moyf/single-choice-property/issues) [![星标](https://img.shields.io/github/stars/Moyf/single-choice-property?logo=github&label=%E6%98%9F%E6%A0%87)](https://github.com/Moyf/single-choice-property/stargazers)

[English](https://github.com/moyf/single-choice-property#single-choice-property) | 简体中文

这是个功能非常单纯的插件：单项——选择——属性（Single Choice Property，简称 SCP，没错，我故意的）

![demo](assets/SCP_demo.gif)

作用如图：可以把某个特定的列表属性限制为**只能留一个值**。添加新值时，直接覆盖原来的值，不需要你手动先删掉旧值。

虽然我觉得这个功能本身已经挺直观了……简单来说，像 `status`、`priority` 这类属性，本来就天然不需要“多个值”（你总不能让一个任务同时是“进行中”和“已取消”，对吧？）。但每次都要先删除旧值再添加新值还是有点麻烦，所以我写了这个插件帮自己自动处理。

一句话概括，这是一个 *懒人插件*：它不会带来什么全新能力，只是帮你少点一步 :P

```
原来的操作：
点击，全选，删除，选择新值

⬇️ 现在：
点击，选择新值
```

省了50%的操作噢！ 😎

> 等 Obsidian 官方支持“单选”属性之后，这个插件就没有存在的必要了。

---

顺带一提，属性漂亮的彩色胶囊样式来自 [Typify](https://github.com/Leike-Dev/Obsidian-Typify)——它也是我制作 SCP 的灵感来源：简洁、优雅，我超推荐！ ❤️

## 工作方式

默认情况下，插件会监听 `status` 属性。
你可以在插件设置中添加或移除需要监听的属性名。

![alt text](assets/SCP_setting.png)

当某个被监听的属性变成包含多个值的列表时，插件会只保留最后一个值，并且会（可选）弹出 Notice 提示。

## 来自 Moy 的更多插件

如果你欣赏我的插件设计和质量，可以看看我的其他 Obsidian 插件：

| 插件 | 简介 | 数据 |
| --- | --- | --- |
| [Yearly Glance](https://github.com/Moyf/yearly-glance) | 年度一览，一眼纵览你全年的关键事件。 | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22yearly-glance%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=yearly-glance) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/yearly-glance?logo=github&label=Stars)](https://github.com/Moyf/yearly-glance/stargazers) |
| [Easy Copy](https://github.com/Moyf/easy-copy) | 轻松复制格式文本，或快速生成优雅的链接。 | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22easy-copy%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=easy-copy) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/easy-copy?logo=github&label=Stars)](https://github.com/Moyf/easy-copy/stargazers) |
| [Better Links](https://github.com/Moyf/better-links) | 悬浮式弹窗，提升你的链接编辑体验。 | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22better-links%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=better-links) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/better-links?logo=github&label=Stars)](https://github.com/Moyf/better-links/stargazers) |
| [Style Context](https://github.com/Moyf/style-context) | 将你的 Obsidian 背景设成任意库内图片。 | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22style-context%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=style-context) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/style-context?logo=github&label=Stars)](https://github.com/Moyf/style-context/stargazers) |
| [Colorful Highlights](https://github.com/Moyf/colorful-highlights) | 彩色高亮效果增强，提供多种样式，或自定义新配色。 | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22colorful-highlights%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=colorful-highlights) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/colorful-highlights?logo=github&label=Stars)](https://github.com/Moyf/colorful-highlights/stargazers) |
| [Harbor Tab](https://github.com/Moyf/harbor-tab) | 非常好看的新标签页，快速搜索和创建文件。 | [![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&logoColor=white&color=%23483699&label=downloads&query=%24%5B%22harbor-tab%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=harbor-tab) [![GitHub Stars](https://img.shields.io/github/stars/Moyf/harbor-tab?logo=github&label=Stars)](https://github.com/Moyf/harbor-tab/stargazers) |

> 全部插件见 [Moy 的 Obsidian Community 页面](https://community.obsidian.md/users/moyf)。

参与开发的友情插件：[Note Toolbar](https://github.com/chrisgurney/obsidian-note-toolbar) & [Typify](https://github.com/leike-dev/Obsidian-Typify) ❤️

## 支持作者

如果 Single Choice Property 对你有帮助，欢迎[请我喝杯咖啡（Ko-fi）](https://ko-fi.com/moy) ☕
