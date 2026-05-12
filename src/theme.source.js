import {
  n,
  blue,
  cyan,
  purple,
  primary,
  mutedPrimary,
  red,
  pink,
  orange,
  green,
} from "./colors.js";

const lightTheme = {
  // Neutral foregrounds
  neutralForeground1: n[22],
  neutralForeground2: n[46],
  neutralForeground3: n[74],
  disabledForeground: n[56],
  neutralBorder: n[80],

  // Neutral backgrounds
  neutralBackground1: n[100],
  neutralBackground1Subtle: n[98],
  neutralBackground2: n[96],
  neutralBackground2Subtle: n[94],
  neutralBackground3: n[90],
  neutralBackground3Hover: n[86],

  // Transparent
  transparent: "#00000000",
  bAlpha11: "#00000011",
  bAlpha22: "#00000022",
  bAlpha33: "#00000033",
  bAlpha44: "#00000044",
  wAlpha55: "#ffffff55",
  gAlpha11: `${n[20]}11`,
  gAlpha22: `${n[20]}22`,
  gAlpha44: `${n[20]}44`,
  pAlpha11: `${primary[100]}11`,
  pAlpha22: `${primary[100]}22`,
  pAlpha33: `${primary[100]}33`,
  pAlpha44: `${primary[100]}44`,
  pAlpha55: `${primary[100]}55`,
  pAlpha88: `${primary[100]}88`,
  pAlphaAA: `${primary[100]}AA`,
  mpAlpha11: `${mutedPrimary[100]}11`,
  mpAlpha22: `${mutedPrimary[100]}22`,
  mpAlpha33: `${mutedPrimary[100]}33`,
  mpAlpha44: `${mutedPrimary[100]}44`,
  mpAlpha55: `${mutedPrimary[100]}55`,
  mpAlpha88: `${mutedPrimary[100]}88`,
  mpAlphaAA: `${mutedPrimary[100]}AA`,

  selectionBackground: `${primary[80]}33`,

  // Primary brand
  mutedPrimaryBorder: mutedPrimary[120],
  primaryActiveBorder: "#01AFA1", // Primary 100, max chroma
  onPrimaryBackground: n[100],
  primaryBackground: primary[90],
  primaryBackgroundHover: primary[80],
  primaryBackground2: primary[150],
  primaryBackground3: primary[160],
  primaryForeground1: primary[80],
  primaryForeground2: primary[50],
  primaryForeground3: mutedPrimary[110],
  primaryStroke2: primary[120],

  mutedPrimaryBackground2: `${mutedPrimary[140]}DD`,
  mutedPrimaryBackground3: `${mutedPrimary[140]}AA`,
  mutedPrimaryForeground2: mutedPrimary[90],
  mutedPrimaryForeground2Hover: mutedPrimary[50],

  // Colors
  blueBackground: blue[90],
  cyanBackground: cyan[90],
  purpleBackground: purple[90],
  pinkBackground: pink[90],
  pinkForeground: pink[80],
  greenBackground: primary[90],
  orangeBackground: orange[90],
  orangeForeground: orange[90],
  redBackground: red[90],

  // Git
  mergeCurrent: primary[140],
  mergeIncoming: purple[130],
  mergeCommon: blue[130],
  insertedTextBackground: mutedPrimary[150],
  insertedLineBackground: mutedPrimary[160],
  removedTextBackground: red[130],
  removedLineBackground: red[150],

  // Git Tree
  gitModified: blue[80],
  gitModifiedBackground: blue[130],
  gitUntracked: primary[80],
  gitDeleted: red[90],
  gitRenamed: purple[90],
  gitConflicting: pink[90],
  gitIgnored: n[56],
  gitSubmodule: purple[90],
  gitAdded: primary[50],
  gitAddedBackground: primary[140],
  gitStageModified: blue[50],
  gitStageDeleted: red[50],

  // Errors
  errorForeground1: red[90],
  errorForeground2: red[60],
  onErrorBackground2: n[100],
  errorBackground1: red[140],
  errorBackground2: red[90],
  errorBorder: red[90],
  errorHighlight: `${red[90]}AA`,

  // Warnings
  warningForeground1: orange[90],
  warningForeground2: orange[60],
  onWarningBackground2: n[100],
  warningBackground1: orange[150],
  warningBackground2: orange[90],
  warningBorder: orange[90],
  warningHighlight: `${orange[90]}AA`,

  // Editor
  textHover: `${blue[130]}55`,
  textBorder: blue[130],
  findSelectedMatchBackground: `${orange[100]}55`,
  findMatchBackground: `${orange[100]}33`,
  findMatchHighlight: `${orange[90]}AA`,
  peekMatch: orange[150],
  editorLink: "#029388", // Primary 90, max chroma
  bracketMatchBackground: `${cyan[100]}11`,
  bracketMatchBorder: cyan[110],
  bracketMatchBorder2: cyan[130],

  // Lightbulbs
  lightBulb: pink[90],
  lightBulbAuto: purple[90],
  lightBulbAI: blue[90],

  // Info
  infoHighlight: `${cyan[90]}66`,
  infoForeground: cyan[90],

  // Syntax
  punctuation: n[66],
  punctuation2: "#89AFBC", // Cyan 110 desaturated
  var: purple[80],
  string: primary[80],
  key: cyan[80],
  comment: pink[80],
  subtleComment: n[74],
  number: blue[80],
  operator: blue[80],
  type: purple[80],
  func: orange[100],
  class: orange[100],
  preFg: purple[60],
  preBg: `${purple[90]}22`,
};

// Dark theme token map. Starts as a clone of lightTheme — override fields below
// to customise the dark variant.
const darkTheme = {
  // Neutral foregrounds
  neutralForeground1: n[94],
  neutralForeground2: n[82],
  neutralForeground3: n[40],
  disabledForeground: n[48],
  neutralBorder: n[24],

  // Neutral backgrounds
  neutralBackground1: n[10],
  neutralBackground1Subtle: n[12],
  neutralBackground2: n[4],
  neutralBackground2Subtle: n[6],
  neutralBackground3: n[20],
  neutralBackground3Hover: n[24],

  // Transparent
  transparent: "#00000000",
  bAlpha11: "#ffffff11",
  bAlpha22: "#ffffff22",
  bAlpha33: "#ffffff33",
  bAlpha44: "#ffffff44",
  wAlpha55: "#00000055",
  gAlpha11: `${n[80]}11`,
  gAlpha22: `${n[80]}22`,
  gAlpha44: `${n[80]}44`,
  pAlpha11: `${primary[100]}11`,
  pAlpha22: `${primary[100]}22`,
  pAlpha33: `${primary[100]}33`,
  pAlpha44: `${primary[100]}44`,
  pAlpha55: `${primary[100]}55`,
  pAlpha88: `${primary[100]}88`,
  pAlphaAA: `${primary[100]}AA`,
  mpAlpha11: `${mutedPrimary[100]}11`,
  mpAlpha22: `${mutedPrimary[100]}22`,
  mpAlpha33: `${mutedPrimary[100]}33`,
  mpAlpha44: `${mutedPrimary[100]}44`,
  mpAlpha55: `${mutedPrimary[100]}55`,
  mpAlpha88: `${mutedPrimary[100]}88`,
  mpAlphaAA: `${mutedPrimary[100]}AA`,

  selectionBackground: `${primary[120]}33`,

  // Primary brand
  mutedPrimaryBorder: mutedPrimary[70],
  primaryActiveBorder: primary[90],
  onPrimaryBackground: n[100],
  primaryBackground: primary[80],
  primaryBackgroundHover: primary[90],
  primaryBackground2: primary[40],
  primaryBackground3: primary[20],
  primaryForeground1: primary[100],
  primaryForeground2: primary[160],
  primaryForeground3: mutedPrimary[80],
  primaryStroke2: primary[40],

  mutedPrimaryBackground2: `${mutedPrimary[40]}DD`,
  mutedPrimaryBackground3: `${mutedPrimary[40]}AA`,
  mutedPrimaryForeground2: mutedPrimary[150],
  mutedPrimaryForeground2Hover: n[100],

  // Colors
  blueBackground: blue[110],
  cyanBackground: cyan[110],
  purpleBackground: purple[110],
  pinkBackground: pink[110],
  pinkForeground: pink[100],
  greenBackground: primary[110],
  orangeBackground: orange[110],
  orangeForeground: orange[110],
  redBackground: red[110],

  // Git
  mergeCurrent: primary[60],
  mergeIncoming: purple[40],
  mergeCommon: blue[50],
  insertedTextBackground: mutedPrimary[40],
  insertedLineBackground: mutedPrimary[20],
  removedTextBackground: red[40],
  removedLineBackground: red[20],

  // Git Tree
  gitModified: blue[110],
  gitModifiedBackground: blue[130],
  gitUntracked: primary[110],
  gitDeleted: red[100],
  gitRenamed: purple[100],
  gitConflicting: pink[100],
  gitIgnored: n[56],
  gitSubmodule: purple[100],
  gitAdded: primary[140],
  gitAddedBackground: primary[140],
  gitStageModified: blue[140],
  gitStageDeleted: red[140],

  // Errors
  errorForeground1: red[110],
  errorForeground2: red[130],
  onErrorBackground2: n[12],
  errorBackground1: red[30],
  errorBackground2: red[110],
  errorBorder: red[90],
  errorHighlight: `${red[90]}AA`,

  // Warnings
  warningForeground1: orange[110],
  warningForeground2: orange[130],
  onWarningBackground2: n[12],
  warningBackground1: orange[30],
  warningBackground2: orange[90],
  warningBorder: orange[90],
  warningHighlight: `${orange[90]}AA`,

  // Editor
  textHover: `${blue[80]}66`,
  textBorder: blue[80],
  findSelectedMatchBackground: `${orange[90]}BB`,
  findMatchBackground: `${orange[90]}66`,
  findMatchHighlight: `${orange[90]}AA`,
  peekMatch: orange[50],
  editorLink: primary[120],
  bracketMatchBackground: `${cyan[110]}22`,
  bracketMatchBorder: cyan[90],
  bracketMatchBorder2: cyan[60],

  // Lightbulbs
  lightBulb: pink[100],
  lightBulbAuto: purple[100],
  lightBulbAI: blue[100],

  // Info
  infoHighlight: `${cyan[100]}66`,
  infoForeground: cyan[100],

  // Syntax
  punctuation: n[50],
  punctuation2: "#6A8792", // Cyan 90 desaturated
  var: purple[100],
  string: primary[110],
  key: cyan[110],
  comment: pink[110],
  subtleComment: n[40],
  number: blue[100],
  operator: blue[100],
  type: purple[100],
  func: orange[120],
  class: orange[120],
  preFg: purple[110],
  preBg: `${purple[100]}22`,
};

const buildTheme = (name, colors) => ({
  name,
  colors: {
    // Base Colors
    foreground: colors.neutralForeground1,
    descriptionForeground: colors.neutralForeground2,
    disabledForeground: colors.disabledForeground,
    "icon.foreground": colors.neutralForeground2,
    focusBorder: colors.primaryActiveBorder,
    errorForeground: colors.errorForeground1,
    "titleBar.activeBackground": colors.neutralBackground1,
    "titleBar.border": colors.bAlpha22,

    // Activity Bar
    "activityBar.background": colors.neutralBackground1,
    "activityBar.foreground": colors.neutralForeground1,
    "activityBarBadge.background": colors.primaryBackground,
    "activityBarBadge.foreground": colors.onPrimaryBackground,
    "activityBar.activeBorder": colors.primaryBackground,
    "activityBar.activeBackground": colors.neutralBackground1,
    "panel.border": colors.bAlpha22,
    "panel.dropBorder": colors.primaryActiveBorder,
    "panelTitle.activeBorder": colors.primaryBackground,
    "panelTitle.activeForeground": colors.neutralForeground1,
    "panelTitle.border": colors.neutralBackground2,
    "panelTitle.inactiveForeground": colors.disabledForeground,

    // Tabs
    "editorGroup.border": colors.bAlpha22,
    "tab.border": colors.bAlpha22,
    "tab.inactiveBackground": colors.neutralBackground2Subtle,
    "tab.unfocusedHoverBackground": colors.neutralBackground2,
    "tab.unfocusedHoverForeground": colors.neutralForeground1,
    "tab.inactiveForeground": colors.disabledForeground,
    "tab.activeBackground": colors.neutralBackground1,
    "tab.selectedBorderTop": colors.primaryActiveBorder,
    "editorGroup.dropBackground": colors.pAlpha33,
    "editorGroupHeader.tabsBackground": colors.neutralBackground3,
    "editorGroupHeader.noTabsBackground": colors.neutralBackground3,
    "tab.unfocusedActiveBackground": colors.neutralBackground1,
    "editorGroupHeader.border": colors.bAlpha11,
    "editorGroup.dropIntoPromptBackground": colors.neutralBackground1,
    "tab.dragAndDropBorder": colors.primaryActiveBorder,

    // Sidebar
    "sideBar.background": colors.neutralBackground2,
    "sideBar.border": colors.bAlpha11,
    "sideBarSectionHeader.background": colors.neutralBackground2,

    // Status bar
    "statusBar.background": colors.neutralBackground1,
    "statusBar.foreground": colors.neutralForeground2,
    "statusBar.border": colors.bAlpha22,
    "statusBar.debuggingBackground": colors.errorBackground2,
    "statusBar.debuggingForeground": colors.onErrorBackground2,
    "statusBar.noFolderBackground": colors.mutedPrimaryBackground2,
    "statusBar.noFolderForeground": colors.mutedPrimaryForeground2,
    "statusBarItem.errorBackground": colors.errorBackground2,
    "statusBarItem.errorForeground": colors.onErrorBackground2,
    "statusBarItem.warningBackground": colors.warningBackground2,
    "statusBarItem.warningForeground": colors.onWarningBackground2,

    // Buttons
    "button.background": colors.primaryBackground,
    "button.hoverBackground": colors.primaryBackgroundHover,
    "button.foreground": colors.onPrimaryBackground,
    "button.secondaryBackground": colors.neutralBackground3,
    "button.secondaryHoverBackground": colors.neutralBackground3Hover,
    "button.secondaryForeground": colors.neutralForeground1,
    "button.separator": colors.wAlpha55,
    "toolbar.hoverBackground": colors.gAlpha11,
    "toolbar.activeBackground": colors.gAlpha22,
    "inputOption.activeBackground": colors.primaryBackground3,
    "inputOption.activeForeground": colors.primaryForeground2,
    "inputOption.hoverBackground": colors.gAlpha11,
    "inputValidation.infoBackground": colors.neutralBackground1,
    "inputValidation.infoForeground": colors.neutralForeground1,
    "inputValidation.infoBorder": colors.neutralBorder,
    "inputValidation.errorBackground": colors.neutralBackground2,
    "inputValidation.errorForeground": colors.errorForeground2,
    "inputValidation.errorBorder": colors.errorBorder,
    "inputValidation.warningBackground": colors.warningBackground1,
    "inputValidation.warningForeground": colors.warningForeground2,
    "inputValidation.warningBorder": colors.warningBorder,

    // Checkbox
    "checkbox.background": colors.transparent,
    "checkbox.foreground": colors.neutralForeground1,
    "checkbox.border": colors.mutedPrimaryBorder,
    "checkbox.disabled.background": colors.neutralBackground1Subtle,
    "checkbox.disabled.foreground": colors.disabledForeground,

    // Input
    "input.background": colors.neutralBackground1,
    "input.border": colors.bAlpha22,
    "input.placeholderForeground": colors.disabledForeground,

    // Dropdown
    "dropdown.background": colors.neutralBackground1,
    "dropdown.listBackground": colors.neutralBackground1,
    "dropdown.border": colors.bAlpha22,

    // Badge
    "badge.background": colors.mutedPrimaryBackground2,
    "badge.foreground": colors.mutedPrimaryForeground2,

    // Interactive
    "progressBar.background": colors.primaryBackground,
    "sash.hoverBorder": colors.primaryActiveBorder,
    "selection.background": colors.pAlpha55,
    "scrollbar.background": colors.transparent,
    "scrollbarSlider.background": colors.bAlpha22,
    "scrollbarSlider.hoverBackground": colors.bAlpha33,
    "scrollbarSlider.activeBackground": colors.bAlpha44,
    "settings.modifiedItemIndicator": colors.primaryStroke2,

    // Notifications
    "notifications.background": colors.neutralBackground1,

    // Widget
    "editorWidget.background": colors.neutralBackground1,
    "editorWidget.foreground": colors.neutralForeground1,
    "editorWidget.resizeBorder": colors.mutedPrimaryBorder,
    "widget.border": colors.bAlpha22,
    "widget.shadow": colors.bAlpha22,
    "editor.hoverHighlightBackground": colors.textHover, // Hover
    "editorHoverWidget.background": colors.neutralBackground1,
    "editorHoverWidget.border": colors.textBorder,

    // Intellisense widget
    "editorSuggestWidget.highlightForeground": colors.orangeForeground, // Matched substring in suggestions
    "editorSuggestWidget.focusHighlightForeground": colors.orangeForeground,

    // Quick input / Command palette
    "list.highlightForeground": colors.orangeForeground,
    "list.focusHighlightForeground": colors.orangeForeground,

    // Markdown colors
    "textSeparator.foreground": colors.gAlpha44,
    "textLink.foreground": colors.primaryForeground1,
    "textLink.activeForeground": colors.primaryForeground2,
    "textBlockQuote.background": colors.neutralBackground1Subtle,
    "textBlockQuote.border": colors.primaryStroke2,
    "textCodeBlock.background": colors.gAlpha33,
    "textPreformat.foreground": colors.preFg,
    "textPreformat.background": colors.preBg,

    // Tree view
    "list.activeSelectionForeground": colors.primaryForeground2,
    "list.activeSelectionIconForeground": colors.primaryForeground2,
    "list.activeSelectionBackground": colors.mutedPrimaryBackground3,
    "list.focusOutline": colors.primaryForeground1,
    "list.hoverBackground": colors.mutedPrimaryBackground2,
    "list.hoverForeground": colors.mutedPrimaryForeground2Hover,
    "list.inactiveSelectionBackground": colors.mutedPrimaryBackground3,
    "list.inactiveSelectionForeground": colors.primaryForeground2,
    "list.inactiveSelectionIconForeground": colors.primaryForeground2,
    "list.invalidItemForeground": colors.errorForeground2,
    "list.dropBackground": colors.primaryBackground2,

    // Tree view status
    "list.errorForeground": colors.errorForeground1,
    "list.warningForeground": colors.warningForeground1,
    "tree.indentGuidesStroke": colors.gAlpha44,
    "gitDecoration.modifiedResourceForeground": colors.gitModified,
    "gitDecoration.untrackedResourceForeground": colors.gitUntracked,
    "gitDecoration.deletedResourceForeground": colors.gitDeleted,
    "gitDecoration.renamedResourceForeground": colors.gitRenamed,
    "gitDecoration.conflictingResourceForeground": colors.gitConflicting,
    "gitDecoration.ignoredResourceForeground": colors.gitIgnored,
    "gitDecoration.submoduleResourceForeground": colors.gitSubmodule,
    "gitDecoration.addedResourceForeground": colors.gitAdded,
    "gitDecoration.stageModifiedResourceForeground": colors.gitStageModified,
    "gitDecoration.stageDeletedResourceForeground": colors.gitStageDeleted,

    // Editor
    "editor.background": colors.neutralBackground1,
    "editor.foreground": colors.neutralForeground1,
    "editor.lineHighlightBackground": colors.neutralBackground2,
    "editorLineNumber.foreground": colors.neutralForeground3,
    "editorLineNumber.activeForeground": colors.neutralForeground2,
    "editorLineNumber.dimmedForeground": colors.neutralForeground3,
    "editorIndentGuide.background": colors.gAlpha22,
    "editorIndentGuide.activeBackground": colors.bracketMatchBorder2,
    "editorCodeLens.foreground": colors.subtleComment,
    "gitlens.trailingLineForegroundColor": colors.subtleComment,
    "editorLink.activeForeground": colors.editorLink,
    "editor.selectionBackground": colors.selectionBackground,
    "editor.findMatchBackground": colors.findSelectedMatchBackground, // Focused match background
    "editor.findMatchHighlightBackground": colors.findMatchBackground, // All matches background
    "search.resultsInfoForeground": colors.neutralForeground1,
    "editor.findRangeHighlightBackground": colors.findMatchBackground,
    "editor.selectionHighlightBackground": colors.pAlpha33,
    "editor.wordHighlightBackground": colors.mpAlpha33,
    "editor.wordHighlightStrongBackground": colors.pAlpha33,
    "editor.wordHighlightStrongBorder": colors.pAlphaAA,
    "editorBracketMatch.background": colors.bracketMatchBackground,
    "editorBracketMatch.border": colors.bracketMatchBorder,
    "editorOverviewRuler.errorForeground": colors.errorForeground1,
    "editorOverviewRuler.deletedForeground": colors.errorForeground1,
    "editorGutter.deletedBackground": colors.errorForeground1,
    "editorOverviewRuler.warningForeground": colors.warningForeground1,
    "editorError.foreground": colors.errorForeground1,
    "editorWarning.foreground": colors.warningForeground1,
    "editorInfo.foreground": colors.infoForeground,
    "editorLightBulb.foreground": colors.lightBulb,
    "editorLightBulbAutoFix.foreground": colors.lightBulbAuto,
    "editorLightBulbAi.foreground": colors.lightBulbAI,

    // Editor Git
    "editorOverviewRuler.addedForeground": colors.gitAddedBackground,
    "editorGutter.addedBackground": colors.gitAddedBackground,
    "editorOverviewRuler.modifiedForeground": colors.gitModifiedBackground,
    "editorGutter.modifiedBackground": colors.gitModifiedBackground,
    "editorGutter.modifiedSecondaryBackground": colors.gitModifiedBackground,

    // Peek view
    "peekView.border": colors.primaryActiveBorder,
    "peekViewEditor.background": colors.neutralBackground1Subtle,
    "peekViewEditorGutter.background": colors.neutralBackground2,
    "peekViewResult.background": colors.neutralBackground2,
    "peekViewTitle.background": colors.neutralBackground2,
    "peekViewResult.selectionBackground": colors.mutedPrimaryBackground3,
    "peekViewEditor.matchHighlightBackground": colors.peekMatch,

    // Merge
    "merge.currentHeaderBackground": colors.mergeCurrent,
    "merge.incomingHeaderBackground": colors.mergeIncoming,
    "merge.commonHeaderBackground": colors.mergeCommon,

    // Diff editor
    "diffEditor.insertedTextBackground": colors.insertedTextBackground,
    "diffEditor.removedTextBackground": colors.removedTextBackground,
    "diffEditor.insertedLineBackground": colors.insertedLineBackground,
    "diffEditor.removedLineBackground": colors.removedLineBackground,
    "diffEditorGutter.insertedLineBackground": colors.insertedLineBackground,
    "diffEditorGutter.removedLineBackground": colors.removedLineBackground,
    "diffEditor.diagonalFill": colors.gAlpha22,
    "diffEditorOverview.insertedForeground": colors.primaryBackground2,
    "diffEditorOverview.removedForeground": colors.errorBackground1,

    // Minimap
    "minimap.findMatchHighlight": colors.findMatchHighlight,
    "minimap.selectionHighlight": colors.pAlphaAA,
    "minimap.errorHighlight": colors.errorHighlight,
    "minimap.warningHighlight": colors.warningHighlight,
    "minimap.infoHighlight": colors.infoHighlight,

    // Brackets
    "editorBracketHighlight.foreground1": colors.punctuation,
    "editorBracketHighlight.foreground2": colors.punctuation2,
    "editorBracketHighlight.foreground3": colors.punctuation,
    "editorBracketHighlight.foreground4": colors.punctuation2,
    "editorBracketHighlight.foreground5": colors.punctuation,
    "editorBracketHighlight.foreground6": colors.punctuation2,
    "editorBracketHighlight.unexpectedBracket.foreground":
      colors.errorForeground1,
    "editorUnnecessaryCode.opacity": "#000000aa", // Opacity mask

    // Breadcrumbs
    "symbolIcon.classForeground": colors.func,
    "symbolIcon.functionForeground": colors.func,
    "symbolIcon.interfaceForeground": colors.type,
    "symbolIcon.methodForeground": colors.func,
    "symbolIcon.numberForeground": colors.number,
    "symbolIcon.stringForeground": colors.string,
    "symbolIcon.variableForeground": colors.var,
    "symbolIcon.propertyForeground": colors.string,
  },
  tokenColors: [
    {
      name: "Comments: Line",
      scope: [
        "comment",
        "punctuation.definition.comment",
        "comment.line",
        "comment.line punctuation.definition.comment",
      ],
      settings: {
        foreground: colors.comment,
      },
    },
    {
      name: "Comments: Block",
      scope: [
        "comment.block",
        "comment.documentation",
        "comment.block punctuation.definition.comment",
      ],
      settings: {
        foreground: colors.comment,
      },
    },
    {
      name: "Invalid - Illegal",
      scope: "invalid.illegal",
      settings: {
        foreground: colors.errorForeground1,
      },
    },
    {
      name: "Punctuation",
      scope: [
        "punctuation",
        "punctuation.accessor",
        "punctuation.terminator",
        "keyword.operator.assignment",
        "meta.arrow storage.type.function.arrow",
        "meta.separator.markdown",
        "meta.field.declaration keyword.operator",
      ],
      settings: {
        foreground: colors.punctuation,
      },
    },
    {
      name: "HTML: Doctype Declaration",
      scope: [
        "meta.tag.metadata.doctype.html",
        "meta.tag.metadata.doctype.html entity.name.tag",
        "meta.tag.metadata.doctype.html punctuation.definition.tag",
        "meta.tag.sgml.doctype",
        "meta.tag.sgml.doctype string",
        "meta.tag.sgml.doctype entity.name.tag",
        "meta.tag.sgml punctuation.definition.tag.html",
      ],
      settings: {
        foreground: colors.punctuation,
      },
    },
    {
      name: "HTML: Tag Names",
      scope: ["entity.name.tag"],
      settings: {
        foreground: colors.neutralForeground1,
      },
    },
    {
      name: "HTML/JSX: Attribute Names",
      scope: ["entity.other.attribute-name"],
      settings: { foreground: colors.neutralForeground2 },
    },
    {
      name: "HTML/JSX: Tag Punctuation",
      scope: [
        "punctuation.definition.tag",
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end",
      ],
      settings: { foreground: colors.punctuation },
    },
    {
      name: "Type keyword", // "type"
      scope: ["keyword.control.type"],
      settings: {
        foreground: colors.operator,
      },
    },
    {
      name: "Type definition",
      scope: [
        "meta.var-single-variable entity.name.type",
        "meta.interface.ts entity.name.type.interface.ts",
        "meta.interface.ts entity.name.type.interface.ts",
      ],
      settings: {
        foreground: colors.type,
      },
    },
    {
      name: "Classes",
      scope: [
        "meta.tag support.class.component",
        "entity.other.inherited-class",
      ],
      settings: {
        foreground: colors.class,
      },
    },
    {
      name: "Operators",
      scope: [
        "keyword.operator",
        "keyword.operator.logical",
        "keyword.operator.comparison",
        "keyword.operator.arithmetic",
        "meta.field.declaration keyword.operator.optional",
      ],
      settings: {
        foreground: colors.operator,
      },
    },
    {
      name: "Types", // E.g const/let/var/function
      scope: ["storage.type", "support.type"],
      settings: {
        foreground: colors.neutralForeground1, // Same as default foreground
      },
    },
    {
      name: "Function Definitions",
      scope: [
        "meta.definition.function entity.name.function",
        "meta.function entity.name.function",
        "entity.name.function",
      ],
      settings: {
        foreground: colors.func,
      },
    },
    {
      name: "Import/Export Statements",
      scope: [
        "keyword.control.import",
        "keyword.control.export",
        "meta.export variable.other.readwrite",
      ],
      settings: {
        foreground: colors.func,
      },
    },
    {
      name: "Variable Definitions",
      scope: [
        "meta.definition.variable",
        "meta.definition variable.other.readwrite",
        "variable.parameter",
      ],
      settings: {
        foreground: colors.var,
      },
    },
    {
      name: "Object keys",
      scope: [
        "meta.object-literal.key",
        "meta.definition.property variable.object.property",
      ],
      settings: {
        foreground: colors.neutralForeground1,
      },
    },
    {
      name: "Variable Uses",
      scope: [
        "meta variable.other.readwrite",
        "meta.embedded.line variable.other",
        "meta.embedded.line meta.function-call",
        "meta.function-call entity.name.function",
      ],
      settings: {
        foreground: colors.neutralForeground1, // Same as default foreground
      },
    },
    {
      name: "Keywords",
      scope: ["keyword.operator.new", "keyword.operator.expression"],
      settings: {
        foreground: colors.neutralForeground1, // Same as default foreground
      },
    },
    {
      name: "Type References",
      scope: ["entity.name.type"],
      settings: {
        foreground: colors.operator,
      },
    },
    {
      name: "CSS: Selectors",
      scope: [
        "meta.selector",
        "meta.selector entity",
        "meta.selector entity punctuation",
        "meta.selector.css punctuation.definition.entity",
        "entity.name.tag.css",
      ],
      settings: {
        foreground: colors.func,
      },
    },
    {
      name: "Exceptions",
      scope: "entity.name.exception",
      settings: {
        foreground: colors.errorForeground1,
      },
    },
    {
      name: "Numbers, Characters",
      scope: ["constant.numeric", "constant.character"],
      settings: {
        foreground: colors.number,
      },
    },
    {
      name: "Constants",
      scope: [
        "constant",
        "constant.language",
        "support.constant",
        "variable.language",
        "constant.other.symbol",
      ],
      settings: {
        foreground: colors.operator,
      },
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: colors.string,
      },
    },
    // Use dimmer green
    {
      name: "String punctuation",
      scope: "string punctuation.definition.string",
      settings: {
        foreground: colors.primaryForeground3,
      },
    },

    // Use same color as strings
    {
      name: "CSS: Property Values",
      scope: [
        "meta.property-value",
        "meta.property-value constant.other",
        "support.constant.property-value",
      ],
      settings: {
        foreground: colors.string,
      },
    },

    {
      name: "Strings: Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: colors.string,
      },
    },
    /* Color of symbols in html e.g. &amp; &lt; &gt */
    {
      name: "HTML: Entities",
      scope: ["constant.character.entity", "punctuation.definition.entity"],
      settings: {
        foreground: colors.operator,
      },
    },
    /* Color of symbols in js e.g. \n */
    {
      name: "Strings: Escape Sequences",
      scope: "constant.character.escape",
      settings: {
        foreground: colors.operator,
      },
    },
    {
      name: "Numerical operators",
      scope: ["keyword.operator.increment", "storage.type.numeric.bigint"],
      settings: {
        foreground: colors.operator,
      },
    },
    {
      name: "Regex: Operators and Keywords",
      scope: ["string.regexp keyword", "string.regexp keyword.operator"],
      settings: {
        foreground: colors.operator,
      },
    },

    {
      name: "CSS: Important Keyword",
      scope: "keyword.other.important",
      settings: {
        fontStyle: "bold",
      },
    },

    {
      name: "Markup: Changed",
      scope: "markup.changed",
      settings: {
        foreground: colors.neutralForeground1,
      },
    },
    {
      name: "Markup: Deletion",
      scope: "markup.deleted",
      settings: {
        foreground: colors.neutralForeground1,
      },
    },
    {
      name: "Sections",
      scope: "entity.name.section",
      settings: {
        fontStyle: "bold",
        foreground: colors.func,
      },
    },
    {
      name: "Markup: Emphasis",
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
        foreground: colors.neutralForeground1, // Same as default foreground
      },
    },
    {
      name: "Markup: Strong",
      scope: ["markup.bold"],
      settings: {
        fontStyle: "bold",
        foreground: colors.neutralForeground1, // Same as default foreground
      },
    },
    {
      name: "Markup: Link",
      scope: "meta.link",
      settings: {
        foreground: colors.editorLink,
      },
    },
    {
      name: "Markup: Heading",
      scope: "markup.heading",
      settings: {
        foreground: colors.editorLink,
      },
    },
    {
      name: "Markup: Error",
      scope: "markup.error",
      settings: {
        foreground: colors.errorForeground2,
      },
    },
    {
      name: "Markup: Insertion",
      scope: "markup.inserted",
      settings: {
        foreground: colors.neutralForeground1,
      },
    },
    {
      name: "Markup: Output",
      scope: ["markup.output", "markup.raw"],
      settings: {
        foreground: colors.neutralForeground2,
      },
    },
    {
      name: "Markup: Prompt",
      scope: "markup.prompt",
      settings: {
        foreground: colors.neutralForeground2,
      },
    },
    {
      name: "Markup: Traceback",
      scope: "markup.traceback",
      settings: {
        foreground: colors.errorForeground2,
      },
    },
    {
      name: "Markup: Underline",
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Markup Inline",
      scope: "markup.inline.raw",
      settings: {
        fontStyle: "",
        foreground: colors.var,
      },
    },
    {
      name: "Markup Punctuation",
      scope: [
        "markup.list punctuation.definition.list",
        "markup.quote punctuation.definition.quote",
        "markup.fenced_code.block punctuation.definition.markdown",
        "markup.fenced_code.block fenced_code.block.language",
      ],
      settings: {
        fontStyle: "",
        foreground: colors.operator,
      },
    },
    {
      name: "Extra: Diff Range",
      scope: ["meta.diff.range", "meta.diff.index", "meta.separator"],
      settings: {
        foreground: colors.neutralForeground2,
      },
    },
    {
      name: "Extra: Diff From",
      scope: "meta.diff.header.from-file",
      settings: {
        foreground: colors.neutralForeground2,
      },
    },
    {
      name: "Extra: Diff To",
      scope: "meta.diff.header.to-file",
      settings: {
        foreground: colors.neutralForeground2,
      },
    },
  ],
});

export { buildTheme, lightTheme, darkTheme };
