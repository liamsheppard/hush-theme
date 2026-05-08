# VS Code Theme Reference

A practical reference for everything you can colorize in a VS Code theme.

A theme has two main sections in its JSON:

- **`colors`** — UI chrome (editor background, sidebar, tabs, buttons, status bar, etc.). Flat key-value pairs.
- **`tokenColors`** — syntax highlighting in code, via TextMate scope selectors.
- **`semanticTokenColors`** _(optional)_ — semantic highlighting from language servers (overrides `tokenColors` when active).

Official references:

- UI colors: https://code.visualstudio.com/api/references/theme-color
- Syntax (TextMate): https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide
- Semantic tokens: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide

---

## 1. UI Colors (`colors`)

Hundreds of keys exist. Below is a curated, themable subset grouped by area. All take a hex color (`#rrggbb` or `#rrggbbaa`).

### Base / generic

| Key                     | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| `foreground`            | Default UI text                                |
| `descriptionForeground` | Secondary/help text                            |
| `disabledForeground`    | Disabled UI text                               |
| `errorForeground`       | Generic error text                             |
| `focusBorder`           | Border around focused element                  |
| `selection.background`  | Generic selection bg (outside the editor)      |
| `widget.border`         | Border around floating widgets (find, suggest) |
| `widget.shadow`         | Shadow under widgets                           |
| `icon.foreground`       | Default icon color                             |
| `sash.hoverBorder`      | Resizer handle on hover                        |

### Editor — text & background

| Key                                    | Purpose                                |
| -------------------------------------- | -------------------------------------- |
| `editor.background`                    | Editor background                      |
| `editor.foreground`                    | Default editor text                    |
| `editor.lineHighlightBackground`       | Current line highlight                 |
| `editor.lineHighlightBorder`           | Border around current line             |
| `editor.selectionBackground`           | Selected text                          |
| `editor.selectionHighlightBackground`  | Other occurrences of selection         |
| `editor.wordHighlightBackground`       | Read occurrences of word under cursor  |
| `editor.wordHighlightStrongBackground` | Write occurrences                      |
| `editor.findMatchBackground`           | Current find match                     |
| `editor.findMatchHighlightBackground`  | Other find matches                     |
| `editor.hoverHighlightBackground`      | Hover background                       |
| `editor.rangeHighlightBackground`      | Range highlight (e.g. quick open peek) |
| `editor.symbolHighlightBackground`     | Symbol highlight                       |
| `editor.foldBackground`                | Folded region                          |
| `editor.inactiveSelectionBackground`   | Selection when editor not focused      |

### Editor — gutter, line numbers, indent guides

| Key                                                   | Purpose                                        |
| ----------------------------------------------------- | ---------------------------------------------- |
| `editorLineNumber.foreground`                         | Line numbers                                   |
| `editorLineNumber.activeForeground`                   | Active line number                             |
| `editorLineNumber.dimmedForeground`                   | Dimmed (e.g. wrapped continuation)             |
| `editorCursor.foreground`                             | Cursor                                         |
| `editorCursor.background`                             | Char under cursor (block cursor)               |
| `editorWhitespace.foreground`                         | Whitespace dots/tabs                           |
| `editorIndentGuide.background1`..`6`                  | Indent guide colors (rainbow)                  |
| `editorIndentGuide.activeBackground1`..`6`            | Active indent guides                           |
| `editorRuler.foreground`                              | Ruler vertical lines                           |
| `editorCodeLens.foreground`                           | Code lens (inline annotations above functions) |
| `editorBracketMatch.background`                       | Matching bracket bg                            |
| `editorBracketMatch.border`                           | Matching bracket border                        |
| `editorBracketHighlight.foreground1`..`6`             | Rainbow brackets                               |
| `editorBracketHighlight.unexpectedBracket.foreground` | Mismatched brackets                            |
| `editorBracketPairGuide.background1`..`6`             | Bracket pair guides (vertical)                 |
| `editorBracketPairGuide.activeBackground1`..`6`       | Active bracket pair guides                     |

### Editor — diagnostics (errors, warnings, info)

| Key                             | Purpose                                   |
| ------------------------------- | ----------------------------------------- |
| `editorError.foreground`        | Error squiggle                            |
| `editorError.background`        | Error background tint                     |
| `editorError.border`            | Error border                              |
| `editorWarning.foreground`      | Warning squiggle                          |
| `editorWarning.background`      | Warning bg tint                           |
| `editorWarning.border`          | Warning border                            |
| `editorInfo.foreground`         | Info squiggle                             |
| `editorInfo.background`         | Info bg tint                              |
| `editorInfo.border`             | Info border                               |
| `editorHint.foreground`         | Hint squiggle                             |
| `editorHint.border`             | Hint border                               |
| `editorUnnecessaryCode.opacity` | Faded "unused" code (alpha controls fade) |
| `editorUnnecessaryCode.border`  | Dotted underline for unused code          |

### Editor — gutter decorations

| Key                                       | Purpose                   |
| ----------------------------------------- | ------------------------- |
| `editorGutter.background`                 | Gutter bg                 |
| `editorGutter.modifiedBackground`         | Modified line marker      |
| `editorGutter.addedBackground`            | Added line marker         |
| `editorGutter.deletedBackground`          | Deleted line marker       |
| `editorGutter.commentRangeForeground`     | Comment range marker      |
| `editorOverviewRuler.errorForeground`     | Errors in minimap ruler   |
| `editorOverviewRuler.warningForeground`   | Warnings in minimap ruler |
| `editorOverviewRuler.infoForeground`      | Info in minimap ruler     |
| `editorOverviewRuler.modifiedForeground`  | Modified marker           |
| `editorOverviewRuler.addedForeground`     | Added marker              |
| `editorOverviewRuler.deletedForeground`   | Deleted marker            |
| `editorOverviewRuler.findMatchForeground` | Find match marker         |

### Editor — diff

| Key                                 | Purpose                              |
| ----------------------------------- | ------------------------------------ |
| `diffEditor.insertedTextBackground` | Inserted text bg                     |
| `diffEditor.removedTextBackground`  | Removed text bg                      |
| `diffEditor.insertedLineBackground` | Inserted line bg                     |
| `diffEditor.removedLineBackground`  | Removed line bg                      |
| `diffEditor.diagonalFill`           | Diagonal hatch in empty diff regions |
| `diffEditor.border`                 | Border between sides                 |

### Editor — minimap

| Key                              | Purpose             |
| -------------------------------- | ------------------- |
| `minimap.background`             | Minimap bg          |
| `minimap.findMatchHighlight`     | Find matches        |
| `minimap.selectionHighlight`     | Selection           |
| `minimap.errorHighlight`         | Errors              |
| `minimap.warningHighlight`       | Warnings            |
| `minimapSlider.background`       | Scroll thumb        |
| `minimapSlider.hoverBackground`  | Scroll thumb hover  |
| `minimapSlider.activeBackground` | Scroll thumb active |

### Editor — widgets (suggest, hover, find, peek)

| Key                                       | Purpose                 |
| ----------------------------------------- | ----------------------- |
| `editorWidget.background`                 | Suggest/hover widget bg |
| `editorWidget.foreground`                 | Widget text             |
| `editorWidget.border`                     | Widget border           |
| `editorSuggestWidget.background`          | Autocomplete bg         |
| `editorSuggestWidget.foreground`          | Autocomplete text       |
| `editorSuggestWidget.selectedBackground`  | Selected suggestion     |
| `editorSuggestWidget.highlightForeground` | Matched chars highlight |
| `editorHoverWidget.background`            | Hover popup bg          |
| `editorHoverWidget.border`                | Hover popup border      |
| `editorMarkerNavigation.background`       | Error navigation peek   |
| `peekView.border`                         | Peek view border        |
| `peekViewEditor.background`               | Peek editor bg          |
| `peekViewResult.background`               | Peek results sidebar bg |
| `peekViewResult.matchHighlightBackground` | Match highlight in peek |

### Activity Bar (left strip with icons)

| Key                              | Purpose                       |
| -------------------------------- | ----------------------------- |
| `activityBar.background`         | Bg                            |
| `activityBar.foreground`         | Active icon                   |
| `activityBar.inactiveForeground` | Inactive icons                |
| `activityBar.border`             | Right border                  |
| `activityBar.activeBorder`       | Active item indicator         |
| `activityBar.activeBackground`   | Active item bg                |
| `activityBarBadge.background`    | Badge bg (notification count) |
| `activityBarBadge.foreground`    | Badge text                    |

### Side Bar (file explorer, etc.)

| Key                               | Purpose               |
| --------------------------------- | --------------------- |
| `sideBar.background`              | Bg                    |
| `sideBar.foreground`              | Text                  |
| `sideBar.border`                  | Right border          |
| `sideBarTitle.foreground`         | Section titles        |
| `sideBarSectionHeader.background` | Collapsible header bg |
| `sideBarSectionHeader.foreground` | Header text           |
| `sideBarSectionHeader.border`     | Header border         |

### Lists & trees (file tree, problems panel, etc.)

| Key                                  | Purpose                       |
| ------------------------------------ | ----------------------------- |
| `list.activeSelectionBackground`     | Selected row (focused list)   |
| `list.activeSelectionForeground`     | Selected row text             |
| `list.activeSelectionIconForeground` | Selected row icon             |
| `list.inactiveSelectionBackground`   | Selected row (unfocused)      |
| `list.inactiveSelectionForeground`   | Selected row text (unfocused) |
| `list.hoverBackground`               | Hovered row                   |
| `list.hoverForeground`               | Hovered row text              |
| `list.focusBackground`               | Focused row (no selection)    |
| `list.focusOutline`                  | Focus outline                 |
| `list.errorForeground`               | Error rows (Problems panel)   |
| `list.warningForeground`             | Warning rows                  |
| `list.highlightForeground`           | Quick-open match highlight    |
| `tree.indentGuidesStroke`            | Tree indent guide lines       |

### Status Bar (bottom)

| Key                                 | Purpose                |
| ----------------------------------- | ---------------------- |
| `statusBar.background`              | Bg                     |
| `statusBar.foreground`              | Text                   |
| `statusBar.border`                  | Top border             |
| `statusBar.debuggingBackground`     | Bg while debugging     |
| `statusBar.debuggingForeground`     | Text while debugging   |
| `statusBar.noFolderBackground`      | Bg with no folder open |
| `statusBarItem.hoverBackground`     | Hover on items         |
| `statusBarItem.errorBackground`     | Error item bg          |
| `statusBarItem.warningBackground`   | Warning item bg        |
| `statusBarItem.prominentBackground` | Prominent items        |

### Title Bar (top)

| Key                           | Purpose               |
| ----------------------------- | --------------------- |
| `titleBar.activeBackground`   | Window focused        |
| `titleBar.activeForeground`   | Window focused text   |
| `titleBar.inactiveBackground` | Window unfocused      |
| `titleBar.inactiveForeground` | Window unfocused text |
| `titleBar.border`             | Bottom border         |

### Tabs (editor tabs)

| Key                                | Purpose                      |
| ---------------------------------- | ---------------------------- |
| `tab.activeBackground`             | Active tab                   |
| `tab.activeForeground`             | Active tab text              |
| `tab.inactiveBackground`           | Inactive tab                 |
| `tab.inactiveForeground`           | Inactive tab text            |
| `tab.hoverBackground`              | Hovered tab                  |
| `tab.activeBorder`                 | Bottom border on active      |
| `tab.activeBorderTop`              | Top border on active         |
| `tab.unfocusedActiveBorder`        | Active in unfocused group    |
| `tab.border`                       | Border between tabs          |
| `editorGroupHeader.tabsBackground` | Tab strip bg                 |
| `editorGroupHeader.tabsBorder`     | Tab strip border             |
| `editorGroup.border`               | Border between editor groups |

### Panel (terminal, problems, output)

| Key                             | Purpose                 |
| ------------------------------- | ----------------------- |
| `panel.background`              | Panel bg                |
| `panel.border`                  | Top border              |
| `panelTitle.activeForeground`   | Active section title    |
| `panelTitle.inactiveForeground` | Inactive section titles |
| `panelTitle.activeBorder`       | Active title underline  |

### Terminal

| Key                                 | Purpose        |
| ----------------------------------- | -------------- |
| `terminal.background`               | Bg             |
| `terminal.foreground`               | Default text   |
| `terminal.selectionBackground`      | Selection      |
| `terminalCursor.foreground`         | Cursor         |
| `terminalCursor.background`         | Cursor inverse |
| `terminal.ansiBlack`                | ANSI 0         |
| `terminal.ansiRed`                  | ANSI 1         |
| `terminal.ansiGreen`                | ANSI 2         |
| `terminal.ansiYellow`               | ANSI 3         |
| `terminal.ansiBlue`                 | ANSI 4         |
| `terminal.ansiMagenta`              | ANSI 5         |
| `terminal.ansiCyan`                 | ANSI 6         |
| `terminal.ansiWhite`                | ANSI 7         |
| `terminal.ansiBrightBlack`..`White` | ANSI 8-15      |

### Buttons, inputs, dropdowns, badges

| Key                                 | Purpose                 |
| ----------------------------------- | ----------------------- |
| `button.background`                 | Primary button          |
| `button.foreground`                 | Primary button text     |
| `button.hoverBackground`            | Primary hover           |
| `button.secondaryBackground`        | Secondary button        |
| `button.secondaryForeground`        | Secondary text          |
| `button.secondaryHoverBackground`   | Secondary hover         |
| `input.background`                  | Text input bg           |
| `input.foreground`                  | Input text              |
| `input.border`                      | Input border            |
| `input.placeholderForeground`       | Placeholder             |
| `inputOption.activeBorder`          | Toggle option active    |
| `inputValidation.errorBackground`   | Validation error bg     |
| `inputValidation.errorForeground`   | Validation error text   |
| `inputValidation.errorBorder`       | Validation error border |
| `inputValidation.warningBackground` | Validation warning      |
| `inputValidation.infoBackground`    | Validation info         |
| `dropdown.background`               | Dropdown bg             |
| `dropdown.foreground`               | Dropdown text           |
| `dropdown.border`                   | Dropdown border         |
| `badge.background`                  | Badge bg                |
| `badge.foreground`                  | Badge text              |
| `checkbox.background`               | Checkbox bg             |
| `checkbox.foreground`               | Check mark              |
| `checkbox.border`                   | Checkbox border         |

### Notifications

| Key                                   | Purpose             |
| ------------------------------------- | ------------------- |
| `notifications.background`            | Toast bg            |
| `notifications.foreground`            | Toast text          |
| `notifications.border`                | Toast border        |
| `notificationsErrorIcon.foreground`   | Error icon          |
| `notificationsWarningIcon.foreground` | Warning icon        |
| `notificationsInfoIcon.foreground`    | Info icon           |
| `notificationLink.foreground`         | Links inside toasts |

### Quick pick (command palette)

| Key                              | Purpose          |
| -------------------------------- | ---------------- |
| `quickInput.background`          | Bg               |
| `quickInput.foreground`          | Text             |
| `quickInputTitle.background`     | Title bar        |
| `quickInputList.focusBackground` | Highlighted item |
| `quickInputList.focusForeground` | Highlighted text |
| `pickerGroup.foreground`         | Group headings   |
| `pickerGroup.border`             | Group separator  |

### Source control (git decorations)

| Key                                             | Purpose         |
| ----------------------------------------------- | --------------- |
| `gitDecoration.modifiedResourceForeground`      | Modified files  |
| `gitDecoration.deletedResourceForeground`       | Deleted files   |
| `gitDecoration.untrackedResourceForeground`     | Untracked files |
| `gitDecoration.ignoredResourceForeground`       | Ignored files   |
| `gitDecoration.conflictingResourceForeground`   | Conflicts       |
| `gitDecoration.submoduleResourceForeground`     | Submodules      |
| `gitDecoration.stageModifiedResourceForeground` | Staged modified |
| `gitDecoration.stageDeletedResourceForeground`  | Staged deleted  |

### Debugging

| Key                                               | Purpose                 |
| ------------------------------------------------- | ----------------------- |
| `debugToolBar.background`                         | Debug toolbar           |
| `debugToolBar.border`                             | Debug toolbar border    |
| `editor.stackFrameHighlightBackground`            | Current stack frame     |
| `editor.focusedStackFrameHighlightBackground`     | Focused frame           |
| `debugIcon.breakpointForeground`                  | Breakpoint dot          |
| `debugIcon.breakpointDisabledForeground`          | Disabled breakpoint     |
| `debugIcon.breakpointCurrentStackframeForeground` | Current frame icon      |
| `debugConsole.errorForeground`                    | Errors in debug console |
| `debugConsole.warningForeground`                  | Warnings                |
| `debugConsole.infoForeground`                     | Info                    |
| `debugConsoleInputIcon.foreground`                | Input prompt            |

### Scrollbar

| Key                                | Purpose         |
| ---------------------------------- | --------------- |
| `scrollbar.shadow`                 | Shadow at edges |
| `scrollbarSlider.background`       | Thumb           |
| `scrollbarSlider.hoverBackground`  | Thumb hover     |
| `scrollbarSlider.activeBackground` | Thumb active    |

### Breadcrumbs

| Key                                    | Purpose            |
| -------------------------------------- | ------------------ |
| `breadcrumb.background`                | Bg                 |
| `breadcrumb.foreground`                | Inactive text      |
| `breadcrumb.focusForeground`           | Focused text       |
| `breadcrumb.activeSelectionForeground` | Active item        |
| `breadcrumbPicker.background`          | Dropdown picker bg |

### Menus

| Key                           | Purpose             |
| ----------------------------- | ------------------- |
| `menu.background`             | Menu bg             |
| `menu.foreground`             | Menu text           |
| `menu.selectionBackground`    | Hovered item        |
| `menu.selectionForeground`    | Hovered item text   |
| `menu.separatorBackground`    | Separator line      |
| `menubar.selectionBackground` | Top menu hover bg   |
| `menubar.selectionForeground` | Top menu hover text |

### Charts & welcome page

| Key                               | Purpose         |
| --------------------------------- | --------------- |
| `welcomePage.background`          | Welcome page bg |
| `welcomePage.tileBackground`      | Tile bg         |
| `welcomePage.progress.background` | Progress bar bg |
| `welcomePage.progress.foreground` | Progress fill   |
| `charts.foreground`               | Chart text      |
| `charts.lines`                    | Chart lines     |
| `charts.red`                      | Red series      |
| `charts.blue`                     | Blue series     |
| `charts.yellow`                   | Yellow series   |
| `charts.orange`                   | Orange series   |
| `charts.green`                    | Green series    |
| `charts.purple`                   | Purple series   |

---

## 2. Syntax Highlighting (`tokenColors`)

Each entry is `{ name, scope, settings }` where `settings` has `foreground`, `background`, `fontStyle` (`italic`, `bold`, `underline`, or empty string to clear).

Scopes are matched by **prefix** and **specificity wins**, not order. Space between scopes = descendant selector (`A B` = `B` inside `A`).

### Comments

| Scope                            | Matches                            |
| -------------------------------- | ---------------------------------- |
| `comment`                        | Any comment (root)                 |
| `comment.line`                   | `//`, `#`, `--`, `;` etc.          |
| `comment.line.double-slash`      | `//` style                         |
| `comment.line.number-sign`       | `#` style                          |
| `comment.block`                  | `/* ... */`, `<!-- -->`, `""" """` |
| `comment.block.documentation`    | `/** ... */` JSDoc/Javadoc/PHPDoc  |
| `comment.documentation`          | Doc comment (alt form)             |
| `comment.line.documentation`     | Rust `///`, Swift `///`            |
| `comment.block.preprocessor`     | C/C++ `#if 0 ... #endif`           |
| `punctuation.definition.comment` | Delimiter chars (`//`, `/*`, `*/`) |

### Strings

| Scope                                  | Matches                   |
| -------------------------------------- | ------------------------- |
| `string`                               | Any string (root)         |
| `string.quoted.single`                 | `'...'`                   |
| `string.quoted.double`                 | `"..."`                   |
| `string.quoted.triple`                 | `"""..."""` (Python etc.) |
| `string.template`                      | `` `template` `` (JS/TS)  |
| `string.regexp`                        | Regex literal             |
| `string.unquoted`                      | Heredocs, etc.            |
| `string.interpolated`                  | Interpolated parts        |
| `punctuation.definition.string.begin`  | Opening quote             |
| `punctuation.definition.string.end`    | Closing quote             |
| `constant.character.escape`            | `\n`, `\t`, `\u00e9`      |
| `meta.embedded` / `source.js.embedded` | `${...}` inside template  |

### Numbers and constants

| Scope                         | Matches                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `constant.numeric`            | All numeric literals                                    |
| `constant.numeric.integer`    | Integers                                                |
| `constant.numeric.float`      | Floats                                                  |
| `constant.numeric.hex`        | `0xff`                                                  |
| `constant.numeric.binary`     | `0b1010`                                                |
| `constant.numeric.octal`      | `0o755`                                                 |
| `storage.type.numeric.bigint` | The `n` suffix on BigInt                                |
| `constant.character`          | Char literals                                           |
| `constant.character.escape`   | Escape sequences inside strings                         |
| `constant.language`           | `true`, `false`, `null`, `undefined`, `NaN`, `Infinity` |
| `constant.other`              | Other named constants                                   |
| `constant.other.symbol`       | `:symbol` (Ruby)                                        |
| `support.constant`            | Built-in lib constants (`Math.PI`)                      |
| `variable.language`           | `this`, `super`, `self`, `arguments`                    |

### Variables

| Scope                      | Matches                              |
| -------------------------- | ------------------------------------ |
| `variable`                 | Any variable (root)                  |
| `variable.other`           | Generic variable usage               |
| `variable.other.readwrite` | Mutable var reference                |
| `variable.other.constant`  | `const` reference                    |
| `variable.other.property`  | Object property access               |
| `variable.parameter`       | Function parameters                  |
| `variable.function`        | Var holding a function               |
| `variable.language`        | `this`, `super`                      |
| `support.variable`         | Built-in vars (`window`, `document`) |
| `meta.definition.variable` | Variable being defined               |

### Functions and methods

| Scope                                           | Matches                                        |
| ----------------------------------------------- | ---------------------------------------------- |
| `entity.name.function`                          | Function name (definition)                     |
| `meta.function-call entity.name.function`       | At call site                                   |
| `meta.definition.function entity.name.function` | At definition                                  |
| `support.function`                              | Built-in functions (`parseInt`, `console.log`) |
| `entity.name.function.constructor`              | Constructor                                    |
| `entity.name.function.member`                   | Method name                                    |
| `meta.function.parameters`                      | Param list region                              |

### Classes, types, interfaces

| Scope                          | Matches                                                 |
| ------------------------------ | ------------------------------------------------------- |
| `entity.name.type`             | Class/type/interface name (definition)                  |
| `entity.name.type.class`       | Class specifically                                      |
| `entity.name.type.interface`   | Interface                                               |
| `entity.name.type.alias`       | TS `type` alias                                         |
| `entity.name.type.enum`        | Enum                                                    |
| `entity.other.inherited-class` | After `extends` / `implements`                          |
| `support.class`                | Built-in classes (`Array`, `Map`, `Date`)               |
| `support.type`                 | Built-in types (`string`, `number`)                     |
| `storage.type`                 | Type keywords (`int`, `class`, `function`, `var`)       |
| `storage.type.class`           | `class` keyword                                         |
| `storage.type.function`        | `function` keyword                                      |
| `storage.modifier`             | `public`, `static`, `async`, `const` (in some grammars) |

### Keywords

| Scope                         | Matches                                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `keyword`                     | Generic keyword                                                                                                   |
| `keyword.control`             | `if`, `else`, `for`, `while`, `return`, `switch`, `case`, `break`, `continue`, `throw`, `try`, `catch`, `finally` |
| `keyword.control.import`      | `import`, `export`, `from`                                                                                        |
| `keyword.control.flow`        | Flow keywords                                                                                                     |
| `keyword.control.conditional` | `if`, `else`                                                                                                      |
| `keyword.control.loop`        | `for`, `while`                                                                                                    |
| `keyword.control.exception`   | `try`, `catch`, `throw`                                                                                           |
| `keyword.declaration`         | `function`, `class` (some grammars)                                                                               |
| `keyword.other`               | Misc keywords                                                                                                     |

### Operators

| Scope                                    | Matches                                        |
| ---------------------------------------- | ---------------------------------------------- |
| `keyword.operator`                       | All operators (root)                           |
| `keyword.operator.arithmetic`            | `+ - * / %`                                    |
| `keyword.operator.assignment`            | `= += -=` etc.                                 |
| `keyword.operator.comparison`            | `== === < >`                                   |
| `keyword.operator.logical`               | `&& \|\| !`                                    |
| `keyword.operator.bitwise`               | `& \| ^ ~ << >>`                               |
| `keyword.operator.increment`             | `++ --`                                        |
| `keyword.operator.spread`                | `...`                                          |
| `keyword.operator.new`                   | `new`                                          |
| `keyword.operator.expression`            | `typeof`, `instanceof`, `in`, `void`, `delete` |
| `keyword.operator.arrow`                 | `=>`                                           |
| `keyword.operator.ternary`               | `? :`                                          |
| `keyword.operator.optional`              | `?.`                                           |
| `keyword.operator.nullish-coalescing`    | `??`                                           |
| `meta.arrow storage.type.function.arrow` | The `=>` in JS arrow functions                 |

### Punctuation

| Scope                           | Matches                                |
| ------------------------------- | -------------------------------------- |
| `punctuation`                   | All punctuation (root)                 |
| `punctuation.separator`         | `,` `;`                                |
| `punctuation.terminator`        | Statement terminator (`;`)             |
| `punctuation.accessor`          | `.` `?.` (member access)               |
| `punctuation.section`           | Brackets/braces opening/closing region |
| `punctuation.section.block`     | `{` `}`                                |
| `punctuation.section.parens`    | `(` `)`                                |
| `punctuation.section.brackets`  | `[` `]`                                |
| `punctuation.definition.string` | String quotes                          |
| `punctuation.definition.tag`    | HTML/JSX tag brackets                  |

### HTML / JSX

| Scope                              | Matches                  |
| ---------------------------------- | ------------------------ |
| `meta.tag`                         | Whole tag region         |
| `entity.name.tag`                  | Tag name (`div`, `span`) |
| `entity.other.attribute-name`      | Attribute name           |
| `string.quoted.double.html`        | Attribute value          |
| `meta.tag.metadata.doctype.html`   | Doctype                  |
| `punctuation.definition.tag.begin` | `<`                      |
| `punctuation.definition.tag.end`   | `>`                      |
| `constant.character.entity.html`   | `&amp;`, `&lt;`          |

### CSS / SCSS / Less

| Scope                                                | Matches                           |
| ---------------------------------------------------- | --------------------------------- |
| `entity.name.tag.css`                                | Element selector (`div`)          |
| `entity.other.attribute-name.class.css`              | `.class` selector                 |
| `entity.other.attribute-name.id.css`                 | `#id` selector                    |
| `entity.other.attribute-name.pseudo-class.css`       | `:hover`                          |
| `entity.other.attribute-name.pseudo-element.css`     | `::before`                        |
| `support.type.property-name.css`                     | Property name (`color`, `margin`) |
| `support.constant.property-value.css`                | Keyword value (`auto`, `inherit`) |
| `constant.numeric.css`                               | Numeric value with unit           |
| `keyword.other.unit.css`                             | Unit (`px`, `em`)                 |
| `support.constant.color.w3c-standard-color-name.css` | Named colors                      |
| `keyword.other.important.css`                        | `!important`                      |

### Markdown

| Scope                      | Matches                     |
| -------------------------- | --------------------------- |
| `markup.heading`           | Headings (`#`, `##`)        |
| `markup.heading.1`..`6`    | Specific levels             |
| `markup.bold`              | `**bold**`                  |
| `markup.italic`            | `*italic*`                  |
| `markup.underline`         | Underlined text             |
| `markup.underline.link`    | Link URL                    |
| `markup.inline.raw`        | `` `inline code` ``         |
| `markup.fenced_code.block` | ` ``` ` blocks              |
| `markup.quote`             | `> quote`                   |
| `markup.list`              | `-`, `*`, `1.` list markers |
| `markup.raw`               | Pre-formatted text          |
| `meta.link`                | Link region                 |

### Diff / patch

| Scope                        | Matches          |
| ---------------------------- | ---------------- |
| `markup.inserted`            | `+ added` line   |
| `markup.deleted`             | `- removed` line |
| `markup.changed`             | Modified         |
| `meta.diff.header`           | Diff header      |
| `meta.diff.range`            | `@@ ... @@`      |
| `meta.diff.header.from-file` | `--- old`        |
| `meta.diff.header.to-file`   | `+++ new`        |

### Errors / invalid

| Scope                | Matches          |
| -------------------- | ---------------- |
| `invalid`            | Generic invalid  |
| `invalid.illegal`    | Illegal token    |
| `invalid.deprecated` | Deprecated usage |

---

## 3. Semantic Tokens (`semanticTokenColors`)

Language servers (TS, Python LSP, Rust analyzer, etc.) provide semantic tokens that override TextMate scopes when active. Format:

```jsonc
"semanticTokenColors": {
    "variable.readonly:javascript": "#aabbcc",
    "function.declaration": { "foreground": "#aabbcc", "italic": false },
    "*.deprecated": { "strikethrough": true }
}
```

### Standard token types

`namespace`, `class`, `enum`, `interface`, `struct`, `typeParameter`, `type`, `parameter`, `variable`, `property`, `enumMember`, `decorator`, `event`, `function`, `method`, `macro`, `label`, `comment`, `string`, `keyword`, `number`, `regexp`, `operator`

### Standard token modifiers

`declaration`, `definition`, `readonly`, `static`, `deprecated`, `abstract`, `async`, `modification`, `documentation`, `defaultLibrary`

Combine with `.`: e.g. `variable.readonly`, `function.async.declaration`. Append `:language` to scope per-language: `variable:python`.

To **disable** semantic highlighting in your theme:

```jsonc
"semanticHighlighting": false
```

---

## 4. Useful Workflow

1. **Inspect tokens**: Cmd+Shift+P → **Developer: Inspect Editor Tokens and Scopes**. Click any character to see its scope stack and which rule won.
2. **Hot-reload**: Cmd+R in the Extension Development Host after editing the JSON.
3. **Test garishly**: Use ugly colors like `#ff00ff` while developing — easy to spot whether a rule applied.
4. **Don't trust filenames in scope docs**: grammars vary. The inspector is the source of truth.
5. **Specificity wins, not order**: longer, more specific scope selectors beat shorter ones.
6. **Descendant selectors**: `outer inner` matches `inner` _inside_ `outer`. The inspector's scope stack reads inner→outer (top→bottom).

## 5. Sampler Files

Open these in the Extension Dev Host with **Inspect Tokens** to test:

- `sampler.js` — JS/TS language features
- Create `test.html`, `test.css`, `test.md`, `test.diff` for those specific scopes.
