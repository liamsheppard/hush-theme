# Hush

A minimal VS Code color theme that uses only a handful of colors. Ships in two variants:

- **Hush Light** — light background
- **Hush Dark** — dark background

## Installation

Install from the VS Code Marketplace, then pick the theme via:

- **Code › Settings › Theme › Color Theme** (macOS), or
- **File › Preferences › Theme › Color Theme** (Windows / Linux), or
- the command palette: `Preferences: Color Theme` → choose **Hush Light** or **Hush Dark**.

## Project structure

```
src/
  colors.js          # color palette
  theme.source.js    # token → color mapping (single source of truth)
  build.js           # generates the theme JSON files
themes/
  Hush-light-color-theme.json   # generated, do not edit by hand
  Hush-dark-color-theme.json    # generated, do not edit by hand
samples/             # sample files for previewing the theme
```

The files in `themes/` are **generated**. Edit the palette and mappings in `src/`, then rebuild.

## Building the themes

Requires Node.js (no other dependencies).

```sh
npm run build
```

Or directly:

```sh
node src/build.js
```

This regenerates both [themes/Hush-light-color-theme.json](themes/Hush-light-color-theme.json) and [themes/Hush-dark-color-theme.json](themes/Hush-dark-color-theme.json).

## Development

1. Open this folder in VS Code.
2. Edit the palette in [src/colors.js](src/colors.js) or token mappings in [src/theme.source.js](src/theme.source.js).
3. Run `npm run build` to regenerate the theme JSON.
4. Press `F5` to launch an Extension Development Host with the theme loaded, then select **Hush Light** or **Hush Dark** via the command palette (`Preferences: Color Theme`).

Use the files in [samples/](samples/) to preview how the theme renders across languages, diffs, and merge conflicts.

## Publishing

Install `vsce` if you don't already have it:

```sh
npm install -g @vscode/vsce
```

Then package or publish:

```sh
vsce package        # produces a .vsix
vsce publish        # publishes to the Marketplace
```

See the [VS Code publishing docs](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) for setting up a publisher account.
