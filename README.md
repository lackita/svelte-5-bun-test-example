# Bun Test DOM Testing in Svelte 5

This project reproduces some interaction problems I run into attempting to do frontend testing in Bun. These commands should reproduce the issue:

```
bun install
bun test
```

This is the error I get when running these locally:

```
$ bun install
bun install v1.1.6 (e58d67b4)

Checked 127 installs across 165 packages (no changes) [4.00ms]
$ bun test
bun test v1.1.6 (e58d67b4)

src/routes/+page.test.ts:
21 |   'intro',
22 | ]
23 | 
24 | /** Mount the component into the DOM. */
25 | const mount = (Component, options) => {
26 |   const props = $state(options.props ?? {})
                     ^
ReferenceError: Can't find variable: $state
      at mount (.../node_modules/@testing-library/svelte/src/core/modern.svelte.js:26:17)
      at render (.../node_modules/@testing-library/svelte/src/pure.js:72:21)
      at .../src/routes/+page.test.ts:6:5
✗ example [0.39ms]

 0 pass
 1 fail
Ran 1 tests across 1 files. [156.00ms]
```
