# Markdown Theme Sampler

A single document exercising the common `markup.*` scopes.

## Headings

# H1 heading

## H2 heading

### H3 heading

#### H4 heading

##### H5 heading

###### H6 heading

# Alternative H1

## Alternative H2

## Inline formatting

This paragraph has **bold text**, _italic text_, **_bold italic_**, ~~strikethrough~~, and `inline code`.

Underscores work too: **bold**, _italic_, **_both_**.

Here's a [link to example.com](https://example.com) and a [link with title](https://example.com "Hover title").
Reference-style: [a reference link][ref1].

Auto-link: <https://example.com> and <user@example.com>.

Footnote reference[^1].

## Lists

Unordered:

- First item
- Second item
  - Nested item
  - Another nested
    - Deeply nested
- Third item

Ordered:

1. First
2. Second
3. Third
   1. Nested ordered
   2. Another

Task list:

- [x] Completed task
- [ ] Pending task
- [ ] Another pending

## Blockquotes

> This is a single-line blockquote.

> Multi-line blockquote
> spanning several lines
> with **inline formatting** inside.

> Nested quotes
>
> > Second level
> >
> > > Third level

## Code blocks

Indented code block:

    function indented() {
        return "four spaces";
    }

Fenced code block (no language):

```
plain fenced block
no syntax highlighting
```

Fenced code block with language:

```js
function fenced(name) {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  return greeting;
}
```

```python
def hello(name: str) -> str:
    return f"Hello, {name}!"
```

```bash
$ ls -la
$ echo "test"
```

## Tables

| Header 1 | Header 2 | Header 3 |
| -------- | :------: | -------: |
| left     |  center  |    right |
| cell     |   cell   |     cell |
| **bold** | _italic_ |   `code` |

## Horizontal rules

---

---

---

## Images

![Alt text](https://example.com/image.png)
![With title](https://example.com/image.png "Image title")

## HTML inside Markdown

<div class="custom">
  <p>Raw HTML is allowed.</p>
  <span style="color: red;">Inline HTML too.</span>
</div>

<br>

## Escaping

Use backslash to escape: \*not italic\*, \`not code\`, \# not a heading.

## Definition list (extended)

Term 1
: Definition of term 1

Term 2
: Definition of term 2
: Second definition

## Footnotes

[^1]: This is a footnote definition.

[ref1]: https://example.com "Reference link target"
