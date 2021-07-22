### About
This is a tiny library that allows for Horadric Helper tags to be attached to divs.
This is for cases where using custom html tags is not possible.


### Link
- Example: https://codepen.io/meta-is-beta/pen/NWjaEGP
- CDN: https://cdn.jsdelivr.net/gh/meta-is-beta/horadric-helper-html-binder@latest/hh-binder.js

### Usage
#### Marked div
```html
<div data-hh-reference="reference"></div>
```
#### Binding function
```js
window.BindHoradricHelperHtmlTags(configList);
```
Where `configList` is:
```typescript
type ConfigList = {
  reference: String; // Reference of item or passive and div that will be binded together.
  type: "item" | "passive"; // Type of data that will be binded into div.
  props: [prop: string]: string; // Dictionary of item or passive props and ther values.
}
```


#### Example:
```html
<div data-hh-reference="reefbane"></div>

<script>
window.BindHoradricHelperHtmlTags([
  {
    reference: "reefbane",
    type: "item",
    props: {
      "as-showcase": true,
      "icon-inside": true,
      "icon-size": "sm"
    }
  }
]);
</script>
```