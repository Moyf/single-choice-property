# Single Choice Property

Single Choice Property keeps selected Obsidian list properties to a single latest value. It is useful when you want a property like `status` or `priority` to behave like a single-choice field while still using Obsidian's list-style property editor.

Requires Obsidian `1.11.0` or newer.

By default, the plugin watches the `status` property. When a watched property becomes a list with more than one value, the plugin keeps only the last value and can show a Notice.

Example:

```yaml
status:
  - Doing
  - Done
```

becomes:

```yaml
status:
  - Done
```

## Settings

Use the plugin settings page to add or remove watched property names.

### Single value property

Select a list-type property from Obsidian's property list and add it as a single-value property. Press `Enter` in the input or click `Add` to add the property.

The property input uses Obsidian's property API to show suggestions and property types. These Obsidian property types are treated as valid list types:

- `aliases`
- `list`
- `multitext`
- `tags`

If a watched property is missing from Obsidian's property settings, or is configured as a non-list type, the settings page shows a warning and a conversion button. The conversion button changes the property type to `multitext`; it only affects the property type and does not modify existing notes.

### Single value property list

The list shows every configured single-value property. Each property is refreshed precisely in Obsidian's metadata editor after the plugin updates it, so a full page rebuild is not required.

### Notify when modifying properties

This setting is enabled by default. When the plugin automatically modifies a property, it shows a notification with the note name, property name, and kept value.

## Notes

- The plugin runs locally and does not make network requests.
- The plugin only changes configured watched properties when they are arrays with more than one value.
- The latest value means the last item in the list.
