# @cross-ui/vue3

[WIP] Wrapper to easy use for [CrossUI Web Components](https://github.com/dimaslz/cross-ui-core) in your Vue3 applications.

## Installation

npm users: `npm install @cross-ui/vue3`

yarn users: `yarn add @cross-ui/vu3`

Now, in your main module, commonly `main.js` file (check [`/playground/src/main.js`](./playground/src/main.js))

```javascript
[...]
import CrossUI from '@cross-ui/vue3';

app.use(CrossUI);
[...]
```

And in your main css file, for example styles.scss (in playground project, you can see it in [`/playground/src/App.vue`](/playground/src/App.vue) in `<style lang="scss">`)

```scss
@import "@cross-ui/core/dist/cross-ui/cross-ui";
```

or in your `main.ts`

```typescript
import "@cross-ui/core/dist/cross-ui/cross-ui.css";
```

## Author

```js
{
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```
