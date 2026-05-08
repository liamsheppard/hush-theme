// Merge theme sampler — exercises merge.* and mergeEditor.* scopes.
// Open this file directly to see inline conflict decorations and the
// overview-ruler / minimap marks. Right-click → "Open in Merge Editor"
// for the full 3-pane view.
//
// Tokens exercised:
//   merge.currentHeaderBackground / .currentContentBackground
//   merge.incomingHeaderBackground / .incomingContentBackground
//   merge.commonHeaderBackground / .commonContentBackground
//   editorOverviewRuler.currentContentForeground / .incomingContentForeground
//   mergeEditor.change.background, .changeWord.background,
//   mergeEditor.conflict.unhandledFocusedBorder, etc.

function greet(name) {
<<<<<<< HEAD
  // current change — what's on this branch
  return "Hello, " + name + "!";
||||||| merged common ancestors
  // common ancestor — original line before either side changed it
  return "Hi " + name;
=======
  // incoming change — what's being merged in
  return `Hey ${name} 👋`;
>>>>>>> feature/new-greeting
}

class Example {
  constructor(value) {
<<<<<<< HEAD
    this.value = value;
    this.timestamp = Date.now();
=======
    this.value = value ?? null;
    this.createdAt = new Date();
>>>>>>> feature/new-greeting
  }

  render() {
<<<<<<< HEAD
    return `<span class="current">${this.value}</span>`;
||||||| merged common ancestors
    return "<span>" + this.value + "</span>";
=======
    return `<div data-value="${this.value}">${this.value}</div>`;
>>>>>>> feature/new-greeting
  }
}

console.log(greet("world"));
export { Example, greet };
